export const Types = {
  CHAT_TOGGLE: 'campfire/CHAT_TOGGLE'
}

const CAMPFIRE_STATE = {
  isLogged: false,
  chatToggled: false,
  inGame: false
}

export default function campfire(state = CAMPFIRE_STATE, action) {
  switch(action.type) {
    case Types.CHAT_TOGGLE:
      return {...state, chatToggled: action.payload};
    default:
      return {...state};
  }
}
