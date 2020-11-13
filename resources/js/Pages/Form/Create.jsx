import React, { useState, useEffect, useReducer } from "react";
import { v4 as uuid } from "uuid";
import { Inertia } from "@inertiajs/inertia";

import Layout from "@/components/Layout";
import SectionItem from "@/components/SectionItem";
import QuestionItem from "@/components/QuestionItem";
import OptionItem from "@/components/OptionItem";
import formReducer from "@/reducers/formReducer";

const CreateForm = () => {
  const [state, dispatch] = useReducer(
    formReducer,
    {
      title: "Untitled form",
      sections: [],
      questions: [],
      options: []
    },
    initialState => {
      return {
        ...initialState,
        sections: [
          {
            id: uuid(),
            title: "Untitled form",
            description: ""
          }
        ]
      };
    }
  );

  const handleSectionSubmit = () => {
    Inertia.post(route("form.store"), state);
  };

  return (
    <Layout
      form={{ title: state.title, dispatch }}
      page="Create Form"
      bg="#f0ebf8"
    >
      <section className="py-16">
        {state.sections.map((section, Sidx) => (
          <div
            className="mx-auto  max-w-3xl md:p-0 p-5 "
            key={`section${section.id}`}
          >
            <SectionItem
              {...section}
              dispatch={dispatch}
              position={Sidx}
              length={state.sections.length}
            />

            {state.questions.map(
              (question, Qidx) =>
                section.id === question.sectionId && (
                  <QuestionItem
                    dispatch={dispatch}
                    handleQuestionRemove={() =>
                      handleQuestionRemove(question.id)
                    }
                    {...question}
                    key={`question${question.id}`}
                  >
                    {state.options.map(
                      (option, Oidx) =>
                        question.id === option.questionId && (
                          <OptionItem
                            dispatch={dispatch}
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
