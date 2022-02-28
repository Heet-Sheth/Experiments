import React from "react";
import updatedComponent from "./index.js";
import "./ClickCounter.css";
function ClickCounter(props) {
  const { name, title, count, incrementCount } = props;
  return (
    <div className="Container">
      <h3>{name}</h3>
      <h1>{title}</h1>
      <input type="text" value={count} disabled />
      <div className="innerContainer">
        <button title="Decrement" onClick={() => incrementCount(-1)}>
          &lt;
        </button>
        <button title="Increment" onClick={() => incrementCount(1)}>
          &gt;
        </button>
        <button title="Reset" onClick={() => incrementCount(0)}>
          ↺
        </button>
      </div>
    </div>
  );
}

export default updatedComponent(ClickCounter);
