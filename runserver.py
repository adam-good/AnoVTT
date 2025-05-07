from app import app
from flask import render_template

@app.route('/')
def index():
    render_template('index.html')

if __name__ == '__main__':
    app.run()