import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import { Inertia } from "@inertiajs/inertia";

import Layout from "@/components/Layout";
import SectionItem from "@/components/SectionItem";
import QuestionItem from "@/components/QuestionItem";
import OptionItem from "@/components/OptionItem";

const CreateForm = () => {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    handleAddSection();
  }, []);
  const [title, setTitle] = useState("Untitled form");

  const [options, setOptions] = useState([]);
  const [questions, setQuestions] = useState([]);

  // fucntions
  const handleAddSection = () => {
    const sectionTitle = sections.length === 0 ? title : "Untitled Section";
    setSections(prev => [
      ...prev,
      {
        id: uuid(),
        title: sectionTitle,
        description: ""
      }
    ]);
  };

  const handleSectionChange = (e, sectionId) => {
    const { name, value } = e.target;

    setSections(prev =>
      prev.map(section =>
        section.id === sectionId ? { ...section, [name]: value } : section
      )
    );
  };

  const handleSectionRemove = sectionId => {
    setSections(prev => prev.filter(section => section.id !== sectionId));
    setQuestions(prev =>
      prev.filter(question => {
        if (question.sectionId === sectionId) {
          setOptions(prev =>
            prev.filter(option => option.questionId !== question.id)
          );
        }
        return question.sectionId !== sectionId;
      })
    );
  };

  const handleAddQuestion = sectionId => {
    const id = uuid();
    setQuestions(prev => [...prev, { sectionId, id, question: "" }]);
    handleAddOption(id);
  };

  const handleQuestionChange = (e, questionId) => {
    const { name, value } = e.target;
    setQuestions(prev =>
      prev.map(question =>
        question.id === questionId ? { ...question, [name]: value } : question
      )
    );
  };

  const handleQuestionRemove = questionId => {
    setQuestions(prev =>
      prev.filter(question => {
        if (question.id === questionId) {
          setOptions(prev =>
            prev.filter(option => option.questionId !== questionId)
          );
        }
        return question.id !== questionId;
      })
    );
  };

  const handleAddOption = questionId => {
    const questionOptionCount = options.filter(
      option => option.questionId == questionId
    ).length;
    setOptions(prev => [
      ...prev,
      { questionId, id: uuid(), option: "Option " + (questionOptionCount + 1) }
    ]);
  };

  const handleOptionChange = (e, optionId) => {
    const { name, value } = e.target;
    setOptions(prev =>
      prev.map(option =>
        option.id === optionId ? { ...option, [name]: value } : option
      )
    );
  };

  const handleOptionRemove = optionId => {
    setOptions(prev => prev.filter(option => option.id !== optionId));
  };

  const handleSectionSubmit = () => {
    Inertia.post(route("form.store"), { sections, questions, options });
  };

  return (
    <Layout
      form={{ title, setTitle, handleSectionSubmit }}
      page="Create Form"
      bg="#f0ebf8"
    >
      <section className="py-16">
        {sections.map((section, Sidx) => (
          <div
            className="mx-auto  max-w-3xl md:p-0 p-5 "
            key={`section${section.id}`}
          >
            <SectionItem
              {...section}
              handleSectionChange={handleSectionChange}
              handleAddQuestion={() => handleAddQuestion(section.id)}
              handleSectionRemove={() => handleSectionRemove(section.id)}
              handleAddSection={handleAddSection}
              position={Sidx}
              length={sections.length}
            />

            {questions.map(
              (question, Qidx) =>
                section.id === question.sectionId && (
                  <QuestionItem
                    handleQuestionChange={handleQuestionChange}
                    handleQuestionRemove={() =>
                      handleQuestionRemove(question.id)
                    }
                    handleAddOption={() => handleAddOption(question.id)}
                    {...question}
                    key={`question${question.id}`}
                  >
                    {options.map(
                      (option, Oidx) =>
                        question.id === option.questionId && (
                          <OptionItem
                            handleOptionRemove={handleOptionRemove}
                            handleOptionChange={handleOptionChange}
                            key={`option${Oidx}`}
                            {...option}
                          />
                        )
                    )}
                  </QuestionItem>
                )
            )}
          </div>
        ))}
      </section>
    </Layout>
  );
};

export default CreateForm;
