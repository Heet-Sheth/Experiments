import React from "react";
import "./popup.css";
function Pop(props) {
  return (
    <div>
      <div className="popOverlay"></div>
      <div className="poprestbody">
        <div className="popObject">
          <div className="popObjectclose" onClick={props.callParent}>
            x
          </div>
          <span className="popTxt">Hello</span>
        </div>
      </div>
    </div>
  );
}

export default Pop;
