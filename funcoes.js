const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['551199999998', '551199999993'],
    media: 7.5,
    //a palavra-chave this dá contexto, prende uma referência ao objeto onde queremos que essa função seja executada.
    estaAprovado: function(mediaBase) {
        return this.media >= mediaBase ? true : false
    }
  }


console.log(estudante.estaAprovado(7));

