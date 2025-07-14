// Transforme o objeto abaixo em uma constructor function

const pessoa = {
  nome: 'nome pessoa',
  idade: 0,
  andar() {
    console.log(this.nome + ' andou')
  }
}

function Pessoa(nome, idade){
  this.nome = nome
  this.idade = idade
  this.andar = function() {
    console.log(this.nome + ' Andou')
  }
}

// crie 3 Pessoas
  const joao = new Pessoa('joão', 20)
  const maria = new Pessoa('maria', 25)
  const bruno = new Pessoa('Bruno', 15)

// Crie uma constructor function de lista de elementos Dom. Deve contar as seguintes propriedades e métodos:

//elements, restorna NodeList com os elemwntos selecionados, add classlist, adiciohna a classe a todos os elementos // removeClass, remove a classe de todos os elementos

function Dom(seletor) {
  const elementList = document.querySelectorAll(seletor)
  this.elements = elementList
  this.addClass = function(classe) {
    elementList.forEach((item) => {
      item.classList.add(classe)
    })
  }
  this.removeClass =  function(classe) {
    elementList.forEach((item) => {
      item.classList.remove(classe)
    })
}
}

const listaItens = new Dom('li')

listaItens.addClass('ativar')

const ul = new Dom('ul')
