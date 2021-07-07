const icon = document.querySelector('.icon-top')
const header = document.querySelector('#header')
const navLinks = document.querySelector('#menu .menu-links')
const navLinksLi = document.querySelectorAll('.menu-links li')
const social = document.querySelector('#social')
const navMenu = document.querySelector('.nav-menu')

const tl = gsap.timeline()

// icon.toggleEventListener('click', () => {
//   navLinks.style.display = 'flex'
// })

// const handleResize = (e) => {
//   if (e[0].contentRect.width > 733) {
//     desktopAnimation()
//   } else {
//     mobileAnimation()
//   }
// }

// const desktopAnimation = () => {
//   header.addEventListener('mouseenter', (e) => {
//     icon.classList.toggle('morpharrow')
//     tl.fromTo(
//       '.menu-links li a span',
//       { x: -100, opacity: 0, duration: 0.6, ease: 'sine.inOut' },
//       { x: 35, opacity: 1, ease: 'sine.inOut', duration: 0.6 }
//     )
//   })

//   header.addEventListener('mouseleave', () => {
//     icon.classList.toggle('morpharrow')
//     tl.fromTo(
//       '.menu-links li a span',
//       { x: 35, opacity: 1, ease: 'sine.inOut', duration: 0.6 },
//       { x: -100, opacity: 0, duration: 0.6, ease: 'sine.inOut' }
//     )
//   })
// }

// const mobileAnimation = () => {
//   const menu = document.querySelector('.nav-menu')

//   icon.addEventListener('click', () => {
//     menu.classList.toggle('menuTransition')
//     icon.classList.toggle('morpharrow')
//   })
// }

// const resizer = new ResizeObserver(handleResize)
// resizer.observe(document.querySelector('body'))

// const menu = document.querySelector('.nav-menu')

// icon.addEventListener('click', () => {
//   menu.classList.toggle('menuTransition')
//   icon.classList.toggle('morpharrow')
// })

// On mobile screen
// if (window.matchMedia('(max-width: 733px)').matches) {
//   const menu = document.querySelector('.nav-menu')

//   icon.addEventListener('click', () => {
//     menu.classList.toggle('menuTransition')
//     icon.classList.toggle('morpharrow')
//   })
// }

// On desktop screen
// if (window.matchMedia('(min-width: 733px)').matches) {
//   const icon = document.querySelector('.icon-top')

//   header.addEventListener('mouseenter', () => {
//     icon.classList.toggle('morpharrow')
//     tl.fromTo(
//       '.menu-links li a span',
//       { x: -100, opacity: 0, duration: 0.6, ease: 'sine.inOut' },
//       { x: 35, opacity: 1, ease: 'sine.inOut', duration: 0.6 }
//     )
//   })

//   header.addEventListener('mouseleave', () => {
//     icon.classList.toggle('morpharrow')
//     tl.fromTo(
//       '.menu-links li a span',
//       { x: 35, opacity: 1, ease: 'sine.inOut', duration: 0.6 },
//       { x: -100, opacity: 0, duration: 0.6, ease: 'sine.inOut' }
//     )
//   })
// }

const desktopAnimation = () => {
  icon.removeEventListener('click', mobileAnimation)

  icon.addEventListener('mouseenter', onMouseEnter)
  navLinks.addEventListener('mouseleave', onMouseLeave)
}

// on mouse enter
const onMouseEnter = () => {
  navLinks.style.display = 'flex'
  icon.classList.add('morpharrow')
  tl.fromTo(
    '.menu-links li a span',
    { x: -100, opacity: 0, duration: 0.6, ease: 'sine.inOut' },
    { x: 35, opacity: 1, ease: 'sine.inOut', duration: 0.6 }
  )
}

const onMouseLeave = () => {
  navLinks.style.display = 'none'
  icon.classList.remove('morpharrow')
  tl.from('.menu-links li a span', {
    x: -100,
    opacity: 0,
    duration: 0.3,
    ease: 'sine.inOut',
  })
}

const mobileAnimation = () => {
  icon.removeEventListener('mouseenter', onMouseEnter)
  navLinks.removeEventListener('mouseleave', onMouseLeave)

  if (navMenu.classList.contains('navSlide')) {
    icon.classList.remove('morpharrow')
    navMenu.classList.remove('navSlide')
  } else {
    icon.classList.add('morpharrow')

    social.style.visibility = 'visible'
    navMenu.classList.add('navSlide')
  }

  const doc = document.querySelector('body')
  document.addEventListener('click', onDocumentClick)
}

const handleResize = (e) => {
  if (e[0].contentRect.width > 1100) {
    desktopAnimation()
  } else {
    social.style.visibility = 'hidden'
    navMenu.style.pointerEvents = 'auto'
    icon.addEventListener('click', mobileAnimation)
  }

  // if width is b/w 1116-1200
  if (e[0].contentRect.width > 1101 && e[0].contentRect.width < 1184) {
    navMenu.style.pointerEvents = 'auto'
    icon.addEventListener('click', mobileAnimation)
  }
}

// on Document Click
const onDocumentClick = (e) => {
  const divclass = e.target.classList
  if (
    divclass.contains('snap') ||
    divclass.contains('main') ||
    divclass.contains('left-panel') ||
    divclass.contains('right-panel') ||
    divclass.contains('left-vertical-slice') ||
    divclass.contains('right-vertical-slice')
  ) {
    icon.classList.remove('morpharrow')
    navMenu.classList.remove('navSlide')
  }
}

const resizer = new ResizeObserver(handleResize)
resizer.observe(document.querySelector('body'))
