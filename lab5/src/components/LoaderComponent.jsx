import React from "react";
import { FallingLines } from "react-loader-spinner";

const Loader = () => {
  return (
    <FallingLines
      color="grey"
      width="100"
      visible={true}
      ariaLabel="falling-circles-loading"
    />
  );
};

const LoaderComponent = ({ loading, children }) => {
  return (
    <>
      {loading && <Loader />}
      {children}
    </>
  );
};

export default LoaderComponent;
