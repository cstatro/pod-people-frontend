import { combineReducers } from "redux";
import { playerState } from "./playerReducer";

export const rootReducer = combineReducers({
  playerState
});
