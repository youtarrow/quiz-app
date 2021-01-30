/* eslint-disable no-useless-concat */
import React from "react";
import Questions from "../Questions.json";

function Modal(props) {
  return (
    <div className="modal">
      <h2 className="modal__title">Score</h2>
      <p className="modal__num">
        {Questions.QandA.length + "/" + props.addCount}
      </p>
      (*´ﾟДﾟ)ｙ━･~　ﾌﾟﾊｧ
    </div>
  );
}

export default Modal;
