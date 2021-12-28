import React, { useState } from "react";

const withArray = (WrappedComponent, arr) => {
  return (props) => {
    const [counter, setCounter] = useState(arr[0]);
    const [initialArr, setInitialArr] = useState(arr);
    const increaseCountHandler = () => {
      setCounter((prevState) => prevState + 1);
      setInitialArr((prevState) => [...prevState, counter + 1]);
    };

    return (
      <div>
        <WrappedComponent
          updatedArr={initialArr}
          increase={increaseCountHandler}
        />
      </div>
    );
  };
};

export default withArray;
