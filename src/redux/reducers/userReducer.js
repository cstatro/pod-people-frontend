const defaultState = {
  user: { id: null, followed_lists: [] }
};

export const userState = (state = defaultState, action) => {
  switch (action.type) {
    case "UPDATE_USER":
      return { user: { ...action.json } };
    case "REMOVE_LIST":
      return {
        user: {
          ...action.user,
          lists: action.user.lists
            .map(l => (action.forRemoval === l.id ? null : l))
            .filter(x => x !== null)
        }
      };
    case "LOG_OUT":
      return defaultState;
    default:
      return state;
  }
};
