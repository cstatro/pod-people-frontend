const defaultState = {
  podcast: {}
};

export const podcastState = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_SELECTED_PODCAST":
      return { podcast: action.podcast };

    default:
      return state;
  }
};
