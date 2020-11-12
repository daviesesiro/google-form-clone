import React from "react";

import Spinner from "./Spinner";

export const Button = ({ children, loading = false, className }) => {
  return (
    <button
      disabled={loading}
      className={`${
        loading ? "cursor-not-allowed" : ""
      } relative bg-google-blue-100 p-2 align-middle rounded-sm focus:outline-none text-center block font-bold hover:bg-google-blue-200 active:bg-google-blue-300 ${className}`}
    >
      {loading ? <Spinner /> : children}
    </button>
  );
};
