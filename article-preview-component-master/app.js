const d = document

// capturando elementos
const SHARE_BUTTON = d.getElementById('btn-share')
const SHARED_BUTTON_STATE_MOBILE = d.getElementById('btn-share-state-mobile')
const BUTTONS = [SHARE_BUTTON, SHARED_BUTTON_STATE_MOBILE]

const STATE_SHARE_DESKTOP = d.getElementById('state-desktop')
const STATE_SHARE_MOBILE = d.getElementById('state-mobile')
const PROFILE_CARD = d.getElementById('profile-card')


// estado de activación
let isActive = false

// añadiento evento a los botones
BUTTONS.forEach((button) => {
  button.addEventListener('click', () => {
    isActive = !isActive
    isActive ? handleOpen() : handleClose()
  })
})

const handleOpen = () => {
  BUTTONS.forEach(button => button.classList.add("card__body__profile__share-active"))
  if (window.innerWidth >= 768) {
    STATE_SHARE_DESKTOP.style.display = "block"
    STATE_SHARE_DESKTOP.animate(
      [
        { opacity: 0 },
        { opacity: 1 }
      ],
      {
        duration: 500,
        easing: 'linear'
      }
    )
  } else {
    PROFILE_CARD
      .animate(
        [{ opacity: 1 }, { opacity: 0 }],
        { duration: 300, easing: 'linear' }
      )
      .onfinish = () => {
        PROFILE_CARD.style.display = "none"
        STATE_SHARE_MOBILE.style.display = "flex"
        STATE_SHARE_MOBILE
          .animate(
            [{ opacity: 0 }, { opacity: 1 }],
            { duration: 300, easing: 'linear' }
          )
      }
  }
}

const handleClose = () => {
  SHARE_BUTTON.classList.remove("card__body__profile__share-active")
  if (window.innerWidth >= 768) {
    STATE_SHARE_DESKTOP
      .animate(
        [
          { opacity: 1 },
          { opacity: 0 }
        ],
        {
          duration: 300,
          easing: 'linear'
        }
      )
      .onfinish = () => STATE_SHARE_DESKTOP.style.display = 'none'
  } else {
    STATE_SHARE_MOBILE
      .animate(
        [{ opacity: 1 }, { opacity: 0 }],
        { duration: 300, easing: 'linear' }
      )
      .onfinish = () => {
        STATE_SHARE_MOBILE.style.display = "none"
        PROFILE_CARD.style.display = "flex"
        PROFILE_CARD
          .animate(
            [{ opacity: 0 }, { opacity: 1 }],
            { duration: 300, easing: 'linear' }
          )
      }
  }
}
