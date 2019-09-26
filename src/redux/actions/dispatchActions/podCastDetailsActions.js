export const podcastDetailsActions = dispatch => ({
  openModal: (displayObj, objectType = "podcast") =>
    dispatch({ type: "OPEN_MODAL", displayObj, objectType })
});
