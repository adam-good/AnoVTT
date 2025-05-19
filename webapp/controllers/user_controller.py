
from webapp.models.user import User
from webapp.database import session as db_session
from flask import request, render_template
from flask import Blueprint

user_bp = Blueprint('user', __name__, url_prefix="/user")

@user_bp.get("/")
def index():
    result = User.query.all()
    return ''.join([f"{user}" for user in result])

@user_bp.post('/create')
def store():
    username = request.form['username']
    password = request.form['password']
    user = User(username, password)
    db_session.add(user)
    db_session.commit()
    return render_template('auth/register.html')

@user_bp.post('/validate')
def validate():
    username = request.form['username']
    password = request.form['password']
    user: User = User.query.filter(User.username == username).first()
    if user.validate(password):
        return "Success"
    else:
        return "Fail"

@user_bp.get('/<int:user_id>')
def show(user_id: int):
    user: User = User.query.filter(User.id == user_id).first()
    return f"{user}"

@user_bp.post('/<int:user_id>/edit')
def update(user_id: int):
    form_data = request.form
    name = form_data['name']
    User.query.filter(User.id == user_id).update({
        "username": name
    })
    db_session.commit()
    return f"success"

@user_bp.delete('/<int:user_id>')
def destroy(user_id: int):
    User.query.filter(User.id == user_id).delete()
    db_session.commit()
    return f"success"