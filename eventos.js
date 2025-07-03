//Eventos

const linkExterno = document.querySelector("a[href^='https']")

function handleLink(Event) {
  Event.preventDefault();
  console.log(Event)
}

linkExterno.addEventListener('click', handleLink)

const h1 = document.querySelector('h1')

function handleEvent(event) {
  console.log(event, event.type)
}

h1.addEventListener('click', handleEvent);
h1.addEventListener('mousemove', handleEvent);

window.addEventListener('scroll', handleEvent)
 window.addEventListener('resize', handleEvent)
 window.addEventListener('keydown', handleEvent)

function handleKeyboard(event){
  if(event.key === 'z'){
    document.body.classList.toggle('z')
  }

}

window.addEventListener('keydown', handleKeyboard)

const imgs = document.querySelectorAll("img");

function handleImg(event) {
  console.log(event.currentTarget.getAttribute('src'))
}

imgs.forEach((img) => {
  img.addEventListener('click', handleImg)
});

// Adicionar class ativo aos links internos do site = IMPORTANTE
const linksInternos = document.querySelectorAll('a[href^="#"]')

function handleAtivo(event) {
 event.preventDefault();
 linksInternos.forEach((link) => {
   link.classList.remove('ativo')
 })
 event.currentTarget.classList.add('ativo')
}

linksInternos.forEach((link) => {  
link.addEventListener('click', handleAtivo)
})
  

const todosElementos = document.querySelectorAll('body *')

function handleElemento(event) {
  event.currentTarget.remove()
}

todosElementos.forEach((elemento) => {
  elemento.addEventListener('click', handleElemento)
})


function handleKeyboard(event){
  if(event.key === 't'){
    document.body.classList.toggle('t')
  }

}
window.addEventListener('keydown', handleKeyboard)