import React from "react";
import { FallingLines } from "react-loader-spinner";

const LoaderComponent = () => {
  return (
    <FallingLines
      color="grey"
      width="100"
      visible={true}
      ariaLabel="falling-circles-loading"
    />
  );
};

export default LoaderComponent;
