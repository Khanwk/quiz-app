import { useResultContext } from "../../hooks/Result";
import ResultItem from "./ResultItem";
import "./Result.css";
import { useEffect, useState } from "react";

export default function Result({ quizIndex, resetPage }) {
  const [diffCount, setDiffCount] = useState(0);
  const resultData = useResultContext();
  useEffect(() => {
    setDiffCount(0);
    resultData.result.forEach((value, index) => {
      if (value === resultData.right[index]) {
        setDiffCount((prev) => prev + 1);
      }
    });
  }, []);
  return (
    <>
      <div className="resultCard">
        <div>
          <h1>Your Result</h1>
        </div>
        <h3
          style={{
            color: diffCount > 3 ? "green" : diffCount > 1 ? "orange" : "red",
            fontSize: "26px",
          }}
        >
          Score: {diffCount}/{resultData.result.length}
        </h3>
        {resultData.result.map((value, index) => {
          return (
            <ResultItem
              key={`result-${index}`}
              value={value}
              index={index}
              quizIndex={quizIndex}
            />
          );
        })}
        <button
          type="button"
          className="btnHome"
          onClick={() => {
            resetPage();
            resultData.clearLists();
          }}
        >
          Home
        </button>
      </div>
    </>
  );
}
