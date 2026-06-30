import { useForm } from "react-hook-form";
import InputField from "@shared/components/InputField";
import Button from "@shared/components/Button";
import PasswordInput from "@shared/components/PasswordInput";
import { motion } from "framer-motion";

const RightLoginContent = ({ onNavigate }) => {
  const { register, handleSubmit } = useForm();
  
  const onSubmit = (data) => {
    console.log("Logged in with:", data);
  };

  return (
    /* CHANGED: 'bg-transparent' to 'sm:bg-white/50' to allow the backdrop blur to render */
    <div className="bg-transparent sm:bg-white/10  sm:backdrop-blur-xl sm:border sm:border-white/40 space-y-6 w-full sm:w-lg lg:w-xl sm:py-10 sm:px-8 rounded-2xl sm:shadow-xl transition-all">
      <div>
        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeIn" }}
          className="main-heading-2 leading-tight"
        >
          Welcome
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeIn" }}
          className="text-gray-600"
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
          id="password"
          name="password" /* Reminded to keep the field name here */
          register={register}
        />

        <Button label="Login" />
      </form>

      <div className="flex justify-center items-center space-x-2 mt-7 md:mt-10">
        <p className="text-center text-gray-600">
          Don't have an account?
        </p>
        <button
          type="button"
          onClick={onNavigate}
          className="font-semibold cursor-pointer hover:underline hover:text-blue-600 transition-colors duration-200 bg-transparent border-none p-0"
        >
          Register here
        </button>
      </div>
    </div>
  );
};

export default RightLoginContent;