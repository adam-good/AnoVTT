from flask import Blueprint
from webapp.controllers.statblock_controller import index

statblock_bp = Blueprint('statblock', __name__, url_prefix='/statblock')

statblock_bp.route('/', methods=['GET'])(index)