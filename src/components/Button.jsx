import React from "react";

function Button(props) {
  return (
    <div className="button">
      <button className="button__item" type="button" onClick={props.nextStep}>
        ボタン：{props.count < props.lenNum ? "NEXT" : "FINISH!"}
      </button>
    </div>
  );
}

export default Button;
