from flask import Blueprint
from webapp.controllers.user_controller import index, store, validate, show, update, destroy

user_bp = Blueprint('user', __name__, url_prefix="/users")

user_bp.route('/', methods=['GET'])(index)
user_bp.route('/create', methods=['POST'])(store)
user_bp.route('/validate', methods=['POST'])(validate)
user_bp.route('/<int:user_id>', methods=['GET'])(show)
user_bp.route('/<int:user_id>/edit', methods=['POST'])(update)
user_bp.route('/<int:user_id>', methods=['DELETE'])(destroy)