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