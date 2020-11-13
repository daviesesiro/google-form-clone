import { usePage, InertiaLink } from "@inertiajs/inertia-react";
import React from "react";
import Helmet from "react-helmet";
import { Button } from "@/components/Button";

const Layout = ({ children, page, title = "Google Forms Clone", bg, form }) => {
  const { user } = usePage().props;
  return (
    <>
      <Helmet>
        <title>
          {page} | {title}
        </title>
      </Helmet>
      <header className="flex p-2 items-center fixed bg-white z-10 top-0 right-0 left-0">
        <div className="flex items-end ml-4">
          <InertiaLink className="flex items-center mr-4" href={route("home")}>
            <img
              src="https://www.gstatic.com/images/branding/product/1x/forms_48dp.png"
              className="w-12"
            />
            {!form && <span className="text-xl text-gray-700 ml-2">Forms</span>}
          </InertiaLink>
          {form && (
            <input
              style={{ borderBottomWidth: 3 }}
              className="border-forms-color-200 outline-none focus:outline-none"
              value={form.title}
              onChange={e => form.setTitle(e.target.value)}
            />
          )}
        </div>
        {user ? (
          <div className="ml-auto flex items-center">
            {form && (
              <button
                className="bg-forms-color-100 text-white py-2 px-4 rounded-md font-bold text-sm"
                onClick={form.handleSectionSubmit}
              >
                submit
              </button>
            )}
            <div className=" mr-4 ml-5 w-10 h-10 rounded-full flex items-center justify-center bg-purple-700 text-bold text-white font-bold">
              {user.initials}
            </div>
          </div>
        ) : (
          <InertiaLink
            className="ml-auto mr-4 text-white font-bold"
            href={route("login")}
          >
            <Button>Login</Button>
          </InertiaLink>
        )}
      </header>
      <main className="min-h-screen antialiased " style={{ background: bg }}>
        {children}
      </main>
    </>
  );
};

export default Layout;
