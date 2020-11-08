import React from "react";
import Helmet from "react-helmet";

const Layout = ({ children, page, title = "Google Forms Clone" }) => {
  return (
    <>
      <Helmet>
        <title>
          {page} | {title}
        </title>
      </Helmet>
      <header className="flex p-2 font-sans items-center fixed bg-white z-10 top-0 right-0 left-0">
        <div className="flex items-center ml-4">
          <img
            src="https://www.gstatic.com/images/branding/product/1x/forms_48dp.png"
            className="w-12"
          />
          <span className="text-xl text-gray-700 ml-2">Forms</span>
        </div>
        <div className="ml-auto mr-4 w-10 h-10 rounded-full flex items-center justify-center bg-purple-700 text-bold text-white font-bold">
          DE
        </div>
      </header>
      <main className="min-h-full">{children}</main>
    </>
  );
};

export default Layout;
