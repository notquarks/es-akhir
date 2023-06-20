from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
import pandas as pd
import json
import joblib
import time
from dotenv import load_dotenv

app = Flask(__name__)

load_dotenv('./.flaskenv')
app = Flask(__name__)
CORS(app, resources={r"/api/v1/*": {"origins": "*"}})
@app.route('/')
def index():
    return jsonify({'msg': 'Hello World!'})

@app.route('/api/time', methods=['GET'])
def get_current_time():
    return {'time': time.time()}