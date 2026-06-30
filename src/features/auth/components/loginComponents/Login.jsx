import { useForm } from "react-hook-form";
import InputField from "@shared/components/InputField";
import Button from "@shared/components/Button";
import PasswordInput from "@shared/components/PasswordInput";
import {motion} from "framer-motion"
const RightLoginContent = ({ onNavigate }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (e) => {
    console.log("Logged in with:", e);
  };

  return (
  

       <div className="md:bg-white/10 bg-transparent sm:backdrop-blur-lg sm:border sm:border-gray-200 space-y-6 w-full sm:w-lg lg:w-xl sm:py-10 sm:px-8 rounded-2xl sm:shadow-xl">
          
        <div>

          <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeIn" }}
          className="main-heading-2 leading-tight ">
            Welcome
          </motion.h1>
          <motion.p 
           initial={{ opacity: 0, y: 15 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5, ease: "easeIn" }}
           >
            Login to your academic workspace
          </motion.p>
            </div>
          

          <form
            className="flex flex-col space-y-6 w-full"
            onSubmit={handleSubmit(onSubmit)}
          >
            <InputField
              label="Email Address"
              id="email"
              name="email"
              type="email"
              placeholder="student@university.edu"
              register={register}
            />
            <PasswordInput
              label="Password"
              register={register}
            />

            <Button label="Login" />
          </form>

          <div className="flex justify-center items-center space-x-2 mt-7 md:mt-10">
            <p className="text-center">
              Don't have an account?
            </p>
            <p
              onClick={onNavigate}
              className=" font-semibold cursor-pointer hover:underline hover:text-blue-600 transition-colors duration-200"
            >
              Register here
            </p>
          
        </div>
        </div>
      
    
  );
};

export default RightLoginContent;