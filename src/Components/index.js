import React, { useState } from "react";

const UpdatedComponent = (OriginalComponent) => {
  function NewComponent(props) {
    const [count, setCount] = useState(0);
    const incrementCount = (abc) => {
      setCount(abc === 0 ? 0 : count + abc);
    };
    return (
      <div>
        <OriginalComponent
          title="Counter"
          count={count}
          incrementCount={incrementCount}
          name={props.name}
        />
      </div>
    );
  }

  return NewComponent;
};

export default UpdatedComponent;
