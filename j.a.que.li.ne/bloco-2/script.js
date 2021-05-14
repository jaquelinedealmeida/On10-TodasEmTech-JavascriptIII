//----- Array

// 1. Crie uma array com 5 frutas diferentes;

let frutas = ['Umbu, Seriguela, Tamaraindo, Graviola, Mangaba']; // ; é opcional

//let frutas = ["Umbu", "Seriguela", "Tamaraindo", "Graviola", "Mangaba"];

console.log(frutas.leght);

//2. Crie uma array com 100 espaços vazios.

const arrayCem = new Array(100)

//let posicoes = [];
//posicoes.length = 100;


//3. Printe o ultimo elemento da array de frutas, baseando-se no seu length


//frutas[5-1]
//frutas[4]

console.log(frutas[frutas.length - 1]); 


//----- For

//4. Printar na tela em cada linha o nome de uma fruta da array anterior;
for(let i=0; i < frutas.leght; i++) {
  console.log(frutas[i])
}
//outout

exemplo
for(i of frutas) {
  console.log(i);
}

//5. Inserir números crescentes a partir do 1 na array de 100 slots (a array vai ter 100 items, com o primeiro sendo 1 e o último sendo 100).

for(let i=0; i <arrayCem.lenght; i++) {
  arrayCem[i] = i + 1
}

i=0
0 < 100


//----- ForEach

//6. criar uma array, cujos itens sejam o dobro dos items da array de 100 itens.

arrayCem.forEach((item) => {
  console.log(item * 2);

})

//7. Dada a seguinte array, printe o tamanho de cada string a cada iteração

const elementosQuimicos

//---- Map

//8. Dada uma array de nomes, criar uma nova array que adiciona o pronome de tratamento "sra." antes de cada nome;

//9. Dado uma array de preços de livros, retorne uma array com os preços com desconto de 20%.


//---- Filter

sintaxe  
const numeros = [ 1,2,3,4,5]

let filtrado = numeros.filter((item) => {
  return item > 2
})
console.log(filtrado)// [3,4,5]

//sempre precisa de um retorno pq tem um callback//
//outra possibilidade
//numeros.filter(function(item)) *** funcao anonima

//10. Dada a array de livros *com desconto*, crie uma nova array contendo todos os preços que estão abaixo de 30;

const precosLivros = [8,10,30,40];

let resultado = precosLivros.filter((preco) => {
  if(preco < 30) {
  return preco 
  })

//pode chamar o array no singular 

//() {
  //escopo - a sua casa 
//}=== function => ter uma ação 
//[] ==== Array => elementos que são acessados por index
//{} == objeto

//const =
//let =
//var = 

//{[]} = array de objeto ou objeto com array

//---- Reduce

//11. Como essa promoção de livros está muito boa e você tem dinheiro para comprar os livros que quer, some os preços com desconto dessa array
const precoDosLivros = [8,10];
const somaPrecos = precoDosLivros.reduce(function(acc, ValorInicial) {
  return acc + ValorInicial }, 0)

  /////com for///

  let soma = 0;
  for(let i=0; i < precoDosLivros.lenght); i +++; {
    soma = soma + precoDosLivros[i]
  }
console.log(soma)
  i = 0
  soma = 8 

  segunda iteracao
  i=1
  soma = 8


//acc- acumulador 
//valor zero é indicador que a soma vai começar pelo primeiro item

//---- Objetos

//12. Crie um objeto chamado animal com as seguintes propriedades: porte, especie e raca; coloque os valores que quiser


//13. Crie um objeto curso que receba as propriedades: nome, período, professora. Atribua valores as propriedades criadas e separadamente mostre as propriedades no console.log


//--- tudo junto e misturado!!

//. Dada a seguinte array de objetos:

const data = [
  {
    nome: "Scooby Doo",
    idade: 7,
    tipo: "cachorro",
  },
  {
    nome: "Sofia",
    idade: 1,
    tipo: "gato",
  },
  {
    nome: "Bidu",
    idade: 6,
    tipo: "cachorro",
  },
  {
    nome: "Mimi",
    idade: 3,
    tipo: "gato",
  },
  {
    nome: "Alfredo",
    idade: 10,
    tipo: "gato",
  },

];

// printar no console apenas os cachorros

let cachorros = data.filter((animal) => {
return anima.tipo

}
)

// printe no console apenas os gatos

// some a idade de todos os gatos juntos


//DOMMMM
//const numeros = [2,3,4,5,10]
//numeros,map((numero) => {
  //retur numero * 2

//})

é preciso guardar as informações que taão no HTML
