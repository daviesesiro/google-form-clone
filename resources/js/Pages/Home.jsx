import React from "react";
import Layout from "@/components/Layout";
import { InertiaLink } from "@inertiajs/inertia-react";

const Home = () => {
  return (
    <Layout page="Home">
      <div className="relative bg-home-banner h-screen bg-no-repeat bg-cover bg-top pt-10">
        <div className="absolute w-full h-full top-0 items-center justify-center flex flex-col">
          <div className="flex flex-row relative mt-40">
            <h1 className="text-white text-6xl font-thin ">
              Create beautiful forms
            </h1>
            <span className="bg-yellow-500 w-1 h-32 mb-4 absolute -right-10 -bottom-10 inline-block ">
              <span className="bg-yellow-500 p-2 text-white text-2xl -left-10 absolute font-bold">
                Davies
              </span>
            </span>
          </div>
          <div className="flex flex-row mt-4">
            <div className="max-w-md bg-white bg-opacity-75 p-8 mr-2 rounded-2xl">
              <h2 className="text-center font-thin text-3xl text-gray-700">
                Personal
              </h2>
              <img
                className="mx-auto my-6 h-16"
                src="https://www.gstatic.com/images/branding/product/1x/forms_48dp.png"
              />

              <p className="text-center">
                Collect and organise information big and small with Google
                Forms. Free of charge.
              </p>
              <InertiaLink
                href="/form"
                className="bg-blue-600 py-5 text-center mx-auto text-white block w-48 mt-8 font-bold"
              >
                Go to Google forms
              </InertiaLink>
            </div>
            <div className="max-w-md bg-white bg-opacity-75 p-8 ml-2 rounded-2xl">
              <h2 className="text-center font-thin text-3xl text-gray-700">
                Business
              </h2>
              <img
                className="mx-auto my-6 w-3/4 h-16"
                src="../gsuite-logo-hh.svg"
              />

              <p className="text-center">
                The Google Forms you love with added security and control for
                teams.
              </p>
              <InertiaLink
                href="#"
                className="bg-blue-600 py-5 text-center mx-auto text-white block w-48 mt-8 font-bold "
              >
                Learn more
              </InertiaLink>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
