const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['551199999998', '551199999993'],
  }

  //Aqui adicionamos a informação endereço ao objeto estudante
estudante.endereço = {
    rua: 'Rua Principal',
    numero: '45',
    complemento: 'apto 40'
}

console.log(estudante); //mostra todos os dados
console.log(estudante.endereço); //mostra somente o endereço.
console.log(estudante.endereço.rua); //mostra somente a rua do endereço