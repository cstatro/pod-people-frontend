const defaultState = {
  user: { id: 1 }
};

export const userState = (state = defaultState, action) => {
  switch (action.type) {
    case "UPDATE_USER":
      console.log(action.json);
      return { user: { ...action.json } };

    default:
      return state;
  }
};
