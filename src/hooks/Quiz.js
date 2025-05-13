import { createContext, useContext, useState } from "react";
import { Data } from "../components/Data";

const DataConext = createContext();
export const useDataConext = () => useContext(DataConext);
const DataQuiz = Data;
export const QuizData = ({ children }) => {
  const [data, setData] = useState(DataQuiz);

  const getQuiz = (indexQuiz) => {
    const tempQuiz = data.filter((value, index) => {
      return index === indexQuiz;
    });
    return tempQuiz;
  };
  const getQuestion = (quizIndex) => {
    const tempQuiz = data[quizIndex];
    console.log(data);
    return tempQuiz.questions;
  };

  return (
    <DataConext.Provider value={{ data, getQuiz, getQuestion, setData }}>
      {children}
    </DataConext.Provider>
  );
};
