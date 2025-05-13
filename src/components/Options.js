import { useState } from "react";
import "./Options.css";

export default function Option({
  option,
  index,
  setselectedOption,
  selectedOption,
}) {
  const [selected, setSelected] = useState("");
  const optionNo = ["A", "B", "C", "D"];
  return (
    <>
      <div
        className="mianOptionDiv"
        onClick={() => {
          setSelected(index);
          setselectedOption(option);
        }}
      >
        <div
          className={
            option === selectedOption
              ? "optionNoSelected optionMainNo"
              : "optionNo optionMainNo"
          }
        >
          <h1>{optionNo[index]}</h1>
        </div>
        <div
          className={
            option === selectedOption
              ? "optionNoSelected optionTittleMain"
              : "optionNo optionTittleMain"
          }
        >
          <h1>{option}</h1>
        </div>
      </div>
    </>
  );
}
