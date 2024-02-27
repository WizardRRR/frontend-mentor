export function camelCaseToWords(input) {
  return input.replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/\b\w/g, firstChar => firstChar.toUpperCase());
}

export function showError(field, errorMessage) {
  field.icon.style.display = 'block'
  fadeIn(field.icon)
  field.message.style.display = 'block'
  fadeIn(field.message)
  field.message.innerText = errorMessage
  field.input.style.border = '3px solid var(--Red)'
}

function fadeIn(wrapped) {
  return wrapped.animate([
    {
      opacity: 0
    },
    {
      opacity: 1
    }], {
    duration: 150,
    easing: 'ease-in-out'
  })
}

function fadeOut(wrapped) {
  return wrapped.animate([
    {
      opacity: 1
    },
    {
      opacity: 0
    }], {
    duration: 150,
    easing: 'ease-in-out'
  })
}

export function hideError(field) {
  field.icon.style.display = ''
  fadeOut(field.icon)
  field.message.style.display = ''
  fadeOut(field.message)
  field.message.innerText = ''
  field.input.style.border = ''
}