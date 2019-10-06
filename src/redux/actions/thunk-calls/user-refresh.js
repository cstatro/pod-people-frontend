export const fetchUser = user_id => {
  return dispatch => {
    return fetch(`${process.env.REACT_APP_BACKEND}/users/${user_id}`)
      .then(r => r.json())
      .then(json => {
        console.log("user refresh", json);
        return dispatch({ type: "UPDATE_USER", json });
      });
  };
};

// export const close = () => {
//   return { type: "CLOSE_MODAL" };
// };
