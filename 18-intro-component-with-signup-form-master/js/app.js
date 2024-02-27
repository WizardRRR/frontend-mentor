import FIELD_INFORMATION from './field-information.js'
import { camelCaseToWords, hideError, showError } from './utils.js'

const d = document

const FORM = document.getElementById('signupForm')
const FIELDS = {}

// Estructurando el objeto de campos
FIELD_INFORMATION.forEach(fieldId => {
  const fieldDiv = d.getElementById(fieldId.id)

  FIELDS[fieldId.property] = {
    displayName: camelCaseToWords(fieldId.property),
    input: fieldDiv.querySelector('input'),
    icon: fieldDiv.querySelector('img'),
    message: fieldDiv.querySelector('span')
  }
})

FORM.addEventListener('submit', validateForm)

function validateForm(e) {
  e.preventDefault()

  let errors = 0

  // Check for empty inputs
  Object.values(FIELDS).forEach(field => {
    const trimmedValue = field.input.value.trim()
    if (trimmedValue === '') {
      errors++
      showError(field, `${field.displayName} cannot be empty`)
    } else {
      hideError(field)
    }
  })

  if (errors === 0) FORM.submit()
}

