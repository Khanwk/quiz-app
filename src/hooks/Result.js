import { createContext, useContext, useState } from "react";

const ResultContext = createContext();
export const useResultContext = () => useContext(ResultContext);

export default function ResultContexthook({ children }) {
  const [result, setResult] = useState([]);
  const [right, setRight] = useState([]);

  const addResultRight = (selectedOption, rightOption) => {
    setResult((prev) => [...prev, selectedOption]);
    setRight((prev) => [...prev, rightOption]);
  };
  const clearLists = () => {
    setResult([]);
    setRight([]);
  };
  return (
    <ResultContext.Provider
      value={{ result, right, addResultRight, clearLists }}
    >
      {children}
    </ResultContext.Provider>
  );
}
