import React from "react";

const QuestionItem = ({
  question,
  handleQuestionChange,
  id,
  children,
  handleAddOption
}) => {
  const textAreaRef = React.useRef(null);
  const [showBar, setShowBar] = React.useState(false);
  console.log(id);
  return (
    <div
      onFocus={() => setShowBar(true)}
      onBlur={() => setShowBar(false)}
      className="mt-4 rounded-md max-w-4xl relative section bg-wh mx-auto overflow-hidden"
    >
      <div className="rounded-md shadow-md bg-white relative">
        <span
          className={`h-full w-2 block absolute left-0 top-0  rounded-bl-md ease-in-out transition-all ${
            !showBar ? "bg-none" : "bg-google-blue-100"
          }`}
        />
        <div className=" w-full py-4 px-6">
          <input
            ref={textAreaRef}
            autoFocus
            name="question"
            value={question}
            onChange={e => handleQuestionChange(e, id)}
            placeholder="Question"
            className="mt-2 outline-none p-3 mb-2 text-base rounded-t-sm bg-gray-100 w-2/4 overflow-y-visible flex-grow border-b-2 border-gray-300 focus:border-forms-color-100 "
          />
          {children}
          <div className="flex items-center my-2 text-gray-600 outline-none">
            <span className="rounded-full w-5 h-5 border-2 border-gray-200 mr-1" />
            <button
              className="p-2 hover:bg-gray-200 rounded-sm"
              onClick={handleAddOption}
            >
              Add option
            </button>{" "}
            {/* &nbsp;or &nbsp;
            <button className="p-2 text-google-blue-100"> Add "Other"</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionItem;
