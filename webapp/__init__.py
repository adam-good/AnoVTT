__version__ = '0.1'
from flask import Flask, render_template
from os import urandom

app = Flask(__name__)
app.config['SECRET_KEY'] = urandom(32)
app.debug = True

from webapp.routes.user_bp import user_bp
app.register_blueprint(user_bp, url_prefix='/users')

@app.route('/')
def index():
    return render_template('index.html')