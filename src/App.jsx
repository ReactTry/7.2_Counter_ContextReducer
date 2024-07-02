import { useContext } from "react";
import "./App.css";
import ContextApp from "./components/ContextApp";
import ContextReducerApp from "./components/ContextReducerApp";
import ReducerApp from "./components/ReducerApp";
import {ButtonColorContextDynamic,ButtonColorContextProvider} from "./contexts/ButtonColorContext";
import { CounterProvider } from "./contexts/CounterContext";
import { CounterContextReducerProvider } from "./contexts/CounterContextReducer";

function App() {
  return (
    <>
      {/* Context  Only App */}
      <CounterProvider>
        <ButtonColorContextProvider>
          <ContextApp />
        </ButtonColorContextProvider>
      </CounterProvider>

      {/* Reducer Only App */}
      <ReducerApp />

      {/* Context & Reducer App // Updated color context */}
      <CounterContextReducerProvider>
        <ButtonColorContextDynamic.Provider value={{ color: { plus: "orange", minus: "#F7DBCA" } }}>
          <ContextReducerApp />
        </ButtonColorContextDynamic.Provider>
      </CounterContextReducerProvider>
    </>
  );
}

export default App;
