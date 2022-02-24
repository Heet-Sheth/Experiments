import React, { useState } from "react";
import Pop from "./popup/popup.js";
import "./index.css";
function HomePage() {
  const [pop, showPop] = useState(false);
  const togglePop = () => {
    showPop(!pop);
  };
  return (
    <div>
      <div className="indexrestBody">
        <div className="indexblocks">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
          section 1.10.32.
        </div>
        <div className="indexButton" onClick={() => togglePop()}>
          <span className="indexbtnTxt">+</span>
        </div>
      </div>
      <div className="indexdialogs">
        {pop ? <Pop callParent={togglePop} /> : null}
      </div>
    </div>
  );
}

export default HomePage;
