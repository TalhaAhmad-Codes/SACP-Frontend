import { useState } from "react";
import Login from "@features/auth/components/loginComponents/Login";
import Register from "@features/auth/components/registerComponents/Register";
import DotGrid from "@shared/components/DotGrid";

const Auth = ({ initialView = "login" }) => {
  // view can be either 'login' or 'register'
  const [view, setView] = useState(initialView);

  return (
    /* 1. Added 'relative' to the screen container to anchor absolute children */
    <div className="relative px-6 sm:px-0 py-10 min-h-screen w-full flex flex-col justify-center items-center overflow-hidden app">
      
      {/* 2. Absolute Background Layer: Fits the entire viewport safely behind the forms */}
      <div className="hidden sm:block absolute inset-0 z-0 pointer-events-none">
        <DotGrid
          dotSize={3}
          gap={15}
          baseColor="#dad7e2"
          activeColor="#522711"
          proximity={90}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>

      {/* 3. Foreground Content Layer: Pushed on top with z-10 */}
      <div className="relative z-10 w-full flex justify-center items-center">
        {view === "login" ? (
          <Login onNavigate={() => setView("register")} />
        ) : (
          <Register onNavigate={() => setView("login")} />
        )}
      </div>
    </div>
  );
};

export default Auth;