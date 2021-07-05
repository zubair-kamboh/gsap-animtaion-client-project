const icon = document.querySelector('.icon-top')
const header = document.querySelector('#header')
const tl = new gsap.timeline()

// On mobile screen
if (window.matchMedia('(max-width: 733px)').matches) {
  const menu = document.querySelector('.nav-menu')

  icon.addEventListener('click', () => {
    menu.classList.toggle('menuTransition')
    icon.classList.toggle('morpharrow')
  })
}

// On desktop screen
if (window.matchMedia('(min-width: 733px)').matches) {
  header.addEventListener('mouseenter', () => {
    icon.classList.toggle('morpharrow')
    tl.fromTo(
      '.menu-links li a span',
      { x: -100, opacity: 0, duration: 0.6, ease: 'sine.inOut' },
      { x: 35, opacity: 1, ease: 'sine.inOut', duration: 0.6 }
    )
  })

  header.addEventListener('mouseleave', () => {
    icon.classList.toggle('morpharrow')
    tl.fromTo(
      '.menu-links li a span',
      { x: 35, opacity: 1, ease: 'sine.inOut', duration: 0.6 },
      { x: -100, opacity: 0, duration: 0.6, ease: 'sine.inOut' }
    )
  })
}
