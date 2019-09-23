import { fetchUser } from "../thunk-calls/user-refresh";

// export const modalActions = dispatch => ({
//   closeModal: () => dispatch({ type: "CLOSE_MODAL" }),
//   refreshUser: user_id => dispatch(fetchUser(user_id))
// });
const close = () => {
  return { type: "CLOSE_MODAL" };
};

export const modalActions = {
  closeModal: close,
  refreshUser: fetchUser
};
