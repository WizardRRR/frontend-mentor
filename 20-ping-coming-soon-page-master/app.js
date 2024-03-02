const d = document

const error = d.getElementById('error-email')
const form = d.getElementById('form')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const emailInput = document.getElementById('email-input');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (emailRegex.test(emailInput.value)) {
    error.style.display = 'none'
    emailInput.style.border = ''
  } else {
    emailInput.style.border = '1px solid red'
    error.style.display = 'block'
    setTimeout(() => {
      error.style.display = 'none'
      emailInput.style.border = ''
    }, 2000);
  }
})