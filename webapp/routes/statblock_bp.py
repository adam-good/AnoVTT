from flask import Blueprint
from webapp.controllers.statblock_controller import index, store

statblock_bp = Blueprint('statblock', __name__, url_prefix='/statblock')

statblock_bp.route('/', methods=['GET'])(index)
statblock_bp.route('/create', methods=['GET', 'POST'])(store)