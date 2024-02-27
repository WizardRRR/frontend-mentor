const d = document

const WRAPPED_ELEMENT = d.getElementById('container-field')
const INPUT = d.getElementById('input')
const BUTTON = d.getElementById('btn-submit')

const MSG_ERROR = d.getElementById('message-error')
const ICON_ERROR = d.getElementById('icon-error')

let value = ''

const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

INPUT.addEventListener('input', () => value = INPUT.value)

BUTTON.addEventListener('click', () => {
  if (isValidEmail(value)) {
    MSG_ERROR.style.display = 'none'
    ICON_ERROR.style.display = 'none'
    INPUT.style.border = ''
  } else {
    MSG_ERROR.style.display = 'block'
    MSG_ERROR.innerText = 'Please provide a valid email'
    ICON_ERROR.style.display = 'inline'
    INPUT.style.border = '2px solid red'

    setTimeout(() => {
      MSG_ERROR.style.display = 'none'
      ICON_ERROR.style.display = 'none'
      INPUT.style.border = ''
    }, 2000)
  }
})