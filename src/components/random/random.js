import React, { createRef, useEffect, useState } from "react";

import { Input, Alert } from "@chakra-ui/react";

import RandomBtn from "../randombtn/randombtn";
import ShowRndomNumber from "../showRandomNumber/showRandomNumber";
import Toast from "../toast/toast";

const Random = () => {
  const [count, setCount] = useState(0);
  const [min, setMin] = useState(0);
  const [show, setShow] = useState(false);

  const inputRef = createRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const rendomBtnHandler = () => {
    setCount(Math.floor(Math.random() * min));
  };

  const setCouthandler = (e) => {
    setMin(e.target.value);
  };

  return (
    <div id="container">
      {min <= 1 ? <Toast /> : null}
      <ShowRndomNumber count={count} />
      <div>
        <Input
          ref={inputRef}
          onChange={setCouthandler}
          id="input"
          type="number"
        />
        <RandomBtn onclick={rendomBtnHandler} />
      </div>
    </div>
  );
};

export default Random;
