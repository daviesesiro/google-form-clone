export function removeSection(sections, sectionId) {
  const sectionIndex = sections.findIndex(section => section.id === sectionId);
  sections.splice(sectionIndex, 1);
  return sections;
}

export function removeItem(array, itemId) {
  const itemIdx = array.findIndex(item => item.id === itemId);
  array.splice(itemIdx, 1);
  return array;
}

export function removeOptions(options, arrayOfQuestionId) {
  return options.filter(
    option => !arrayOfQuestionId.includes(option.questionId)
  );
}
