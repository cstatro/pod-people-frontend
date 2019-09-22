// const mapDispatchActions = dispatch => ({
//     setHistory: str => dispatch({ type: "ADD HISTORY", text: str })
//   });

export const mapPlayerDispatchAction = dispatch => ({
  setCurrentTrack: link => dispatch({ type: "SET_CURRENT_TRACK", link }),
  openModal: () => dispatch({ type: "EPISODE_TO_LIST" })
});
