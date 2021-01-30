import React, { useState } from "react";
import Questions from "../Questions.json";

function Faq(props) {
  // value値のデフォルト値を設定
  const [state, setName] = useState({
    val: "HELLO",
  });

  return (
    <section>
      <div className="faq">
        <h2 className="faq__question">
          <span className="faq__icon">Q. </span>
          <span className="faq__text">{Questions.QandA[props.count].Q}</span>
        </h2>
      </div>
      <div className="choice">
        <span className="faq__text">
          テスト；{Questions.QandA[props.count].A}
        </span>
        <form id="inputForm">
          <ul className="choice__list">
            <li className="choice__item">
              <input
                type="radio"
                name="answer"
                value="YES"
                checked={state.val === "YES"}
                onChange={(e) => {
                  setName({ ...state, val: e.target.value });
                }}
              />
              YES
            </li>
            <li className="choice__item">
              <input
                type="radio"
                name="answer"
                value="NO"
                checked={state.val === "NO"}
                onChange={(e) => {
                  setName({ ...state, val: e.target.value });
                }}
              />
              NO
            </li>
          </ul>
        </form>
      </div>
    </section>
  );
}

export default Faq;
