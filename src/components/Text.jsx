import React, { memo } from "react";
//memo: it is avoiding unnecessary render of the code when the values of the props are not changing. 
const Text = memo((props) => {
  const { children } = props;
  console.log(children);
  return <div>{children}</div>;
});

export default Text;
