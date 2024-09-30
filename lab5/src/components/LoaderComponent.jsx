import React from "react";
import { FallingLines } from "react-loader-spinner";

const LoaderComponent = ({ loading, children }) => {
  if (loading) {
    return (
      <FallingLines
        color="grey"
        width="100"
        visible={true}
        ariaLabel="falling-circles-loading"
      />
    );
  }
  return <>{children}</>;
};

export default LoaderComponent;
