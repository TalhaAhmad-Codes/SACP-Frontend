import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "@/features/landing-page/pages/HomePage";
import AboutPage from "@/features/landing-page/pages/AboutPage";
import ContactPage from "@/features/landing-page/pages/ContactPage";
import Auth from "@/features/auth/Auth";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<Auth initialView={"login"} />} />
        <Route path="/signup" element={<Auth initialView={"register"} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;