export const mapAppStateToProps = state => ({
  active: state.modalState.active,
  episode: state.modalState.episode,
  loggedIn: state.userState.user
});
