const listaAnimais = document.querySelector('.animais-lista')

const Height = listaAnimais.scrollHeight
const toppAnimais = listaAnimais.offsetTop

console.log(Height,toppAnimais)

const primeroH2 = document.querySelector('h2')

const rect = primeroH2.getBoundingClientRect()

console.log(rect)

const small = window.matchMedia('(max-width: 600px)').matches

if(small) {
  console.log('janela pequena')
}else{
  console.log('janela grande')
}

const toppImg = document.querySelector('img')

console.log(toppImg.offsetTop)

const somaLargura = document.querySelectorAll('img')

somaLargura.forEach((item) => {
  const larguraTotal = item.offsetWidth * item.offsetWidth
  console.log(larguraTotal)
})

const linksLg = document.querySelector(".menu a");
const width = linksLg.offsetWidth;
const height = linksLg.offsetHeight;
console.log(`Largura: ${width}px, Altura: ${height}px`);

const menuMobile = window.matchMedia('(max-width: 720px)').matches

if(menuMobile){
  const menuAtivo = document.querySelector('.menu')
  menuAtivo.classList.add('menu-mobile')
}else{
  console.log('desktop')
}
