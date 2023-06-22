from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
from scipy.spatial.distance import euclidean
from collections import Counter
import MySQLdb.cursors
import pandas as pd
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

@app.route('/api/time', methods=['GET'])
def get_current_time():
    return {'time': time.time()}

@app.errorhandler(404)
def page_not_found(e):
    return jsonify(error=404, text=str(e)), 404