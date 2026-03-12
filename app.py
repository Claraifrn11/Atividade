from flask import Flask, jsonify
app = Flask(__name__)

@app.route('/', methods=['GET'])
def hello_world():
    #retornamos um JSON, que é o padrão para API's
    return jsonify({
    "mensagem": "Hello World!",
    "status" : "sucesso" 
    })

if __name__ == '__main__':
    app.run()