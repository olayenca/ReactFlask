#!/usr/bin/python
import os
from flask import render_template, Blueprint, request
import subprocess

src_blueprint = Blueprint(
    "src", __name__, static_folder="../static/", template_folder="../public")

@src_blueprint.route('/', methods=['GET', 'POST'],defaults={'path': ''})
@src_blueprint.route('/<path>', methods=['GET', 'POST'])

def index(path):
    command_line_args = ['node', os.path.join(os.getcwd(), "templates", "register_server.js"), request.path]
    process = subprocess.Popen(command_line_args, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    context = process.communicate()[0].decode('utf-8').strip()
    return render_template("contents.html", react_context=context)