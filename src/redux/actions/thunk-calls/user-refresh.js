export const fetchUser = user_id => {
  return dispatch => {
    return fetch(`http://localhost:3000/users/${user_id}`)
      .then(r => r.json())
      .then(json => dispatch({ type: "UPDATE_USER", json }));
  };
};

// export const close = () => {
//   return { type: "CLOSE_MODAL" };
// };
