import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import("@features/landing-page/pages/HomePage"));
const AboutPage = lazy(() => import("@features/landing-page/pages/AboutPage"));
const ContactPage = lazy(() => import("@features/landing-page/pages/ContactPage"));
const Auth = lazy(() => import("@features/auth/Auth"));

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Suspense fallback={
          <div className="min-h-screen flex items-center justify-center text-base text-gray-600">
            Loading...
          </div>
        }>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<Auth initialView={"login"} />} />
            <Route path="/signup" element={<Auth initialView={"register"} />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
};

export default App;