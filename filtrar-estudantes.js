const estudantes = require('./estudantes.json');

function filtraPropriedade(lista, propriedade){
    return lista.filter((estudante) =>{
        return !estudante.endereco.hasOwnProperty(propriedade);
    })
}

const listaEnderecosIncompletos = filtraPropriedade(estudantes, 'cep');

console.log(listaEnderecosIncompletos);