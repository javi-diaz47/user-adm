from flask import Flask, jsonify, request, abort, send_from_directory, render_template, redirect, url_for
from flask_cors.decorator import cross_origin
from flask_cors import CORS, cross_origin
from werkzeug.utils import secure_filename
from data import data
import os

app = Flask(__name__)

app.config['UPLOAD_FOLDER'] = os.path.join(os.path.realpath('./'), 'images')

@app.route('/sendImage/<path:url>')
def sendImage(url):
    return url

@app.route('/getUsers')
@cross_origin()
def getUsers():
    return jsonify(data)


@app.route('/getUser/<int:user_id>')
@cross_origin()
def getUser(user_id):

    if user_id > len(data):
        return "User Not Foun!"
    else:
        return jsonify(data[user_id])


@app.route('/getUserImage/<int:user_id>')
@cross_origin()
def getUserImage(user_id):
    try:
        return send_from_directory(
            directory=app.config['UPLOAD_FOLDER'],
            path=data[user_id]['image'],
            as_attachment=False
        )    
    except FileNotFoundError:
        abort(404)


@app.route('/login', methods=["POST"])
@cross_origin()
def login():
    for user in data:
        if user['username'] == request.form['username']:
            if user['password'] == request.form['password']:
                logState = 'true'
                
                return redirect(url_for('logged', value="true"))
        else:
            continue

    return redirect(url_for('logged', value="username or password are incorrects"))


@app.route('/logged/<value>')
@cross_origin()
def logged(value):
    return jsonify({"logState": value})

        

# @app.route('/postUser', methods='POST')
# def postUser():
#     f = request.files['file']
#     f.save(secure_filename(request.form['id'] + '.jpg'))
#     return 'file saved succesfully'
    

if __name__ == '__main__':
    app.run(debug=True, port=5000)