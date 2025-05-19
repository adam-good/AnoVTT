from webapp.models.statblock import Statblock
from webapp.database import session as db_session
from flask import request, render_template, g
from flask import Blueprint

statblock_bp = Blueprint('statblock', __name__, url_prefix='/statblock')

@statblock_bp.get('/')
def index():
    result = Statblock.query.all()
    return ''.join([f'{statblock}' for statblock in result])

@statblock_bp.get('/search')
def search():
    return render_template("statblock/search.html")

@statblock_bp.post('/search')
def search_post():
    form_data = request.form
    name: str = form_data['name']
    statblock: Statblock = Statblock.query.filter(Statblock.name == name).first()
    g.statblock = statblock
    return render_template("statblock/show.html")

@statblock_bp.get('/create')
def store():
    return render_template("statblock/create.html")

@statblock_bp.post('/create')
def store_post():
    form_data = request.form
    name:   str = form_data['name']
    might:  int = int(form_data['might'])
    edge:   int = int(form_data['edge'])
    grit:   int = int(form_data['grit'])
    wits:   int = int(form_data['wits'])
    physical_defence:   int = int(form_data['physical_defence'])
    sorcery_defence:    int = int(form_data['sorcery_defence'])
    life_points:        int = int(form_data['life_points'])
    stamina_points:     int = int(form_data['stamina_points'])
    flex_die:           str = form_data['flex_die']
    statblock = Statblock(name, might, edge, grit, wits, physical_defence, 
                            sorcery_defence, life_points, stamina_points,
                            flex_die)
    db_session.add(statblock)
    db_session.commit()

    g.statblock = statblock
    return render_template("statblock/show.html")
    
@statblock_bp.get('/<int:statblock_id>')
def show(statblock_id: int):
    statblock: Statblock = Statblock.query.filter(Statblock.id == statblock_id).first()
    g.statblock = statblock
    return render_template('statblock/show.html')

@statblock_bp.get('/<int:statblock_id>/edit')
def update(statblock_id: int):
    statblock: Statblock = Statblock.query.filter(Statblock.id == statblock_id).first()
    g.statblock = statblock
    return render_template("statblock/update.html")

@statblock_bp.post('/<int:statblock_id>/edit')
def update_post(statblock_id: int):
    form_data = request.form
    name:   str = form_data['name']
    might:  int = int(form_data['might'])
    edge:   int = int(form_data['edge'])
    grit:   int = int(form_data['grit'])
    wits:   int = int(form_data['wits'])
    physical_defence:   int = int(form_data['physical_defence'])
    sorcery_defence:    int = int(form_data['sorcery_defence'])
    life_points:        int = int(form_data['life_points'])
    stamina_points:     int = int(form_data['stamina_points'])
    flex_die:           str = form_data['flex_die']

    query = Statblock.query.filter(Statblock.id == statblock_id)
    query.update({
        'name': name,
        'might': might,
        'edge': edge,
        'grit': grit,
        'wits': wits,
        'physical_defence': physical_defence,
        'sorcery_defence': sorcery_defence,
        'life_points': life_points,
        'stamina_points': stamina_points,
        'flex_die': flex_die
    })
    db_session.commit()
    statblock: Statblock = query.first()
    g.statblock = statblock
    return render_template("statblock/show.html")

@statblock_bp.delete('/<int:statblock_id>/remove')
def destroy(statblock_id: int):
    query = Statblock.query.filter(Statblock.id == statblock_id)

    statblock: Statblock = query.first()
    g.statblock = statblock
    query.delete()
    db_session.commit()
    return render_template('/statblock/delete.html')