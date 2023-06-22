from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
from scipy.spatial.distance import euclidean
from collections import Counter
import MySQLdb.cursors
import pandas as pd
import numpy as np
import json
import joblib
import time
import os
from flask_mysqldb import MySQL
from dotenv import load_dotenv


load_dotenv()
app = Flask(__name__)

# app.config['MYSQL_HOST'] = 'localhost'
# app.config['MYSQL_USER'] = 'root'
# app.config['MYSQL_PASSWORD'] = ''
# app.config['MYSQL_DB'] = 'es_akhir'
app.config['MYSQL_HOST'] = os.getenv("HOST")
app.config['MYSQL_USER'] = os.getenv("USERNAME")
app.config['MYSQL_PASSWORD'] = os.getenv("PASSWORD")
app.config['MYSQL_DB'] = os.getenv("DATABASE")
app.config['MYSQL_AUTOCOMMIT'] = True
app.config["MYSQL_CUSTOM_OPTIONS"] = {"ssl": True}


# connection = MySQLdb.connect(
#   host= os.getenv("HOST"),
#   user=os.getenv("USERNAME"),
#   passwd= os.getenv("PASSWORD"),
#   db= os.getenv("DATABASE"),
#   autocommit = True,
#   ssl_mode = "VERIFY_IDENTITY",
#   ssl      = {
#     "ca": "/etc/ssl/cert.pem"
#   }
# )


# load_dotenv('./.flaskenv')
mysql = MySQL(app)
CORS(app, resources={r"/api/*": {"origins": "*"}})


class ExpertSystem:
    def __init__(self):
        self.knowledge_base = []

    def add_case(self, answers, personality_type):
        self.knowledge_base.append((answers, personality_type))

    def predict_personality(self, new_user_answers, weights):
        distances = []
        for case in self.knowledge_base:
            case_answers, personality_type = case
            weighted_new_user = np.multiply(new_user_answers, weights)
            weighted_case_answers = np.multiply(case_answers, weights)
            distance = euclidean(weighted_case_answers, weighted_new_user)
            distances.append((distance, personality_type))
        distances.sort()
        return distances[0][1] if distances else None

expert_system = ExpertSystem()

def add_to_expert_system():
  cursor = mysql.connection.cursor()
  cursor.execute("SELECT q_val, type FROM cases")
  cases = cursor.fetchall()
  for answers, personality_type in cases:
    answers_list = eval(answers)
    print(answers_list)
    print(personality_type)
    expert_system.add_case(answers_list, personality_type)


@app.route('/')
def index():
    return jsonify({'msg': 'Hello World!'})

@app.route("/api/questions", methods = ['GET'])
def get_questions():
  """Gets all the quiz questions."""
  cursor = mysql.connection.cursor()
  cursor.execute('''SELECT * FROM personalitytraits''')
  questions = cursor.fetchall()
  
    # Convert the questions to JSON.
  json_questions = []
  for question in questions:
    json_question = {
      'id': question[0],
      'question': question[1],
    }
    json_questions.append(json_question)
  return jsonify(json_questions)

@app.route("/api/answer", methods = ['POST'])
def put_answer():
  username = request.json['username']
  q_val = request.json['q_val']
  sorted_key = sorted(q_val.keys())
  arr_ans = [int(q_val[key]) for key in sorted_key]
  # print(arr_ans)
  q_val = json.dumps(arr_ans)
  cursor = mysql.connection.cursor()
  add_to_expert_system()
  
  cursor.execute('SELECT weight FROM personalitymapping')
  weights = cursor.fetchall()
  weights_array = [weight[0] for weight in weights]
  print("weights",weights_array	)
  
  predicted_personality = expert_system.predict_personality(arr_ans, weights_array)
  
  cursor.execute(
        "INSERT INTO cases (username, q_val, type) "
        "VALUES (%s, %s, %s)",
        (username, q_val, predicted_personality))
  mysql.connection.commit()
  cursor.close()

  return {'prediction' : predicted_personality}


@app.route('/api/time', methods=['GET'])
def get_current_time():
    return {'time': time.time()}

@app.errorhandler(404)
def page_not_found(e):
    return jsonify(error=404, text=str(e)), 404