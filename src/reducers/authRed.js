const authRed = (state = { isSignedIn: null, userId: null }, action) => {
  switch (action.type) {
    case "SING_IN":
      return { ...state, isSignedIn: true, userId: action.payload };
    case "SING_OUT":
      return { ...state, isSignedIn: false, userId: null };
    default:
      return state;
  }
};
export default authRed;
