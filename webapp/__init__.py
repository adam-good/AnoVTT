__version__ = '0.1'
import os
from flask import Flask, render_template
from typing import Mapping, Any

def create_app(test_config: Mapping[str,Any]|None = None) -> Flask:
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
    def shutdown_db_session(exception: BaseException|None = None): # type: ignore[unused-function]
        db.session.remove()

    # Initialize Routing
    from webapp.controllers.user_controller import user_bp
    from webapp.controllers.auth_controller import auth_bp
    from webapp.controllers.statblock_controller import statblock_bp
    app.register_blueprint(user_bp)
    app.register_blueprint(auth_bp)
    app.register_blueprint(statblock_bp)

    @app.route('/')
    def index(): # type: ignore[unused-function]
        return render_template('index.html')

    return app
