import { useState } from "react";
import Login from "@features/auth/components/loginComponents/Login";
import Register from "@features/auth/components/registerComponents/Register";

const Auth = ({ initialView = "login" }) => {
  // view can be either 'login' or 'register'
  const [view, setView] = useState(initialView);

  return (
    <div className="px-6 sm:px-0  py-10 min-h-screen w-full place-content-center place-items-center">
      {view === "login" ? (
        <Login onNavigate={() => setView("register")} />
      ) : (
        <Register onNavigate={() => setView("login")} />
      )}
    </div>
  );
};

export default Auth;
