import React from "react";

function Modal(props) {
  return (
    <div className="modal">
      <h2 className="modal__title">Score</h2>
      <p className="modal__num">{props.num}</p>
      (*´ﾟДﾟ)ｙ━･~　ﾌﾟﾊｧ
    </div>
  );
}

export default Modal;
