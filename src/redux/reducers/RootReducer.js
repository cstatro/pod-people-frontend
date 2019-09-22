import { combineReducers } from "redux";
import { playerState } from "./playerReducer";
import { modalState } from "./modalReducer";
import { userState } from "./userReducer";

export const rootReducer = combineReducers({
  playerState,
  modalState,
  userState
});
