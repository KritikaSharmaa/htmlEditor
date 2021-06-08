let loadsofar = 0;

const Reducer = (state = loadsofar, action) => {
  switch (action.type) {
    case "Loading":
      if (loadsofar === 100) {
        return (loadsofar = 0);
      } else return ++loadsofar;
    default:
      return state;
  }
};
export default Reducer;
