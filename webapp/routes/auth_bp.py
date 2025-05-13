from flask import Blueprint
from webapp.controllers.auth_controller import login, logout, register
from webapp.controllers.user_controller import store

auth_bp = Blueprint("auth", __name__, url_prefix="/auth")

auth_bp.route("/login", methods=['GET','POST'])(login)
auth_bp.route("/logout", methods=['GET'])(logout)
auth_bp.route("/register", methods=['GET','POST'])(register)
# auth_bp.route("/register", methods=['POST'])(store)