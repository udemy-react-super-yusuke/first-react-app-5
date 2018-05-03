import React from "react";
import { render } from "react-dom";

// 関数
const returnReactElement = () => {
  return <h2>name</h2>;
};

// React Component にするには、
// 全く同じ内容のまま、冒頭を大文字にする
const ReturnReactElement = props => {
  return (
    <h2>
      {props.name} {props.music}
    </h2>
  );
};

const ReturnReactElement2 = ({ name, music }) => {
  return (
    <h2>
      {name} {music}
    </h2>
  );
};

render(
  <ReturnReactElement2 name="nakanishi" music="jazz" />,
  document.getElementById("root")
);
