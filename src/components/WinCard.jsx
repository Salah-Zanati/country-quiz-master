import winnersImg from "../assets/undraw_winners_ao2o 2.svg";

// eslint-disable-next-line react/prop-types
const WinCard = ({ setDone, res, setRes }) => {
  return (
    <div className="w-full h-[542px] bg-white rounded-3xl flex flex-col items-center justify-center text-center gap-[72px] sm:w-[464px]">
      <img src={winnersImg} className="w-[238px] h-[136px]" />
      <div>
        <div className="text-blue-950 text-5xl font-bold font-['Poppins']">
          Results
        </div>
        <div>
          <span className="text-blue-950 text-lg font-normal font-['Poppins']">
            You got{" "}
          </span>
          <span className="text-emerald-300 text-4xl font-bold font-['Poppins']">
            {res}
          </span>
          <span className="text-blue-950 text-lg font-normal font-['Poppins']">
            {" "}
            correct answers
          </span>
        </div>
      </div>
      <button
        onClick={() => {
          setDone(false);
          setRes(0);
        }}
        className="py-[18px] px-[61px] rounded-lg text-blue-950 text-lg border-blue-950 border-[2px] font-semibold font-['Poppins']"
      >
        Try again
      </button>
    </div>
  );
};

export default WinCard;
