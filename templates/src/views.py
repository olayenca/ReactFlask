import os
from flask import render_template, Blueprint, send_from_directory, request
from flask_cors import CORS
import subprocess

src_blueprint = Blueprint(
    "main", __name__, static_folder="./main/static/", template_folder="./main/public")



@src_blueprint.route('/', methods=['GET', 'POST'])
def index():
    CORS(src_blueprint)
    command_line_args = ['node', './src/main/public/server.js', request.path]
    process = subprocess.Popen(command_line_args)
    print(process)
    context = "some text" #process.communicate()[0].decode('utf-8').strip()
    print(context)
    return render_template("contents.html", react_context=context)
