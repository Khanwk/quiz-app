import { useEffect, useState } from "react";
import { useDataConext } from "../hooks/Quiz";
import Option from "./Options";

import "./QuizBox.css";
import { useResultContext } from "../hooks/Result";

export default function QuizBox({ index, timer, showResultFunc, setTimer }) {
  const quizData = useDataConext();
  const resultData = useResultContext();
  const [NoOfQuestions, setNoOfQuestion] = useState(
    quizData.data[index].questions.length
  );
  const [questionIndex, setQuestionIndex] = useState(0);
  const [optionList, setOptionlist] = useState(
    quizData.data[index].questions[questionIndex].options
  );
  const [selectedOption, setselectedOption] = useState("");

  const doneOptionSelection = () => {
    resultData.addResultRight(
      selectedOption,
      quizData.data[index].questions[questionIndex].answer
    );
    setselectedOption("");
  };

  const nextQuestion = () => {
    if (selectedOption !== "") {
      doneOptionSelection();
      setNoOfQuestion((prev) => prev - 1);
      setQuestionIndex((prev) => prev + 1);
      setOptionlist(quizData.data[index].questions[questionIndex + 1].options);
    }
  };
  const Done = () => {
    setTimer(0);
    showResultFunc();
    doneOptionSelection();
  };
  useEffect(() => {
    if (timer <= 0) {
      let first = true;
      for (
        let i = resultData.result.length;
        i < quizData.data[index].questions.length;
        i++
      ) {
        console.log(i);
        if (!first) {
          resultData.addResultRight(
            "",
            quizData.data[index].questions[i].answer
          );
        } else {
          if (selectedOption !== "") {
            resultData.addResultRight(
              selectedOption,
              quizData.data[index].questions[i].answer
            );
          } else {
            resultData.addResultRight(
              "",
              quizData.data[index].questions[i].answer
            );
          }
          first = false;
        }
      }
      setTimer(0);
      showResultFunc();
    }
  }, [timer]);

  return (
    <div className="QuizBox">
      <div
        className="progressBg"
        style={{
          backgroundColor: "rgb(204, 204, 204)",
          width: "100%",
          height: "25px",
          display: "flex",
        }}
      >
        <div
          className="progressFill"
          style={{
            backgroundColor: "rgb(0,130,31)",
            width: `calc((100%/${quizData.data[index].questions.length})*${
              quizData.data[index].questions.length - (NoOfQuestions - 1)
            })`,
            height: "25px",
          }}
        ></div>
      </div>
      <div className="QuizBg">
        <div>
          <h1>{quizData.data[index].questions[questionIndex].question}</h1>

          {optionList.map((value, index) => (
            <Option
              option={value}
              index={index}
              key={value}
              setselectedOption={setselectedOption}
              selectedOption={selectedOption}
            />
          ))}
        </div>
        <img src="https://templates.seekviral.com/qzain/quiz/Quiz10/assets/images/Manthinking-bro.png" />
      </div>
      <button
        type="button"
        className="nextButton"
        onClick={() => nextQuestion()}
        disabled={!(questionIndex < quizData.data[index].questions.length - 1)}
      >
        Next Question
      </button>
      {!(questionIndex < quizData.data[index].questions.length - 1) && (
        <button type="button" className="nextButton" onClick={() => Done()}>
          Done
        </button>
      )}
    </div>
  );
}
