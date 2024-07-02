import React, { useContext } from "react";
import { CounterContextReducer } from "../contexts/CounterContextReducer";
import {  ButtonColorContextDynamic } from "../contexts/ButtonColorContext";


const ContextReducerApp = () => {
  const { state, dispatch } = useContext(CounterContextReducer);
  const {color} =useContext(ButtonColorContextDynamic)

  return (
    <>
      <div style={{ textDecorationLine: "underline" }}>
        <b>Context Reducer App</b>
      </div>
      <h1>{state.count}</h1>

      <div>
        <button style={{background:color.minus}} onClick={() => dispatch({ type: "decrement" })}>-</button>
        <button style={{background:color.plus}} onClick={() => dispatch({ type: "increment" })}>+</button>
      </div>
    </>
  );
};

export default ContextReducerApp;
