from app.services.deploy_data import *

# Ejemplo de uso
from flask import Flask, render_template, jsonify

app = Flask(__name__)

@app.route("/")
def index():
    return render_template('index.html')

from flask import request
@app.route("/processing", methods=['POST', 'GET'])
def Chosen_Preprocessing():
    try:
        option = request.args.get('operation', '')

        if  option == 'deploy_students':
            students_data = deploy_students()
            students_json = jsonify(students_data)
            return students_json
        
        if  option == 'deploy_teachers':
            teachers_data = deploy_teachers()
            teachers_json = jsonify(teachers_data)
            return teachers_json
    
    except Exception as e:
        # Captura cualquier excepción y devuelve un error JSON
        return jsonify({"error": str(e)}), 500  # Internal Server Error
