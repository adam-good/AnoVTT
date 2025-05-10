
from webapp.models.user import User
from webapp.database import session as db_session
from flask import request

def index():
    result = User.query.all()
    return ''.join([f"{user}" for user in result])

def store():
    form_data = request.form
    name = form_data['name']
    user = User(name)
    db_session.add(user)
    db_session.commit()
    return "success"

def show(user_id: int):
    user: User = User.query.filter(User.id == user_id).first()
    return f"{user}"

def update(user_id: int):
    form_data = request.form
    name = form_data['name']
    User.query.filter(User.id == user_id).update({
        "username": name
    })
    db_session.commit()
    return f"success"

def destroy(user_id: int):
    User.query.filter(User.id == user_id).delete()
    db_session.commit()
    return f"success"