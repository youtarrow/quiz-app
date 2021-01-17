import React from "react";
import Questions from "../Questions.json";

function Button() {
  return (
    <div className="button">
      <button className="button__item" type="button">
        {Questions.bttnText[0]}
      </button>
    </div>
  );
}

export default Button;
