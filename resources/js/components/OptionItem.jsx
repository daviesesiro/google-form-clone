import React from "react";
import CloseIcon from "@/components/CloseIcon";

const OptionItem = ({ option, handleOptionChange, id }) => {
  return (
    <div className=" w-full flex items-center justify-start">
      <span className="rounded-full w-5 h-5 border-2 border-gray-200 mr-1" />
      <input
        autoFocus
        name="option"
        value={option}
        onChange={e => handleOptionChange(e, id)}
        placeholder="Option"
        className="outline-none p-2 my-1 text-base rounded-t-sm flex-grow border-b-2 border-white hover:border-gray-300 focus:border-b-2 focus:border-forms-color-100 "
      />
      <span
        title="Remove option"
        className="p-2 inline-block hover:bg-gray-200 rounded-full duration-200 ease-in-out"
      >
        <CloseIcon />
      </span>
    </div>
  );
};

export default OptionItem;
