import React, { useState } from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import { Button } from "@/components/Button";
import { FormInput } from "@/components/FormInput";
import { Inertia } from "@inertiajs/inertia";

const Register = ({ errors }) => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    password_confirmation: "",
    name: ""
  });

  const [loading, setLoading] = useState(false);

  const handleInputChange = e => {
    const { id, value } = e.target;
    setCredentials(prev => ({ ...prev, [id]: value }));
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    setLoading(true);

    Inertia.post("register", credentials, {
      onSuccess: () => setLoading(false)
    });
  };
  return (
    <section className="h-screen flex items-center justify-center">
      <div className="p-8 border rounded-md w-full h-full sm:h-auto sm:w-form-width ">
        <div className="mb-5 text">
          <img className="mx-auto" src="../google-logo.svg" />
        </div>
        <h1 className="mb-4 text-center text-xl text-gray-800 font-semibold">
          Sign up
        </h1>
        <h2 className="mb-5 text-center">Create a Google forms account</h2>
        <form onSubmit={handleFormSubmit}>
          <FormInput
            label="Name"
            id="name"
            type="text"
            value={credentials.name}
            className="p-3 w-full"
            onChange={handleInputChange}
            errors={errors}
            placeholder="Johnny Smart"
          />
          <FormInput
            label="Email"
            id="email"
            type="email"
            value={credentials.email}
            className="p-3 w-full"
            onChange={handleInputChange}
            errors={errors}
            placeholder="johnnysmart@example.com"
          />
          <FormInput
            label="Password"
            id="password"
            type="password"
            value={credentials.password}
            onChange={handleInputChange}
            className="p-3 w-full"
            errors={errors}
          />
          <FormInput
            label="Confirm Password"
            id="password_confirmation"
            type="password"
            value={credentials["password_confirmation"]}
            onChange={handleInputChange}
            className="p-3 w-full"
            errors={errors}
          />
          <div className="flex justify-between text-sm items-center">
            <InertiaLink
              href="login"
              className="text-google-blue-100 hover:text-google-blue-200 font-semibold"
            >
              Sign in instead
            </InertiaLink>
            <Button loading={loading} className="text-white w-24">
              Sign up{" "}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Register;
