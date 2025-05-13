import "./timer.css";

export default function Timer({ timer }) {
  return (
    <>
      <div className="timmer">
        <p className="no">{timer}</p>
        <p className="sec">sec</p>
      </div>
    </>
  );
}
