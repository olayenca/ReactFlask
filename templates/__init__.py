from flask import Flask
from .src.views import src_blueprint
 
app = Flask(__name__)

# register the blueprints
app.register_blueprint(src_blueprint, url_prefix="/src")
