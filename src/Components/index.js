import React, { useState } from "react";

const UpdatedComponent = (OriginalComponent) => {
  function NewComponent(props) {
    const [count, setCount] = useState(0);
    const incrementCount = (abc) => {
      setCount(abc === 0 ? 0 : count + abc);
    };
    return (
      <OriginalComponent
        title="Counter"
        count={count}
        incrementCount={incrementCount}
      />
    );
  }

  return NewComponent;
};

export default UpdatedComponent;
