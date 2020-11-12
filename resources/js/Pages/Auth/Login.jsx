import React, { useState } from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import { Button } from "@/components/Button";
import { FormInput } from "@/components/FormInput";
import { Inertia } from "@inertiajs/inertia";

const Login = ({ errors }) => {
  const [credentails, setCredentials] = useState({
    email: "",
    password: "",
    remember: false
  });

  const [loading, setLoading] = useState(false);

  const handleInputChange = e => {
    const { id, value } = e.target;

    if (id !== "remember") {
      setCredentials(prev => ({ ...prev, [id]: value }));
    } else {
      setCredentials(prev => ({ ...prev, [id]: !prev.remember }));
    }
  };

  Inertia.on("error", event => {
    setLoading(false);
  });

  const handleFormSubmit = e => {
    e.preventDefault();
    setLoading(true);
    Inertia.post(route("login.attempt"), credentails).then(() =>
      setLoading(false)
    );
  };
  return (
    <section className="h-screen flex items-center justify-center">
      <div className="p-8 border rounded-md w-full h-full sm:h-auto sm:w-form-width ">
        <div className="mb-5 text">
          <img className="mx-auto" src="../google-logo.svg" />
        </div>
        <h1 className="mb-4 text-center text-xl text-gray-800 font-semibold">
          Sign in
        </h1>
        <h2 className="mb-5 text-center">Continue to Forms</h2>
        <form onSubmit={handleFormSubmit}>
          <FormInput
            label="Email"
            id="email"
            type="email"
            value={credentails.email}
            className="p-3 w-full"
            onChange={handleInputChange}
            errors={errors}
          />
          <FormInput
            label="Password"
            id="password"
            type="password"
            value={credentails.password}
            onChange={handleInputChange}
            className="p-3 w-full"
            errors={errors}
          />
          <FormInput
            label="Remember me"
            id="remember"
            type="checkbox"
            checked={credentails.remember}
            onChange={handleInputChange}
            className="p-3 text-left"
            errors={errors}
          />
          <br />
          <div className="flex justify-between items-center">
            <InertiaLink
              href="register"
              className="text-google-blue-100 text-sm hover:text-google-blue-200 font-semibold"
            >
              Create account
            </InertiaLink>
            <Button loading={loading} className="text-white w-24">
              Sign in
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
