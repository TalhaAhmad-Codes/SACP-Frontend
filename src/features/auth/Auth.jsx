import { useState } from "react";
import Login from "@features/auth/components/loginComponents/Login";
import Register from "@features/auth/components/registerComponents/Register";

const Auth = ({ initialView = "login" }) => {
  // view can be either 'login' or 'register'
  const [view, setView] = useState(initialView);

  return (
    <div className="max-h-screen w-full bg-Page-background">
      {view === "login" ? (
        <Login onNavigate={() => setView("register")} />
      ) : (
        <Register onNavigate={() => setView("login")} />
      )}
    </div>
  );
};

export default Auth;
