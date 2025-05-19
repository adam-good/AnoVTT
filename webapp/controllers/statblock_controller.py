from webapp.models.statblock import Statblock
from webapp.database import session as db_session
from flask import request, render_template, redirect, url_for, g

def index():
    result = Statblock.query.all()
    return ''.join([f'{statblock}' for statblock in result])

def search():
    if request.method == "GET":
        return render_template("statblock/search.html")
    elif request.method == "POST":
        form_data = request.form
        name: str = form_data['name']
        # TODO: Fix this later
        id: int = Statblock.query.filter(Statblock.name == name).first().id
        return redirect(url_for("statblock.show", statblock_id=id))
    else:
        return "you found a bug in statblock.search"

def store():
    if request.method == "GET":
        return render_template("statblock/create.html")
    elif request.method == "POST":
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
        return render_template("statblock/create.html")
    else:
        return "you found a bug in statblock.store"
    
def show(statblock_id: int):
    statblock: Statblock = Statblock.query.filter(Statblock.id == statblock_id).first()
    g.statblock = statblock
    return render_template('statblock/show.html')

def update(statblock_id: int):
    if request.method == "GET":
        statblock: Statblock = Statblock.query.filter(Statblock.id == statblock_id).first()
        g.statblock = statblock
        return render_template("statblock/update.html")
    elif request.method == "POST":
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

        Statblock.query.filter(Statblock.id == statblock_id).update({
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
        return redirect(url_for("statblock.show", statblock_id=statblock_id))
    else:
        return "you found a bug in statblock.update"

def destroy(statblock_id: int):
    query = Statblock.query.filter(Statblock.id == statblock_id)

    statblock: Statblock = query.first()
    g.statblock = statblock
    query.delete()
    # Statblock.query.filter(Statblock.id == statblock_id).delete()
    db_session.commit()
    return render_template('/statblock/delete.html')