__version__ = '0.1'
from flask import Flask, render_template
from webapp.database import session as db_session
from webapp.database import init_db
from os import urandom

app = Flask(__name__)
app.config['SECRET_KEY'] = urandom(32)
app.debug = True

# Database Setup
init_db()
@app.teardown_appcontext
def shutdown_dbsession(exception=None):
    db_session.remove()

# Initialize Routing
from webapp.routes.user_bp import user_bp
app.register_blueprint(user_bp)

@app.route('/')
def index():
    return render_template('auth/index.html')

@app.route('/new_user')
def new_user():
    return render_template('auth/register.html')