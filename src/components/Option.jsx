/* eslint-disable react/prop-types */
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { useEffect, useState } from "react";

const Option = ({ num, text, correct, chosen, setChosen, setRes, res }) => {
  const [clicked, setClicked] = useState(false);
  const [answer, setAnswer] = useState();

  useEffect(() => {
    if (chosen) {
      clicked && correct && setAnswer(true) / setRes(res + 1);
      !clicked && correct && setAnswer(true);
      clicked && !correct && setAnswer(false);
      !clicked && !correct && setAnswer(null);
    } else {
      setAnswer(undefined);
      setClicked(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chosen]);
  return (
    <div
      onClick={() => {
        !chosen && setChosen(true) / setClicked(true);
      }}
      className={`py-[10px] px-[19px] text-indigo-500 rounded-xl flex items-center gap-[46px] ${
        answer === false
          ? "bg-rose-400 text-white"
          : answer === true
          ? "bg-green-400 text-white"
          : answer === null
          ? "bg-white   border-2 border-indigo-500 border-opacity-70"
          : "border-2 border-indigo-500 hover:border-amber-400 hover:bg-amber-400 hover:text-white cursor-pointer"
      }`}
    >
      <div className="text-2xl font-medium font-['Poppins']">{num}</div>
      <div className="text-lg font-medium font-['Poppins'] flex-1">{text}</div>
      {answer === true ? (
        <CheckCircleOutlineIcon className={`text-white`} />
      ) : answer === false ? (
        <HighlightOffIcon className={`text-white`} />
      ) : (
        ""
      )}
    </div>
  );
};

export default Option;
