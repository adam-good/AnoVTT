from webapp.models.statblock import Statblock
from webapp.database import session as db_session
from flask import request, render_template, url_for

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