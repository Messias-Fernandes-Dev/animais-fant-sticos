const menuAtivo = document.querySelectorAll('.menu a');

menuAtivo.forEach((item) =>{
  item.classList.add('ativo')
})

menuAtivo.forEach((item) =>{
  item.classList.remove('ativo')
})

menuAtivo[0].classList.add('ativo')

const imgs = document.querySelectorAll('img')

imgs.forEach((item) => {
  const possuiAtributo = item.hasAttribute('alt')
  console.log(possuiAtributo, item)
})

const link = document.querySelector('a[href^="#D"]')
link.setAttribute('href', 'https://google.com.br')

console.log(link)

