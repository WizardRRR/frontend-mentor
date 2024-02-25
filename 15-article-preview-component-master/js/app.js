import { data } from './GlobalState.js'
import { handleClose, handleOpen } from './handlers.js'

const {
  STATE_SHARE_DESKTOP,
  STATE_SHARE_MOBILE,
  SHARED_BUTTON_STATE_MOBILE,
  SHARE_BUTTON,
} = data

const BUTTONS = [SHARE_BUTTON, SHARED_BUTTON_STATE_MOBILE]

BUTTONS.forEach((button) => {
  button.addEventListener('click', () => {
    data.isActive ? handleClose() : handleOpen()
  })
})

STATE_SHARE_DESKTOP.addEventListener('click', e => e.stopPropagation())
STATE_SHARE_DESKTOP.addEventListener('mouseleave', () => {
  if (data.isActive) handleClose()
})
STATE_SHARE_MOBILE.addEventListener('mouseleave', () => {
  if (data.isActive) handleClose()
})

document.addEventListener('mousedown', (e) => {
  if (
    !STATE_SHARE_MOBILE.contains(e.target) &&
    !SHARE_BUTTON.contains(e.target) &&
    data.isActive
  ) {
    handleClose()
  }
})