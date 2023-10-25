import React from "react";
import HashLoader from "react-spinners/HashLoader";
const Spinner = () => {
  return (
    <div className="flex h-full w-full items-center justify-center bg-slate-900">
      <HashLoader color="white" />
    </div>
  );
};

export default Spinner;
