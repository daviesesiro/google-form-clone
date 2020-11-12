import React from "react";

const spinnerStyles = {
  border: "4px solid #4f8dde",
  borderTop: "4px solid white",
  animation: "spin 1s linear infinite",
  width: "20px",
  height: "20px",
  padding: "6px",
  display: "inline-block",
  borderRadius: "100%"
};

const Spinner = () => {
  return <span style={spinnerStyles}></span>;
};

export default Spinner;
