import React, { useState, useRef, useEffect } from "react";
import { v4 as uuid } from "uuid";
import { Inertia } from "@inertiajs/inertia";

import { FormInput } from "@/components/FormInput";
import Layout from "@/components/Layout";
import SectionItem from "../../components/SectionItem";
import QuestionItem from "../../components/QuestionItem";
import OptionItem from "../../components/OptionItem";

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

  const handleAddOption = questionId => {
    setOptions(prev => [
      ...prev,
      { questionId, id: uuid(), option: "Option " + (prev.length + 1) }
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

  const handleSectionSubmit = () => {
    Inertia.post(route("form.store"), { sections, questions, options });
  };
  return (
    <Layout form={{ title, setTitle }} page="Create Form" bg="#f0ebf8">
      <section className="mt-16">
        <button className="bg-red-300" onClick={handleSectionSubmit}>
          submit
        </button>
        <button className="bg-red-300" onClick={handleAddSection}>
          Add new section
        </button>
        {sections.map((section, Sidx) => (
          <div className="mx-auto" key={`section${section.id}`}>
            <SectionItem
              {...section}
              handleSectionChange={handleSectionChange}
              handleAddQuestion={() => handleAddQuestion(section.id)}
              position={Sidx}
              length={sections.length}
            />

            {questions.map(
              (question, Qidx) =>
                section.id === question.sectionId && (
                  <QuestionItem
                    handleQuestionChange={handleQuestionChange}
                    handleAddOption={() => handleAddOption(question.id)}
                    {...question}
                    key={`question${question.id}`}
                  >
                    {options.map(
                      (option, Oidx) =>
                        question.id === option.questionId && (
                          <OptionItem
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
