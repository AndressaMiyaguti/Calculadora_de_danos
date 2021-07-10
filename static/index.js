const vidaPorPersonagem = {
    'Tsunade  Sannin': 14,
    'Orochimaru  Sannin': 14,
    'Jiraya Sannin': 15,
    'Uchiha Sasuke': 17,
    'Haruno Sakura':16,
    'Uzumaki Naruto':18,
};
const danoPorArma = {
    'Matatabi':4,
    'Kokuou':9,
    'Gyuki':8,
    'Son Goku':6,
    'Kurama':5,
    'Shukaku':6,
};

let personagemSelecionado;
let bijuuSelecionada;

function iniciar() {
    const elementos = document.getElementsByClassName('elemento');

    for (const elemento of elementos) {
        elemento.addEventListener('click', marcarElementoSelecionado);
    }

    document.getElementById('btnCalcular').addEventListener('click', calcularDano);
}
function marcarElementoSelecionado(evento) {
    const elementoSelecionado = evento.target.parentElement;

    if (!elementoSelecionado.classList.contains('elemento')) {
        return;
    }

    const idElementoSelecionado = elementoSelecionado.getAttribute('id');

    if (elementoSelecionado.classList.contains('personagem')) {
        personagemSelecionado = idElementoSelecionado;
        limparElementosSelecionados('personagem');
    } else {
        bijuuSelecionada = idElementoSelecionado;
        limparElementosSelecionados('arma');
    }

    elementoSelecionado.classList.add('selecionado');
}

function calcularDano() {
    if (!personagemSelecionado || !bijuuSelecionada) {
        alert('Selecione o personagem e a arma para calcular o dano');
        return;
    }

    const danoDados = rolarOsDados();
    const danoArma = danoPorArma[bijuuSelecionada];
    const danoTotal = danoDados + danoArma;
    const vidaPersonagem = vidaPorPersonagem[personagemSelecionado];

    let resultado = 'Dano: ' + danoTotal + '! ';

    if (danoTotal >= vidaPersonagem) {
        resultado += 'Parabéns, você matou ' + personagemSelecionado;
    } else {
        resultado += 'Não foi dessa vez, tente novamente!';
    }

    document.getElementById('dano').innerHTML = resultado;
}

function limparElementosSelecionados(tipo) {
    const elementos = document.getElementsByClassName('elemento');

    for (const elemento of elementos) {
        if (elemento.classList.contains(tipo)) {
            elemento.classList.remove('selecionado');
        }
    }
}

function rolarOsDados() {
    const min = Math.ceil(1);
    const max = Math.floor(10);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}
