import React from "react";

function Faq(props) {
  return (
    <section>
      <div className="faq">
        <h2 className="faq__question">
          <span className="faq__icon">Q. </span>
          <span className="faq__text">
            コンビニのレジで「おや、コイツ{props.comment}
            」と思ってしまう店員とは？
          </span>
        </h2>
      </div>
      <div className="choice">
        <ul className="choice__list">
          <li className="choice__item">
            <input type="radio" name="answer" value="YES" /> YES
          </li>
          <li className="choice__item">
            <input type="radio" name="answer" value="NO" /> NO
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Faq;
