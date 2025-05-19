from flask import render_template, redirect, url_for
from flask import Blueprint

auth_bp = Blueprint("auth", __name__, url_prefix="/auth")

@auth_bp.get('/login')
def login():
    return render_template("auth/login.html")

@auth_bp.post('/login')
def login_post():
    return redirect(url_for("user.validate"), code=307)

@auth_bp.get("/logout")
def logout():
    return "logout success"

@auth_bp.get('/register')
def register():
    return render_template("auth/register.html")

@auth_bp.post('/register')
def register_post():
    return redirect(url_for('user.store'), code=307)