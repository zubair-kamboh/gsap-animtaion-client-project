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

// On mouse leave
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

// On menu click
const onMenuClick = () => {
  const menu = document.querySelector('#menu')
  menu.classList.toggle('onMenuClick')
}

const handleResize = (e) => {
  if (e[0].contentRect.width < 1200) {
    icon.removeEventListener('mouseenter', onMouseEnter)
    navLinks.removeEventListener('mouseleave', onMouseLeave)

    icon.addEventListener('click', onMenuClick)

    // Remove animation on document click
    const doc = document.querySelector('body')
    doc.addEventListener('click', (e) => {
      const menu = document.querySelector('#menu')

      const classClick = e.target.classList

      if (classClick.contains('nav-menu')) {
        menu.classList.remove('onMenuClick')
      }
    })
  } else {
    // remove menu click listener
    icon.removeEventListener('click', onMenuClick)

    // add mouseenter & mouseleave
    icon.addEventListener('mouseenter', onMouseEnter)
    navLinks.addEventListener('mouseleave', onMouseLeave)
  }
}

const resizer = new ResizeObserver(handleResize)
resizer.observe(document.querySelector('body'))
