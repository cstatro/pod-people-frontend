import { combineReducers } from "redux";
import { playerState } from "./playerReducer";
import { modalState } from "./modalReducer";
import { userState } from "./userReducer";
import { podcastState } from "./podcastReducer";

export const rootReducer = combineReducers({
  playerState,
  modalState,
  userState,
  podcastState
});
