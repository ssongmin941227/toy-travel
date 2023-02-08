from flask import Flask
from pymongo import MongoClient
import certifi


app = Flask(__name__)

client = MongoClient("mongodb+srv://min:1234@cluster0.dbt5g7d.mongodb.net/?retryWrites=true&w=majority", tlsCAFile=ca)
db = client.test

@app.route('/')
def home():
    print(client.list_database_names())
    return 'This is home!'

if __name__ == '__main__':
    app.run('0.0.0.0', port=4000, debug=True)