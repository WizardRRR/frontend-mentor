const d = document

export const initialStates = {
  isActive: false,
  SHARE_BUTTON: d.getElementById('btn-share'),
  SHARED_BUTTON_STATE_MOBILE: d.getElementById('btn-share-state-mobile'),
  STATE_SHARE_DESKTOP: d.getElementById('state-desktop'),
  STATE_SHARE_MOBILE: d.getElementById('state-mobile'),
  PROFILE_CARD: d.getElementById('profile-card')
}

export let data = Object.freeze(initialStates);

export const useReducers = () => ({
  setIsActive: (value) => {
    data = Object.freeze({
      ...data,
      isActive: value
    });
  }
})