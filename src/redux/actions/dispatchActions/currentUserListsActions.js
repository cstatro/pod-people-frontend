import { fetchUser } from "../thunk-calls/user-refresh";

// const close = () => {
//   return { type: "CLOSE_MODAL" };
// };
const removeList = (id, user) => {
  return { type: "REMOVE_LIST", forRemoval: id, user };
};

export const currentUserListActions = {
  fetchUser,
  removeList
};
