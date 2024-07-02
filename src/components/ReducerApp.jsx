import React, { useReducer } from "react";
import { CounterReducer } from "../reducer/CounterReducer";

const ReducerApp = () => {
  const color={
    plus:"#ACC8E5",minus:"#ACE6C8"
};

  const initialState = { count: 0 };

  const [countState, dispatchFunction] = useReducer(
    CounterReducer,
    initialState
  );

  const increment = () => dispatchFunction({ type: "increment" });
  const decrement = () => dispatchFunction({ type: "decrement" });

  return (
    <>
      <div style={{ textDecorationLine: "underline" }}>
        <b>Reducer App</b>
      </div>

      <h1>{countState.count}</h1>

      <div>
        <button style={{background:color.minus}} onClick={decrement}>-</button>
        <button style={{background:color.plus}} onClick={increment}>+</button>
      </div>
    </>
  );
};

export default ReducerApp;
