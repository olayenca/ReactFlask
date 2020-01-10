#!/usr/bin/python
import os
from flask import render_template, Blueprint, send_from_directory, request
from flask_cors import CORS
import subprocess
from react.render import render_component

src_blueprint = Blueprint(
    "main", __name__, static_folder="./main/static/", template_folder="./main/public")

@src_blueprint.route('/', methods=['GET', 'POST'])

def index():
    CORS(src_blueprint)
    command_line_args = ['node', './render_index.js']
    process = subprocess.Popen(command_line_args, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    context = process.communicate()[0].decode('utf-8').strip()
    return render_template("contents.html", react_context=context)
