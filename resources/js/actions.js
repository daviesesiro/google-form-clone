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
} from "./actionTypes";

export const onFormTitleChange = value => ({
  type: ONFORMTITLECHANGE,
  payload: value
});

//SECTION ACTIONS
export const onSectionChange = (sectionId, { name, value }) => ({
  type: ONSECTIONCHANGE,
  payload: { sectionId, name, value }
});

export const onSectionAdd = () => ({
  type: ONSECTIONADD
});

export const onSectionRemove = sectionId => ({
  type: ONSECTIONREMOVE,
  payload: sectionId
});

export const onQuestionAdd = sectionId => ({
  type: ONQUESTIONADD,
  payload: sectionId
});

export const onQuestionChange = (questionId, { name, value }) => ({
  type: ONQUESTIONCHNAGE,
  payload: { questionId, name, value }
});

export const onQuestionRemove = questionId => ({
  type: ONQUESTIONREMOVE,
  payload: questionId
});

export const onOptionAdd = questionId => ({
  type: ONOPTIONADD,
  payload: questionId
});

export const onOptionChange = (optionId, { name, value }) => ({
  type: ONOPTIONCHNAGE,
  payload: { optionId, name, value }
});

export const onOptionRemove = optionId => ({
  type: ONOPTIONREMOVE,
  payload: optionId
});

// export const onFormSubmit = () => ({
//   type: ONFORMSUBMIT
// });
