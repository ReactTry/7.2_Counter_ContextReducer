import React from "react";
import { useReducer } from "react";
import { createContext } from "react";
import { CounterReducer } from "../reducer/CounterReducer";

const CounterContextReducer = createContext();

const CounterContextReducerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CounterReducer, { count: 0 });

  return (
    <CounterContextReducer.Provider value={{ state, dispatch }}>
      {children}
    </CounterContextReducer.Provider>
  );
};

export { CounterContextReducer, CounterContextReducerProvider };
