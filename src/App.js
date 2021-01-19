import "./App.css";
import "./scss/style.scss";
import Faq from "./components/Faq";
import Button from "./components/Button";
import Modal from "./components/Modal";
import React, { useState } from "react";
import Questions from "./Questions.json";

function App() {
  // const count = 0;
  const [count, setCount] = useState(0);
  const nextStep = (e) => {
    setCount(count + 1);
    const selectData = document.querySelector("input[name=answer]:checked")
      .value;
    const answerData = Questions.QandA[count].A;
    if (selectData === answerData) {
      console.log("good!");
      const correctNum = count + 1;
      console.log(correctNum);
    } else {
      console.log("bad...");
    }
  };

  const lenNum = Questions.QandA.length;

  return (
    <div className="App">
      <Faq count={count} />
      <Button count={count} nextStep={nextStep} lenNum={lenNum} />
      <Modal />
    </div>
  );
}

export default App;
