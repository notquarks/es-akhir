from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
import pandas as pd
import json
import joblib
import time
from flask_mysqldb import MySQL
from dotenv import load_dotenv

app = Flask(__name__)
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'es_akhir'


load_dotenv('./.flaskenv')
mysql = MySQL(app)
CORS(app, resources={r"/api/*": {"origins": "*"}})


@app.route('/')
def index():
    return jsonify({'msg': 'Hello World!'})

@app.route("/api/questions", methods = ['GET'])
def get_questions():
  """Gets all the quiz questions."""
  cursor = mysql.connection.cursor()
  cursor.execute('SELECT * FROM personalitytraits')
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