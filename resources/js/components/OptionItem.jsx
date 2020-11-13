import React from "react";
import { CloseIcon } from "@/components/Icons";
import { onOptionChange, onOptionRemove } from "../actions";

const OptionItem = ({ option, dispatch, handleOptionRemove, id }) => {
  return (
    <div className=" w-full flex items-center justify-start">
      <span className="rounded-full w-5 h-5 border-2 border-gray-200 mr-1" />
      <div className="input-animA w-full border-b-2 border-white hover:border-gray-200 focus-within:border-white">
        <input
          autoFocus
          name="option"
          value={option}
          onChange={e => dispatch(onOptionChange(id, e.target))}
          placeholder="Option"
          className="outline-none p-2 my-1 text-black w-full text-base rounded-t-sm"
        />
      </div>
      <button
        onClick={() => dispatch(onOptionRemove(id))}
        title="Remove option"
        className="p-2 outline-none focus:outline-none inline-block hover:bg-gray-200 rounded-full duration-200 ease-in-out"
      >
        <CloseIcon />
      </button>
    </div>
  );
};

export default OptionItem;
