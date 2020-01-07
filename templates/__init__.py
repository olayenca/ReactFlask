from flask import Flask
from .src.views import src_blueprint
from .build.views import build_blueprint
from flask_webpack import Webpack

webpack = Webpack()


app = Flask(__name__)

params = {
    'DEBUG': True,
    'WEBPACK_MANIFEST_PATH': './main/static/manifest.json',
    "WEBPACK_ASSETS_URL": "webpack.common.js"
}

app.config.update(params)
webpack.init_app(app)

# register the blueprints
app.register_blueprint(src_blueprint, url_prefix="/src")
app.register_blueprint(build_blueprint, url_prefix="/build")
