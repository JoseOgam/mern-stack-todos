import React, { useReducer } from "react";
import ReactDOM from "react-dom";
const initialState = 0;
const countReducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return 0;
    default:
      return state;
  }
};
const App = () => {
  let [count, dispatch] = useReducer(countReducer, initialState);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>+1</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-1</button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("root1"));
