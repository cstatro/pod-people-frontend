// export const loginActions = dispatch => ({
import { fetchUser } from "../thunk-calls/user-refresh";

//   setUser: json => dispatch({ type: "UPDATE_USER", json })
// });

export const loginActions = {
  fetchUser
};
