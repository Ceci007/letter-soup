import React from "react";
import "./Char.scss";

const char = props => {
  return (
    <div className="char-box" onClick={props.clicked}>
      <p className="char-box__text">{props.character}</p>
    </div>
  );
};

export default char;
