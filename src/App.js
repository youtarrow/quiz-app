import "./App.css";
import "./scss/style.scss";
import Faq from "./components/Faq";
import Button from "./components/Button";
import Modal from "./components/Modal";
import React, { useState } from "react";
import Questions from "./Questions.json";

function App() {
  const [count, setCount] = useState(0);
  const [point, setPoint] = useState(0);

  // ボタン下押しで次の問題を出す・正解/不正解を選定
  const nextStep = () => {
    setCount(count + 1);
    correct();
  };
  // 条件分岐で正解の場合カウントを上げる
  const correct = () => {
    const selectData = document.querySelector("input[name=answer]:checked")
      .value;
    const answerData = Questions.QandA[count].A;
    if (selectData === answerData) {
      console.log("good!");
      setPoint(point + 1);
    } else {
      console.log("bad...");
    }
  };
  // 問題の総数
  const lenNum = Questions.QandA.length;

  return (
    <div className="App">
      <Faq count={count} />
      <Button count={count} nextStep={nextStep} lenNum={lenNum} />
      <Modal point={point} />
    </div>
  );
}

export default App;
