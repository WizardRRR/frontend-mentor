
// seleccionamos todos los titulos de contenedor en un array
const ACCORDION_TITLES = document.querySelectorAll('.container__accordion__title')

// añadimos el evento a cada titulo de acordeon
ACCORDION_TITLES.forEach(title => {
  title.addEventListener('click', () => handleClickIcon(title))
})

// creando la animación de entrada
const entranceAnimation = (box) => {
  const contentHeight = box.scrollHeight
  const animation = box.animate([
    { height: '0px', opacity: '0' },
    { height: `${contentHeight + 20}px`, opacity: '1' }
  ], {
    duration: 300,
    easing: 'ease-in-out'
  })
  animation.onfinish = () => box.style.height = `${contentHeight + 20}px`
}

// creando la animación de salida
const exitAnimation = (box) => {
  const animation = box.animate([
    { height: box.scrollHeight + 'px', opacity: '1' },
    { height: '0px', opacity: '0' }
  ], {
    duration: 300,
    easing: 'ease'
  })
  animation.onfinish = () => box.style.height = '0'
}

// evento de click 
const handleClickIcon = (element) => {
  const CURRENT_PARAGRAPH = element.nextElementSibling

  ACCORDION_TITLES.forEach(title => {
    const content = title.nextElementSibling
    if (content !== CURRENT_PARAGRAPH && content.classList.contains('active')) {
      content.classList.remove('active')
      exitAnimation(content)
      title.querySelector('img').src = 'assets/images/icon-plus.svg';
    }
  })

  if (!CURRENT_PARAGRAPH.classList.contains('active')) {
    element.querySelector('img').src = 'assets/images/icon-minus.svg'
    entranceAnimation(CURRENT_PARAGRAPH)
  }

  CURRENT_PARAGRAPH.classList.add('active')
}


