import React from "react";

function Button(props) {
  return (
    <div className="button">
      <button className="button__item" type="button">
        {props.bttText}
      </button>
    </div>
  );
}

export default Button;
