// -------------------Burger Menu--------------------------

const burger_menu = document.querySelector('.burger-menu')
const header_nav = document.querySelector('.header_nav')
const header_logo = document.querySelector('.header-logo')
const links = document.querySelectorAll('.nav_item')
const nav_list = document.querySelector('.nav .header_nav-list')
const overlay = document.querySelector('.overlay')

function closeMenu() {
  header_nav.classList.remove('open')
  header_logo.classList.remove('active')
  nav_list.classList.remove('active')
  overlay.classList.remove('active')
  document.body.classList.remove('stop-scrolling')
}

burger_menu.addEventListener('click', () => {
  if (!header_nav.classList.contains('open')) {
    header_nav.classList.add('open')
    header_logo.classList.add('active')
    nav_list.classList.add('active')
    overlay.classList.add('active')
    document.body.classList.add('stop-scrolling')
  } else {
    closeMenu()
  }
})

links.forEach(link => link.addEventListener(('click'), () => closeMenu()))

overlay.addEventListener('click', () => {
  closeMenu()
})

// -----------------------Carousel-------------------------------

const cards = [...document.querySelectorAll('.cards-wrapper')]
console.log(cards);
const btn_prev = document.querySelector('.btn-prev')
const btn_next = document.querySelector('.btn-next')


let currentIndex = 0

const activeSlide = n => {
  for (const card of cards) {
    card.classList.remove('active')
  }
  cards[n].classList.add('active')
}


const prevSlide = () => {
  if (currentIndex  === 0) {
    currentIndex  = cards.length - 1
  } else {
    currentIndex--
  }
    changeSlide(currentIndex)

}

const nextSlide = () => {
  if (currentIndex === cards.length - 1) {
    currentIndex = 0    
  } else {
    currentIndex++
  }
  changeSlide(currentIndex)
}

function changeSlide(index) {
  console.log('index', index);
  cards.forEach(card => card.classList.remove('active'))
  cards[index].classList.add('active')
}


btn_prev.addEventListener('click', prevSlide)
btn_next.addEventListener('click', nextSlide)