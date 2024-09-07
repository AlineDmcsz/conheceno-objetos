const estudante = require('./estudante.json')
// convertendo os dados (objetos) numa string.

const stringEstudante = JSON.stringify(estudante);

//console.log(stringEstudante);
//console.log(typeof stringEstudante);



//convertendo de volta a objeto.
const objEstudante = JSON.parse(string.Estudante)
console.log(stringEstudante);
console.log(typeof stringEstudante);