__version__ = '0.1'
from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy
from os import urandom

app = Flask(__name__)
app.config['SECRET_KEY'] = urandom(32)
app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///project.db"
app.debug = True

db = SQLAlchemy()
db.init_app(app)

from webapp.models import *
with app.app_context():
    db.create_all()

from webapp.routes.user_bp import user_bp
app.register_blueprint(user_bp, url_prefix='/users')

@app.route('/')
def index():
    return render_template('index.html')