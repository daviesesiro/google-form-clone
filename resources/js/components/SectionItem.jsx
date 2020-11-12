import React from "react";

const SectionItem = ({
  title,
  id,
  description,
  position,
  length,
  handleSectionChange,
  handleAddQuestion
}) => {
  const textAreaRef = React.useRef(null);
  const [showBar, setShowBar] = React.useState(false);
  return (
    <section
      onFocus={() => setShowBar(true)}
      onBlur={() => setShowBar(false)}
      className="mt-10 p-5 md:p-0 max-w-4xl relative section bg-wh mx-auto"
    >
      <div className="bg-transparent">
        <p
          className="bg-forms-color-100 w-32 rounded-t-md p-1 text-base inline-block text-white text-center"
          role="heading"
        >
          section {position + 1} of {length}
        </p>
      </div>
      {position + 1 === 1 && (
        <span className="bg-forms-color-100 h-3 rounded-tr-md block" />
      )}
      <div className="rounded-b-md shadow-md bg-white relative">
        <span
          className={`h-full w-2 block absolute left-0 top-0  rounded-bl-md ease-in-out transition-all ${
            !showBar ? "bg-none" : "bg-google-blue-100"
          }`}
        />

        <div className=" w-full py-4 px-6">
          <textarea
            onChange={e => handleSectionChange(e, id)}
            name="title"
            value={title}
            ref={textAreaRef}
            autoFocus
            placeholder="Form title"
            className="w-full mt-4 outline-none mb-2 text-3xl h-12 overflow-y-visible flex-grow break-words border-b-2 border-gray-300 focus:border-forms-color-100 "
          />
          <br />
          <input
            name="description"
            value={description}
            onChange={e => handleSectionChange(e, id)}
            placeholder="Form description"
            className="w-full border-b-2 outline-none border-gray-400 mb-8  focus:border-forms-color-100 "
          />
          <button
            onClick={handleAddQuestion}
            className="flex items-center mb-2 text-gray-600 outline-none focus:outline-none hover:bg-gray-200 rounded-sm p-2 transition-all duration-200 ease-out "
          >
            <span
              style={{ borderWidth: 3 }}
              className="rounded-full outline-none focus:outline-none w-6 h-6 text-2xl flex items-center justify-center mr-2 font-semibold text-gray-600  border-gray-600"
            >
              +
            </span>
            Add question
          </button>
        </div>
      </div>
    </section>
  );
};

export default SectionItem;
