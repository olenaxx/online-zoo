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