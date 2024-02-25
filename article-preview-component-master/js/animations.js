import { data } from "./GlobalState.js"

export const entranceAnimationDesktop = () => {
  data.STATE_SHARE_DESKTOP.style.display = "block"
  data.STATE_SHARE_DESKTOP.animate(
    [
      { opacity: 0, transform: 'translateY(1rem)' },
      { opacity: 1 }
    ],
    {
      duration: 300,
      easing: 'linear'
    }
  )
}

export const entranceAnimationMobile = () => {
  data.PROFILE_CARD
    .animate(
      [{ opacity: 1 }, { opacity: 0 }],
      { duration: 300, easing: 'linear' }
    )
    .onfinish = () => {
      data.PROFILE_CARD.style.display = "none"
      data.STATE_SHARE_MOBILE.style.display = "flex"
      data.STATE_SHARE_MOBILE
        .animate(
          [{ opacity: 0 }, { opacity: 1 }],
          { duration: 300, easing: 'linear' }
        )
    }
}

export const exitAnimationDesktop = () => {
  data.STATE_SHARE_DESKTOP
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
    .onfinish = () => data.STATE_SHARE_DESKTOP.style.display = 'none'
}
export const exitAnimationNobile = () => {
  data.STATE_SHARE_MOBILE
    .animate(
      [{ opacity: 1 }, { opacity: 0 }],
      { duration: 300, easing: 'linear' }
    )
    .onfinish = () => {
      data.STATE_SHARE_MOBILE.style.display = "none"
      data.PROFILE_CARD.style.display = "flex"
      data.PROFILE_CARD
        .animate(
          [{ opacity: 0 }, { opacity: 1 }],
          { duration: 300, easing: 'linear' }
        )
    }
}