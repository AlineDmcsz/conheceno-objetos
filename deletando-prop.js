const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
    aliado: {
      nome: "Saruman",
      classe: "mago"
    },
    status: "desaparecido"
   }
   //Se quisermos, por exemplo, remover a propriedade aliado, podemos utilizar o operador delete:
   delete objPersonagem.aliado 
console.log(objPersonagem.aliado) //undefined

//Também é possível utilizar a notação de colchetes:
delete objPersonagem.aliado
delete objPersonagem["status"]
 
console.log(objPersonagem.aliado) //undefined
console.log(objPersonagem.status) //undefined.

//Importante! Note que o delete remove do objeto o valor da propriedade, assim como a chave.

//Após remover as duas propriedades acima, o objeto agora está desta forma:
//{
 //nome: "Gandalf",
 //classe: "mago",
 //nivel: "20",
//}

//O valor de retorno do operador delete é um booleano, ou seja, retorna sempre true ou false para cada operação. Porém, é importante notar que ele não retorna false se tentarmos remover, por exemplo, uma propriedade que não existe no objeto:
const delProp = delete objPersonagem.aliado
const delPropInexistente = delete objPersonagem["endereco"]
 
console.log(delProp) //true
console.log(delPropInexistente) //true