import React from "react";
import Style from "./Button.module.css";

//here we get 2 props , the name and function we add on button
const Button = ({ btnName, handleClick }) => {
  return (
    <div className={Style.box}>
      <button className={Style.button} onClick={() => handleClick()}>
        {/* passing the button name */}
        {btnName}
      </button>
    </div>
  );
};

export default Button;
