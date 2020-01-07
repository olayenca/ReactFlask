#serve build folder

from flask import render_template, Blueprint
from flask_cors import CORS

build_blueprint = Blueprint("dist", __name__, static_folder='./dist/', template_folder="./dist") 
cors = CORS(build_blueprint)

@build_blueprint.route('/', methods=['GET', 'POST'])
def build():
    return render_template("build.html")
