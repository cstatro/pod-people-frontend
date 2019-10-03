export const playButtonAction = dispatch => ({
  playPodcast: link => dispatch({ link, type: "SET_CURRENT_TRACK" })
});
