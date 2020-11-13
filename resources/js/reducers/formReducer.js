import {
  ONFORMTITLECHANGE,
  ONOPTIONADD,
  ONOPTIONCHNAGE,
  ONOPTIONREMOVE,
  ONQUESTIONADD,
  ONQUESTIONCHNAGE,
  ONQUESTIONREMOVE,
  ONSECTIONADD,
  ONSECTIONCHANGE,
  ONSECTIONREMOVE
} from "../actionTypes";
import { v4 as uuid } from "uuid";
import { removeSection, removeItem, removeOptions } from "./utils";

const formReducer = (state, action) => {
  const { sections, questions, options } = state;
  let name, value;
  if (action && action.payload && action.payload.name && action.payload.value) {
    name = action.payload.name;
    value = action.payload.value;
  }
  switch (action.type) {
    case ONFORMTITLECHANGE:
      return {
        ...state,
        title: action.payload
      };

    case ONSECTIONCHANGE:
      const { sectionId } = action.payload;
      return {
        ...state,
        sections: sections.map(section =>
          section.id === sectionId ? { ...section, [name]: value } : section
        )
      };
    case ONSECTIONADD:
      return {
        ...state,
        sections: [
          ...sections,
          { id: uuid(), title: "Untitled Section", description: "" }
        ]
      };
    case ONSECTIONREMOVE:
      let questionIds = [];
      return {
        ...state,
        sections: removeSection(sections, action.payload),
        questions: questions.filter(question => {
          if (question.sectionId === action.payload) {
            questionIds.push(question.id);
          }
          return question.sectionId !== action.payload;
        }),
        options: removeOptions(options, questionIds)
      };
    case ONQUESTIONADD:
      return {
        ...state,
        questions: [
          ...questions,
          { sectionId: action.payload, id: uuid(), question: "" }
        ]
      };
    case ONQUESTIONCHNAGE:
      const { questionId } = action.payload;
      return {
        ...state,
        questions: questions.map(question =>
          question.id === questionId ? { ...question, [name]: value } : question
        )
      };
    case ONQUESTIONREMOVE:
      return {
        ...state,
        questions: removeItem(questions, action.payload),
        options: removeOptions(options, [action.payload])
      };
    case ONOPTIONADD:
      return {
        ...state,
        options: [
          ...options,
          { questionId: action.payload, id: uuid(), option: "" }
        ]
      };
    case ONOPTIONCHNAGE:
      const { optionId } = action.payload;
      return {
        ...state,
        options: options.map(option =>
          option.id === optionId ? { ...option, [name]: value } : option
        )
      };

    case ONOPTIONREMOVE:
      return {
        ...state,
        options: removeItem(options, action.payload)
      };
    default:
      return state;
  }
};

export default formReducer;
