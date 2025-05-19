from flask import Blueprint
from webapp.controllers.statblock_controller import index, store, search, show, update, destroy

statblock_bp = Blueprint('statblock', __name__, url_prefix='/statblock')

statblock_bp.route('/', methods=['GET'])(index)
statblock_bp.route('/create', methods=['GET', 'POST'])(store)
statblock_bp.route('/search', methods=['GET', 'POST'])(search)
statblock_bp.route('/<int:statblock_id>', methods=['GET'])(show)
statblock_bp.route('/update/<int:statblock_id>', methods=['GET','POST'])(update)
statblock_bp.route('/remove/<int:statblock_id>', methods=['DELETE'])(destroy)