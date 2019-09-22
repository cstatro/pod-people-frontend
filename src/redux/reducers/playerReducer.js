const defaultState = {
  currentTrack:
    "http://traffic.libsyn.com/blackagendareport/20190501_bd_biden_balloon.mp3?dest-id=13036"
};

export const playerState = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_CURRENT_TRACK":
      const newState = { ...state, currentTrack: action.link };
      return newState;
    default:
      return state;
  }
};
