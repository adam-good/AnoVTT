__version__ = '0.1'
import os
from flask import Flask, render_template

def create_app(test_config=None):
    app = Flask(__name__, instance_relative_config=True)
    app.config['SECRET_KEY'] = 'dev'
    app.config['DATABASE'] = os.path.join(app.instance_path, 'webapp.db')
    app.debug = True

    if test_config is None:
        app.config.from_pyfile('config.py', silent=True)
    else:
        app.config.from_mapping(test_config)

    # Database Setup
    import webapp.database as db
    db.init_db()
    @app.teardown_appcontext
    def shutdown_db_session(exception=None):
        db.session.remove()

    # Initialize Routing
    from webapp.routes.user_bp import user_bp
    from webapp.routes.auth_bp import auth_bp
    from webapp.routes.statblock_bp import statblock_bp
    app.register_blueprint(user_bp)
    app.register_blueprint(auth_bp)
    app.register_blueprint(statblock_bp)

    @app.route('/')
    def index():
        return render_template('index.html')

    return app
