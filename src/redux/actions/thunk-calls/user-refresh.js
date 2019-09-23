export const fetchUser = user_id => {
  return dispatch => {
    // dispatch({ type: "REQUEST_USER", user });
    return fetch(`http://localhost:3000/users/${user_id}`)
      .then(r => r.json())
      .then(json => dispatch({ type: "UPDATE_USER", json }));
  };
};
