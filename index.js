const icon = document.querySelector('.icon-top')
const header = document.querySelector('#header')
const navLinks = document.querySelector('#menu .menu-links')
const navLinksLi = document.querySelectorAll('.menu-links li')

const onMouseEnter = () => {
  icon.classList.toggle('morpharrow')

  navLinks.classList.add('onMenuHover')

  // Animate links
  navLinksLi.forEach((li, i) => {
    if (li.style.animation) {
      li.style.animation = ''
    } else {
      li.style.animation = `navLinkFade 0.2s ease-in forwards ${i / 7}s`
    }
  })
}

const onMouseLeave = () => {
  icon.classList.toggle('morpharrow')

  navLinks.classList.remove('onMenuHover')

  // Animate links
  navLinksLi.forEach((li, i) => {
    if (li.style.animation) {
      li.style.animation = ''
    } else {
      li.style.animation = `navLinkFadeOut 0.5s ease-out forwards ${
        i / 7 + 0.2
      }s`
    }
  })
}

const onMenuClick = () => {
  const menu = document.querySelector('#menu')
  menu.classList.toggle('onMenuClick')
}

const handleResize = (e) => {
  if (e[0].contentRect.width < 1200) {
    header.removeEventListener('mouseenter', onMouseEnter)
    header.removeEventListener('mouseleave', onMouseLeave)

    icon.addEventListener('click', onMenuClick)
  } else {
    // remove menu click listener
    icon.removeEventListener('click', onMenuClick)

    header.addEventListener('mouseenter', onMouseEnter)
    header.addEventListener('mouseleave', onMouseLeave)
  }
}

const resizer = new ResizeObserver(handleResize)
resizer.observe(document.querySelector('body'))

// icon.addEventListener('click', () => {
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
