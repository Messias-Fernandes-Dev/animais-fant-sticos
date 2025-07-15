// const pais = 'Brasil';
// const cidade = new String('Rio')

// const listaAnimais = ['Gato', 'Cachorro', 'Cavalo', 'Piaba', 'Porco']

// const list = document.querySelectorAll('li')

// const listaArray1 = Array.prototype.slice.call(list)
// const arrayFrom = Array.from(list)

// list.forEach(item => {
//   item.classList.add('ativo')
// })

// const Carro = {
//   marca: 'Ford',
//   preco: 2000,
//   andar(){
//     return true
//   }
// }


//Crie uma função construtora de Pessoa, deve conter: nome, sobrenome, idade. Crie um metodo de prototipo que retorne o nome completo da pessoa

function Pessoa(nome, sobrenome, idade) {
  this.nome = nome
  this.sobrenome = sobrenome
  this.idade = idade
}

Pessoa.prototype.nomeCompleto = function() {
  return `${this.nome} ${this.sobrenome}`
}

const Messias = new Pessoa('Messias', 'Fernandes', 24);

//Liste os métodos acessados por dados criados com NodeList, HTMLCollection, Document
