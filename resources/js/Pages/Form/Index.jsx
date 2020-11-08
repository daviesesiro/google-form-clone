import React from "react";
import Layout from "@/components/Layout";
import { InertiaLink } from "@inertiajs/inertia-react";

const FormIndex = () => {
  return (
    <Layout page="Dashboard">
      <section className="mt-20 px-32 py-5 bg-gray-200">
        <div className="container">
          <h1>Start a new form</h1>
          <InertiaLink href="form">
            <img
              src="https://ssl.gstatic.com/docs/templates/thumbnails/forms-blank-googlecolors.png"
              aria-describedby="blank_form"
              className="h-32 w-48 rounded-sm border bg-white mt-6 hover:border-purple-800"
            />
          </InertiaLink>
          <p
            id="blank_form"
            className="font-semibold text-gray-800 text-sm mt-2"
          >
            Blank
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default FormIndex;
