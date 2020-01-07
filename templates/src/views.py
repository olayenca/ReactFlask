import os
from flask import render_template, Blueprint, send_from_directory
from flask_cors import CORS
from react.render import render_component

src_blueprint = Blueprint(
    "main", __name__, static_folder="./main/static/", template_folder="./main/public")
cors = CORS(src_blueprint)


@src_blueprint.route('/', methods=['GET', 'POST'])
def index():
    rendered = render_component(os.path.join(
        os.getcwd(), "templates", "src", "main", "public", 'index.tsx'), {'foo': 'bar'})
    return render_template("child.html", rendered=rendered)
