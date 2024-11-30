export default (state, arrUserNames) => {
  state.currentUsers = [];
  
  arrUserNames.forEach((name) => {
    if (name.startsWith(state.input)) {
      state.currentUsers.push(name);
    }
  });
};
