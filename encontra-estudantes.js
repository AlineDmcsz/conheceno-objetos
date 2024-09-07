const estudantes = require('./estudantes.json');

function buscaInformacao(lista, chave, valor) {
    return lista.find((estudante) => estudante[chave].includes(valor));
}

const estudanteEncontrado = buscaInformacao(estudantes, 'nome', 'Greer');
console.log(estudanteEncontrado);

const telefoneEstudante = buscaInformacao(estudantes, 'telefone', '4733865848');
console.log(telefoneEstudante);