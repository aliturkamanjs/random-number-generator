import React from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toast = () => {
  const notify = () => toast.error("Enter a number !");

  notify();

  return (
    <div>
      <ToastContainer />
    </div>
  );
};

export default Toast;
