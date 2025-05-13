import { useDataConext } from "../../hooks/Quiz";
import { useResultContext } from "../../hooks/Result";
import "./ResultItem.css";

export default function ResultItem({ index, quizIndex }) {
  const resultData = useResultContext();
  const quizData = useDataConext();

  const question =
    quizData?.data?.[quizIndex]?.questions?.[index]?.question ||
    "Question not found";

  const correctAnswer =
    quizData?.data?.[quizIndex]?.questions?.[index]?.answer || "N/A";

  return (
    <>
      {
        <div
          className={
            resultData.result[index] === resultData.right[index]
              ? "right box"
              : "wrong box"
          }
        >
          <h1>{question}</h1>
          <p>
            Correct Answer: <span>{correctAnswer}</span>
          </p>
          <p>
            Your Answer: <span>{resultData.result[index]}</span>
          </p>
        </div>
      }
    </>
  );
}
