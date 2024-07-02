import React, { createContext, useState } from "react";

const CounterContext = createContext();

const CounterProvider = ({ children }) => {
  const [count, setcount] = useState(0);
  const increment = () => setcount((prev) => prev < 10 ? prev + 1:10);
  const decrement = () => setcount((prev) => (prev > 0 ? prev - 1 : 0));
  return (
    <CounterContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
};

export { CounterContext, CounterProvider };
