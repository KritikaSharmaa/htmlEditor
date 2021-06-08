import { createStore } from "redux";
import Rootreducer from "../reducers/Rootreducer";

const store = createStore(
  Rootreducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
