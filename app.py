from flask import Flask, render_template
app = Flask(__name__)

@app.route("/")
def home():
    persImg =[ 
        { 'personagem':'Orochimaru  Sannin',
          'imagem':'/static/img/oro.png',
        },
        { 'personagem':'Jiraya Sannin',
          'imagem':'/static/img/ji.png',
          }, 
          { 'personagem':'Tsunade  Sannin',
           'imagem':'\static\img\Tsu.png',
        },
          { 'personagem':'Uzumaki Naruto',
          'imagem':'/static/img/Naruto_Base-0.png',
          },
          { 'personagem':'Uchiha Sasuke',
          'imagem':'/static/img/sas.png',
          },
          { 'personagem':'Haruno Sakura',
          'imagem':'/static/img/sakuraHaruno.png',
          },
          ]
    bijuuImagem = [
          { 'bijuu':'Shukaku',
          'imagem':'/static/img/Shukaku.png',
          },
          { 'bijuu':'Kokuou',
          'imagem':'/static/img/Kokuou.png',
          },
          { 'bijuu':'Son Goku',
          'imagem':'/static/img/son.png'},
          { 'bijuu':'Matatabi',
          'imagem':'/static/img/Matatabi.png',
          },
          { 'bijuu':'Kurama',
          'imagem':'/static/img/kurama.png',
           },
          { 'bijuu':'Gyuki',
           'imagem':'/static/img/Gyuki.png',
          },
          ]
    imgBotao = '\static\img\gif.botao.gif'      
      
    return render_template(
        "index.html",
        persImg = persImg,
        bijuuImg = bijuuImagem,
        botaoImg = imgBotao     
    )

if __name__ == "__main__":
    app.run(debug=True)