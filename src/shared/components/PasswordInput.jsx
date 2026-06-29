import { motion } from "framer-motion";
import {Eye, EyeClosed} from "lucide-react"
import { useState } from "react";
const PasswordInput = ({register, label}) => {
    const [hide, setHide] = useState(true);

    function handleHide()
    {
        setHide(!hide);
    }
  return (
    
    // 1. Animate the container sliding up and fading in on load
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeIn" }}
      className="flex flex-col w-full gap-3 px-1"
    >
      <div className="flex gap-2 items-center">
        <label htmlFor="password" className="label">{label}</label>
        
      </div>
<div className="flex justify-center items-center relative">

      {/* 2. Transform the regular input into a motion.input */}
      <motion.input 
        
        {...register("password", { required: true })} 
              id="password"
              name="password"
              type={hide? "password":"text"}
              placeholder="************"
        
        // Dynamic micro-interactions
       
        
        // Fixed the typo from 'foucs' to 'focus'
        className="form-field"
        // className="focus:ring-2 focus:ring-blue-600/80  focus:border-blue-800 outline-none w-full px-4 pr-9 py-4 border border-input-border text-gray-900 transition-colors duration-200 relative"
      />
      <i className="password-icon" onClick={handleHide}>{
        hide ? <EyeClosed size={20} color="gray"/> : <Eye size={20}color="gray" />
        }</i>
        </div>
    </motion.div>
  );
};

export default PasswordInput; // Fixed export name to match component