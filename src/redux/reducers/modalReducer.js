const defaultState = {
  active: false,
  objectType: null,
  displayObj: {}
};

export const modalState = (state = defaultState, action) => {
  switch (action.type) {
    case "OPEN_MODAL":
      const newState = {
        ...state,
        active: true,
        displayObj: action.displayObj,
        objectType: action.objectType
      };
      return newState;
    case "CLOSE_MODAL":
      return defaultState;
    default:
      return state;
  }
};
