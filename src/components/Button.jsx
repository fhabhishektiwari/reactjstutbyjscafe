import React from "react";

const Button = (props) => {
  console.log(props);
  const { children, clickAction, data } = props;
  const handleClick = () => {
    clickAction?.();
    // console.log("Clicked me");
  };
  return (
    <button onClick={handleClick}>
      {children}+{data?.a?.b?.c}
    </button>
  );
};

export default Button;
