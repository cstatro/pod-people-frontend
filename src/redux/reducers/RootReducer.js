import { combineReducers } from "redux";
import { playerState } from "./playerReducer";
import { modalState } from "./modalReducer";

export const rootReducer = combineReducers({
  playerState,
  modalState
});
