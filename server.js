from flask import Flask, send_file
from threading import Thread

app = Flask(__name__)

@app.route('/')
def home():
    return send_file('Website/index.html')

def run():
    app.run(host='0.0.0.0', port=8080)

def keep_alive():
    t = Thread(target=run)
    t.start()
