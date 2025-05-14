from webapp.models.statblock import Statblock
from webapp.database import session as db_session
from flask import request, render_template

def index():
    result = Statblock.query.all()
    return ''.join([f'{statblock}' for statblock in result])

def store():
    name = request.form['name']
    might = request.form['might']
    edge = request.form['edge']
    grit = request.form['grit']
    wits = request.form['wits']
    statblock = Statblock(name, might, edge, grit, wits)
    db_session.add(statblock)
    db_session.commit()
    return render_template('statblock/create')