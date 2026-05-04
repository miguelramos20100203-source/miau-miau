 const prompt = require('prompt-sync')


let pessoa = {
   nome : "MIGUEL",
   idade : 16 ,
   profissão : "desempregado",
  saudacao : function () {
    console.log("olá, meu nome é " + this.nome  + "e tenho " + this.idade + " dde idade e sou um " + this.profissão )
}


}
pessoa.saudacao()

console.log(pessoa instanceof Object);
console.log(pessoa instanceof Array);

class Pessoa {
    constructor(nome, idade, altura, sexo){
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this.sexo = sexo;


    }
}

const pessoa6= new Pessoa("miguel", 16, 1.80, "masculino")

console.log(pessoa6.nome)
console.log(pessoa6.idade)
console.log(pessoa6.altura)
console.log(pessoa6.sexo)

let nome  = prompt("digite um nome ");
let idade = parseInt(prompt("digite sua idade"));
let altura = parseFloat(prompt("digite sua altura"))
let sexo = prompt("digite seu sexo");

const pessoa12 = new Pessoa(nome, idade, altura, sexo)

console.log(pessoa12);

