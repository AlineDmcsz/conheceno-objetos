const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript'
  }

  // é possivel adicionar ddados dessa forma:
  estudante.telefone = '551199999999';
console.log(estudante.telefone);
console.log(estudante)

// é possivel alterar dessa forma:
estudante.nome = 'jose souza';
console.log(estudante); 

//tem que tomar cuidado para nao alterar ou criar (duplicar) os objetos.

//é possível criar um objeto vazio e depois ir atribuindo infos a ela:
const estudante2 = {};
estudante2.nome ='namaria'
console.log(estudante2);

