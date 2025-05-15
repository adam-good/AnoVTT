from webapp.models.statblock import Statblock
from webapp.database import session as db_session
from flask import request, render_template

def index():
    result = Statblock.query.all()
    return ''.join([f'{statblock}' for statblock in result])

def store():
    if request.method == "GET":
        return render_template("statblock/create.html")
    elif request.method == "POST":
        name = request.form['name']
        might = int(request.form['might'])
        edge = int(request.form['edge'])
        grit = int(request.form['grit'])
        wits = int(request.form['wits'])
        statblock = Statblock(name, might, edge, grit, wits)
        db_session.add(statblock)
        db_session.commit()
        return render_template("statblock/create.html")
    else:
        return "fuck"
    
def show(id: int):
    statblock: Statblock = Statblock.query.filter(Statblock.id == id).first()
    return f"{statblock}"

def update(id: int):
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

    Statblock.query.filter(Statblock.id == id).update({
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
    return f"success"

def destroy(id: int):
    Statblock.query.filter(Statblock.id == id).delete()
    db_session.commit()
    return f"success"