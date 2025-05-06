from flask import Flask, request, redirect, url_for

app = Flask(__name__)

@app.route("/")
def index():
    with open("index.html") as index_file:
        content = index_file.read()
    return content

@app.route("/success/<name>")
def success(name: str):
    return f"<h1>Hello {name}</h1>"

@app.route("/login", methods=['POST', 'GET'])
def login():
    if request.method == "POST":
        user = request.form["username"]
        return redirect(url_for('success', name=user))
    else:
        user = request.form["username"]
        return redirect(url_for('success', name=user))
    
@app.route("/charactersheet/<name>")
def get_charsheet(name: str):
    return f"<h1>Character Name: {name}</h1>"

if __name__ == '__main__':
    app.run(debug=True)