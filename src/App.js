import { useEffect, useMemo, useState } from "react";
import "./app.css";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";
import Start from "./components/Start";
function App() {
  const [userName, setUserName] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("$ 0");

  const moneyPyramid = useMemo(
    () => ([
      { id: 1, amount: "$ 100" },
      { id: 2, amount: "$ 200" },
      { id: 3, amount: "$ 300" },
      { id: 4, amount: "$ 500" },
      { id: 5, amount: "$ 1000" },
      { id: 6, amount: "$ 2000" },
      { id: 7, amount: "$ 4000" },
      { id: 8, amount: "$ 8000" },
      { id: 9, amount: "$ 16000" },
      { id: 10, amount: "$ 320000" },
      { id: 11, amount: "$ 640000" },
      { id: 12, amount: "$ 125000" },
      { id: 13, amount: "$ 250000" },
      { id: 14, amount: "$ 500000" },
      { id: 15, amount: "$ 1000000" },
    ]),
    []
  );

  const data = [
    {
      id: 1,
      question: "Rolex is a company that specialize in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Clock",
          correct: false,
        },
        {
          text: "Television",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "What are doing everyday after wakeuup?",
      answers: [
        {
          text: "Brash",
          correct: true,
        },
        {
          text: "Danch",
          correct: false,
        },
        {
          text: "Run",
          correct: false,
        },
        {
          text: "Bad Tolk",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "If are you class ten. How Old are you?",
      answers: [
        {
          text: "05",
          correct: false,
        },
        {
          text: "25",
          correct: false,
        },
        {
          text: "20",
          correct: false,
        },
        {
          text: "16",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "Ask to you anyone. How are you doing? What are you replie",
      answers: [
        {
          text: "Bad",
          correct: false,
        },
        {
          text: "Vary",
          correct: false,
        },
        {
          text: "Doing Well",
          correct: true,
        },
        {
          text: "Not Good",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "What is the answer of Assalamu alikum? ",
      answers: [
        {
          text: "Salam",
          correct: false,
        },
        {
          text: "Sham",
          correct: false,
        },
        {
          text: "Olikumussalam",
          correct: true,
        },
        {
          text: "Good Morning",
          correct: false,
        },
      ],
    },
  ];

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [moneyPyramid, questionNumber]);
  return (
    <div className="app">
      {userName ? (
        <>
        <div className="main">
        {stop ? (
          <h1 className="endText">You Earned: {earned}</h1>
        ) : (
          <>
            <div className="top">
              <div className="timer"><Timer setStop={setStop} questionNumber={questionNumber}/></div>
              <h2>{userName}</h2>
            </div>
            <div className="bottom">
              <Trivia
                data={data}
                setStop={setStop}
                setQuestionNumber={setQuestionNumber}
                questionNumber={questionNumber}
              />
            </div>
          </>
        )}
      </div>
      <div className="pyramid">
        <ul className="moneyList">
          {moneyPyramid
            .map((m) => (
              <li
                className={
                  questionNumber === m.id
                    ? "moneyListItem active"
                    : "moneyListItem "
                }
              >
                <span className="moneyListItemNumber">{m.id}</span>
                <span className="moneyListItemAmount"> {m.amount}</span>
              </li>
            ))
            .reverse()}
        </ul>
      </div>
        </>
      ) : <Start setUserName={setUserName}/>}
      
    </div>
  );
}

export default App;
