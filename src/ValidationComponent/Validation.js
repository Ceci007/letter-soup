import React from "react";
import "./Validation.scss";

const validation = props => {
  let validationMessage = "text long enough";

  if (props.inputLength <= 5) {
    validationMessage = "text too short";
  }

  return (
    <div>
      <p className="paragraph paragraph--light">{validationMessage}</p>
    </div>
  );
};

export default validation;
