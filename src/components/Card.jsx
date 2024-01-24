import { useEffect, useState } from "react";
import Option from "./Option";
import adventureImg from "../assets/undraw_adventure_4hum 1.svg";
import { useQuery, gql } from "@apollo/client";
import displayData from "../util/displayData";
import { CircularProgress } from "@mui/material";

const QUERY_ALL_COUNTRIES = gql`
  query {
    countries {
      edges {
        node {
          name
          capital
          subregion
          flag
        }
      }
    }
  }
`;

// eslint-disable-next-line react/prop-types
const Card = ({ setDone, setRes, res }) => {
  const { data: countries } = useQuery(QUERY_ALL_COUNTRIES);

  const [question, setQuestion] = useState();
  const [chosen, setChosen] = useState();
  const [assis, setAssis] = useState(0);

  useEffect(() => {
    countries && setQuestion(displayData(countries));
    setAssis(res);
  }, [countries]);
  useEffect(() => {
    setAssis(res);
  }, [question]);

  return (
    <div className="w-full sm:w-[464px] px-[32px] pt-[68px] pb-[32px] bg-white rounded-3xl flex flex-col relative">
      <img
        src={adventureImg}
        className="hidden sm:block w-full sm:w-[162px] h-[116px] absolute top-[-74px] right-0 z-10"
      />
      {question ? (
        <>
          <img
            className={`w-[84px] h-[54px] mb-[28px] rounded shadow-md ${
              !question.flag && "hidden"
            }`}
            src={question.flag && question.flag}
          />
          <div className="w-full sm:w-[373px] mb-[32px] text-cyan-800 text-2xl font-bold font-['Poppins']">
            {question.question}
          </div>
          <div className="flex flex-col gap-[25px]">
            {(() => {
              const options = [];
              for (let i = 0; i < 4; i++) {
                options.push(
                  <Option
                    key={i}
                    num={["A", "B", "C", "D"].at(i)}
                    text={question.options[i].option}
                    correct={question.options[i].correct}
                    chosen={chosen}
                    setChosen={setChosen}
                    res={res}
                    setRes={setRes}
                    setDone={setDone}
                  />
                );
              }
              return options;
            })()}
          </div>
          {chosen !== undefined && (
            <button
              onClick={() => {
                assis !== res
                  ? setChosen(undefined) / setQuestion(displayData(countries))
                  : setDone(true);
              }}
              className="px-[36px] py-[14px] mt-[24px] bg-amber-400 rounded-xl shadow self-end text-white text-lg font-bold font-['Poppins']"
            >
              Next
            </button>
          )}
        </>
      ) : (
        <CircularProgress className="self-center" />
      )}
    </div>
  );
};

export default Card;
