import React from "react";

function Faq() {
  return (
    <section>
      <div className="faq">
        <h2 className="faq__question">
          <span className="faq__icon">Q. </span>
          <span className="faq__text">テスト</span>
        </h2>
      </div>
      <div className="choice">
        <ul className="choice__list">
          <li className="choice__item">
            <input type="radio" name="q1" value="はい" /> はい
          </li>
          <li className="choice__item">
            <input type="radio" name="q1" value="いいえ" /> いいえ
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Faq;
