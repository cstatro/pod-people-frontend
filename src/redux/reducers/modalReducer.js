const defaultState = {
  active: false,
  episode: {}
};

export const modalState = (state = defaultState, action) => {
  switch (action.type) {
    case "EPISODE_TO_LIST":
      const newState = { ...state, active: true, episode: action.episode };
      return newState;
    case "CLOSE_MODAL":
      return defaultState;
    default:
      return state;
  }
};