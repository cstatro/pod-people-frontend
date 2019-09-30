export const ListShowPagePodcastRowActions = dispatch => ({
  openModal: displayObj =>
    dispatch({
      objectType: "podcastData",
      type: "OPEN_MODAL",
      displayObj
    })
});
