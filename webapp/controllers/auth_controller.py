from flask import request, render_template, redirect, url_for

def login():
    if request.method == "GET":
        return render_template("auth/login.html")
    elif request.method == "POST":
        return redirect(url_for("user.validate"), code=307)
    else:
        "fuck"

def logout():
    return "logout success"

def register():
    if request.method == "GET":
        return render_template("auth/register.html")
    elif request.method == "POST":
        return redirect(url_for("user.store"), code=307)
    else:
        return "fuck"