import QuizBox from "./QuizBox";
import Timer from "./Timer";
import { useDataConext } from "../hooks/Quiz";
import { useCallback, useEffect, useRef, useState } from "react";
import QuizItem from "./QuizList";
import "./Layout.css";
import Result from "./Result/Result";

export default function Layout() {
  const dataQuiz = useDataConext();
  const [startQuiz, setStartQuiz] = useState(false);
  const [quizIndex, setQuizIndex] = useState(-1);
  const [timer, setTimer] = useState(9);
  const [interval, setinterval] = useState();
  const [showResult, setShowResult] = useState(false);

  const startTimer = () => {
    const intervalid = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 0) {
          clearInterval(intervalid);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    setinterval(intervalid);
  };
  const resetPage = () => {
    setQuizIndex(-1);
    setShowResult(false);
    setStartQuiz(false);
    setTimer(59);
  };

  const showResultFunc = useCallback(() => {
    console.log("called");
    setShowResult(true);
  }, []);
  //   const resetTime = () => {
  //     clearInterval(interval);
  //     setTimer(59);
  //     startTimer();
  //   };
  //   useEffect(() => {
  //     return () => {
  //       if (interval) {
  //         clearInterval(interval);
  //       }
  //     };
  //   }, [interval]);
  useEffect(() => {
    if (startQuiz) startTimer();
  }, [startQuiz]);

  return (
    <>
      {!showResult && (
        <div className="mainBox">
          <>
            {startQuiz && <Timer timer={timer} setTimer={setTimer} />}
            {!startQuiz &&
              dataQuiz.data.map((value, index) => (
                <QuizItem
                  tittle={value.title}
                  index={index}
                  key={value.id}
                  setStartQuiz={setStartQuiz}
                  setQuizIndex={setQuizIndex}
                />
              ))}
            {startQuiz && (
              <QuizBox
                index={quizIndex}
                showResultFunc={showResultFunc}
                timer={timer}
                setTimer={setTimer}
              />
            )}
          </>
        </div>
      )}
      {showResult && <Result quizIndex={quizIndex} resetPage={resetPage} />}
    </>
  );
}
