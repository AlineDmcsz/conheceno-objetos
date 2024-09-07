const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['551199999998', '551199999993'],
    enderecos: [{
      rua: 'Rua Joseph Climber',
      numero: '45',
      complemento: 'apto 43'
    },
    {
        rua: 'Rua Dona Clotilde',
        numero: '71',
        complemento: null
    }]
  }
//chave guarda a chave mas não o valor.
  for (let chave in estudante) {
//              o typeof de array é object, nao existe typeof array
    const tipo = typeof estudante[chave]; //a cada iteração ela vai analisar qual o tipo de dado.
//  se    (!== : diferente)   (&& : e)
    if ( tipo !== 'object' && tipo !== 'function'){
    const texto = `a chave ${chave} tem o valor ${estudante[chave]}`
   console.log(texto);
  }
}
 

