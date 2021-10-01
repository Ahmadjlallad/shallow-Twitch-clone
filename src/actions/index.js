const singIn = (userId) => {
  return {
    type: "SING_IN",
    payload: userId,
  };
};
const singOut = () => {
  return {
    type: "SING_OUT",
  };
};
export { singIn, singOut };
