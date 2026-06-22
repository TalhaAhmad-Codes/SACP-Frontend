import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion"; // Imported Framer Motion
import Button from "../../../../shared/components/Button";
import Student from "./Student";
import Faculty from "./Faculty";
import FormHeader from "../../../../shared/components/FormHeader";
import Admin from "./Admin"; 

const RightRegisterContent = ({ onNavigate }) => {
  const [activeRole, setActiveRole] = useState("Student"); 
  
  const { register, handleSubmit, setValue } = useForm({
    defaultValues: {
      role: "Student",
    }
  });

  useEffect(() => {
    setValue("role", activeRole);
  }, [activeRole, setValue]);

  const onSubmit = (data) => {
    console.log("Registered Form Data:", data); 
  };

  // Simplified: Extracted the active background styles out since motion handles it now
  const getButtonClass = (role) => {
    const baseClass = "relative z-10 w-full md:px-17 rounded-sm transition-colors duration-200 text-sm font-medium text-center p-2";
    const activeClass = "text-black";
    const inactiveClass = "text-gray-500 hover:text-gray-800 hover:font-bold text-center shrink-1 p-2";
    
    return `${baseClass} ${activeRole === role ? activeClass : inactiveClass}`;
  };

  const renderRoleFields = () => {
    // Wrapping each case in a motion element to handle slide/fade animations on change
    switch (activeRole) {
      case "Student":
        return (
          <motion.div
            key="student"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
          >
            <Student register={register} />
          </motion.div>
        );
      case "Faculty":
        return (
          <motion.div
            key="faculty"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
          >
            <Faculty register={register} />
          </motion.div>
        );
      case "Admin":
        return (
          <motion.div
            key="admin"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
          >
            <Admin register={register}/>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    // 1. Smoothly fade the entire view on page enter
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen w-full md:w-full flex flex-col "
    >
      <FormHeader/>
      <div className=" flex grow justify-center items-center font-login-page Login-Form-Container h-full bg-Page-background">
        <div className="w-full max-w-150 p-5">
          <h1 className="text-3xl md:text-4xl text-Login-Heading mb-2 font-bold leading-tight">
            Create an Account
          </h1> 
          
          <p className="text-sm md:text-xl text-Login-Text mb-6 font-semibold">
            Join the Smart Academic Communication Platform workspace.
          </p>

          <form className="box-border flex flex-col gap-1 w-full " onSubmit={handleSubmit(onSubmit)}>

            {/* Role Selection Tabs */}
            <div className="relative grid grid-cols-3 place-items-center bg-role-box border p-2 border-role-box-border rounded-md mb-1 md:p-0">
              
              {/* ADMIN BUTTON */}
              <button 
                type="button" 
                className={getButtonClass("Admin")} 
                onClick={() => setActiveRole("Admin")}
              >
                {activeRole === "Admin" && (
                  <motion.div 
                    layoutId="activeTabPill"
                    className="absolute inset-0 bg-white border border-role-box-border shadow-md rounded-sm -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                Admin
              </button>

              {/* FACULTY BUTTON */}
              <button 
                type="button" 
                className={getButtonClass("Faculty")} 
                onClick={() => setActiveRole("Faculty")}
              >
                {activeRole === "Faculty" && (
                  <motion.div 
                    layoutId="activeTabPill"
                    className="absolute inset-0 bg-white border border-role-box-border shadow-md rounded-sm -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                Faculty
              </button>

              {/* STUDENT BUTTON */}
              <button 
                type="button" 
                className={getButtonClass("Student")} 
                onClick={() => setActiveRole("Student")}
              >
                {activeRole === "Student" && (
                  <motion.div 
                    layoutId="activeTabPill"
                    className="absolute inset-0 bg-white border border-role-box-border shadow-md rounded-sm -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                Student
              </button>
            </div>

            {/* 2. AnimatePresence lets components animate out before a new one animates in */}
            <div className="overflow-hidden py-2">
              <AnimatePresence mode="wait">
                {renderRoleFields()}
              </AnimatePresence>
            </div>
  
            <Button label={`Create ${activeRole} Account`}/>
          </form>

          <p className="text-center mt-10 text-Login-Text text-sm">
            Already have an account?
            <span onClick={onNavigate} className="text-Login-Register-Link font-semibold ml-1 cursor-pointer hover:underline">
              Login here
            </span>
          </p>
        </div>
      </div>
        
    </motion.div>
  );
};

export default RightRegisterContent;