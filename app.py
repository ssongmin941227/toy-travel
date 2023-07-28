import requests
from flask import Flask, render_template, request, jsonify
from bs4 import BeautifulSoup
from pymongo import MongoClient
client = MongoClient('mongodb+srv://test:sparta@cluster0.g6fmkt6.mongodb.net/Cluster0?retryWrites=true&w=majority')
db = client.dbsparta
app = Flask(__name__)


@app.route("/")
def home():
    return render_template('index.html')

@app.route("/bbs",methods=['POST'])
def bbs_post():
    print("run bbs_post")
    user_give = request.form['user_give']
    dest_give = request.form['dest_give']
    contents_give = request.form['contents_give']

    doc = {
        'user':user_give,
        'dest':dest_give,
        'contents':contents_give
    }

    db.bbs.insert_one(doc)
    return jsonify({'msg':'문의내용이 접수되었습니다.'})
    
@app.route("/bbs",methods=['GET'])
def bbs_get():
    bbs_list = list(db.bbs.find({},{'_id':False}))
    print(bbs_list)
    return jsonify({'bbs':bbs_list})

if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)


#     app.run('0.0.0.0',port=5000,debug=True)
# # 저장 - 예시
# doc = {'name':'bobby','age':21}
# db.users.insert_one(doc)

# # 한 개 찾기 - 예시
# user = db.users.find_one({'name':'bobby'})

# # 여러개 찾기 - 예시 ( _id 값은 제외하고 출력)
# all_users = list(db.users.find({},{'_id':False}))

# # 바꾸기 - 예시
# db.users.update_one({'name':'bobby'},{'$set':{'age':19}})

# # 지우기 - 예시
# db.users.delete_one({'name':'bobby'})
