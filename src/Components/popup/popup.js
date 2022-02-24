import React from "react";
import "./popup.css";
export default function Pop(props) {
  return (
    <div>
      <div className="popOverlay"></div>
      <div className="poprestbody">
        <div className="popObject">
          <div className="popObjectclose" onClick={props.callParent}>
            ⤬
          </div>
          <span className="popTxt">Hello</span>
        </div>
      </div>
    </div>
  );
}
