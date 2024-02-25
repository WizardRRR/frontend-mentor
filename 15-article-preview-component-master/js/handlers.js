import { data, useReducers } from './GlobalState.js'
import {
  entranceAnimationDesktop,
  entranceAnimationMobile,
  exitAnimationDesktop,
  exitAnimationNobile
} from './animations.js'

const {
  SHARED_BUTTON_STATE_MOBILE,
  SHARE_BUTTON,
} = data
const { setIsActive } = useReducers()

const BUTTONS = [SHARE_BUTTON, SHARED_BUTTON_STATE_MOBILE]

export const handleOpen = () => {
  setIsActive(true)
  BUTTONS.forEach(button => button.classList.add("card__body__profile__share-active"))
  if (window.innerWidth >= 768) entranceAnimationDesktop()
  else entranceAnimationMobile()
}

export const handleClose = () => {
  setIsActive(false)
  SHARE_BUTTON.classList.remove("card__body__profile__share-active")
  if (window.innerWidth >= 768) exitAnimationDesktop()
  else exitAnimationNobile()
}
