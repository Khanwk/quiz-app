import "./QuizList.css";
export default function QuizItem({
  tittle,
  index,
  setStartQuiz,
  setQuizIndex,
}) {
  return (
    <>
      <button
        type="button"
        className="listItem"
        onClick={() => {
          setStartQuiz(true);
          setQuizIndex(index);
        }}
      >
        {tittle}
      </button>
    </>
  );
}
