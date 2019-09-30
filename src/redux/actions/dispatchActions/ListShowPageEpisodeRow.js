export const ListShowPageEpisodeRowActions = dispatch => ({
  viewModal: displayObj =>
    dispatch({ displayObj, type: "OPEN_MODAL", objectType: "episodeData" })
});
