import React from "react";
import { PlusIcon, TrashIcon } from "@/components/Icons";
import { SectionIcon } from "./Icons";

const SectionItem = ({
  title,
  id,
  description,
  position,
  length,
  handleSectionChange,
  handleAddQuestion,
  handleSectionRemove,
  handleAddSection
}) => {
  const textAreaRef = React.useRef(null);
  const [showBar, setShowBar] = React.useState(false);
  return (
    <section
      onFocus={() => setShowBar(true)}
      onBlur={() => setShowBar(false)}
      className="mt-10 relative section bg-wh mx-auto"
    >
      <div className="bg-transparent">
        {length > 1 && (
          <p
            className="bg-forms-color-100 w-32 rounded-t-md p-1 text-base inline-block text-white text-center"
            role="heading"
          >
            section {position + 1} of {length}
          </p>
        )}
      </div>
      {position + 1 === 1 && (
        <span
          className={`bg-forms-color-100 h-3 ${
            length > 1 ? "rounded-tr-md" : "rounded-t-md"
          } block`}
        />
      )}
      <div
        className={`${
          position + 1 === 1 ? "" : "rounded-md"
        } rounded-b-md shadow-md bg-white relative`}
      >
        <span
          className={`h-full w-2 block absolute left-0 top-0  rounded-bl-md ease-in-out transition-all ${
            !showBar ? "bg-none" : "bg-google-blue-100"
          }`}
        />

        <div className=" w-full py-4 px-6">
          <div className="flex items-center justify-between">
            <div className="input-animA input-animB mt-4 h-auto w-4/5">
              <textarea
                required
                onChange={e => handleSectionChange(e, id)}
                name="title"
                value={title}
                ref={textAreaRef}
                autoFocus
                autoComplete="off"
                placeholder="Form title"
                className="w-full outline-none text-3xl text-black section-title overflow-y-visible flex-grow"
              />
            </div>
            <div>
              {length > 1 && (
                <button
                  onClick={handleSectionRemove}
                  title="Delete section"
                  className="ml-5 p-2 outline-none focus:outline-none hover:bg-gray-200 rounded-full duration-200 ease-in-out"
                >
                  <TrashIcon />
                </button>
              )}

              <button
                onClick={handleAddSection}
                title="New section"
                className="p-2 outline-none focus:outline-none hover:bg-gray-200 rounded-full duration-200 ease-in-out"
              >
                <SectionIcon />
              </button>
            </div>
          </div>
          <div className="input-animA input-animB  w-full mt-4 mb-8">
            <input
              autoComplete="off"
              name="description"
              value={description}
              onChange={e => handleSectionChange(e, id)}
              placeholder="Form description"
              className="w-full outline-none p-1 text-black"
              required
            />
          </div>
          <button
            onClick={handleAddQuestion}
            className="flex items-center mb-2 text-gray-600 outline-none focus:outline-none hover:bg-gray-200 rounded-sm p-2 transition-all duration-200 ease-out "
          >
            <PlusIcon className="mr-2" />
            Add question
          </button>
        </div>
      </div>
    </section>
  );
};

export default SectionItem;
