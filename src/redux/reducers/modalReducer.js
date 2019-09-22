const defaultState = {
  active: false,
  episode: {}
};

export const modalState = (state = defaultState, action) => {
  switch (action.type) {
    case "EPISODE_TO_LIST":
      break;

    default:
      return state;
  }
};
