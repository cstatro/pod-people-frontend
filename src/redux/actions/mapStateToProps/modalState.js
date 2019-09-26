export const mapAppStateToProps = state => ({
  active: state.modalState.active,
  displayObj: state.modalState.displayObj,
  objectType: state.modalState.objectType,
  loggedIn: state.userState.user,
  podcast: state.podcastState.podcast
});
