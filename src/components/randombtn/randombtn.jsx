import React from "react";

const RandomBtn = (props) => {
  return (
    <button onClick={props.onclick}  id="ranodm-btn">
      Generate
    </button>
  );
};

export default RandomBtn;
