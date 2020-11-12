import React, { useState } from "react";

export const FormInput = ({ label, id, className, errors, ...otherProps }) => {
  const [showingPassword, setshowingPassword] = useState(false);

  let error = "";

  if (errors) {
    error = errors[id];
  }

  if (otherProps.type === "checkbox") {
    return (
      <div className="flex items-center justify-start">
        <label htmlFor={id} className="font-semibold">
          {label}
        </label>
        <Input id={id} className="ml-2" {...otherProps} />
      </div>
    );
  }

  return (
    <React.Fragment>
      <label htmlFor={id} className="font-semibold">
        {label}
      </label>
      <br />
      <div className="relative">
        {otherProps.type === "password" ? (
          <React.Fragment>
            <p
              onClick={() => setshowingPassword(prev => !prev)}
              className="absolute top-10 text-gray-600  translate-y-4 right-10 cursor-pointer"
            >
              {showingPassword ? "hide" : "show"}
            </p>
            <Input
              {...otherProps}
              id={id}
              type={showingPassword ? "text" : "password"}
              className={`${className}`}
            />
          </React.Fragment>
        ) : (
          <Input id={id} {...otherProps} className={`${className}`} />
        )}
      </div>

      <p className="text-xs mt-1 text-red-800">{error}</p>
      <br />
    </React.Fragment>
  );
};

const Input = ({ id, className, ...otherProps }) => {
  return (
    <input
      id={id}
      {...otherProps}
      className={`border border-gray-300 rounded-sm focus:outline-none focus:shadow-outline active:google-blue  ${className}`}
    />
  );
};
