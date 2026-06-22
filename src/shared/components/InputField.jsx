import { motion } from "framer-motion";

const InputFields = ({ label, id, name, type, placeholder, register, text }) => {
  return (
    // 1. Animate the container sliding up and fading in on load
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeIn" }}
      className="flex flex-col w-full gap-3 px-1"
    >
      <div className="flex gap-2 items-center">
        <label htmlFor={id} className="text-Login-Text">{label}</label>
        <span className="text-gray-500 text-sm">{text}</span>
      </div>

      {/* 2. Transform the regular input into a motion.input */}
      <motion.input 
        type={type} 
        id={id} 
        name={name}
        placeholder={placeholder}
        {...register(name, { required: true })} 
        
        // Dynamic micro-interactions
       
        t
        // Fixed the typo from 'foucs' to 'focus'
        className="focus:ring-2 focus:ring-blue-600/80  focus:border-blue-800 outline-none w-full px-4 py-4 border border-input-border text-gray-900 transition-colors duration-200"
      />
    </motion.div>
  );
};

export default InputFields; // Fixed export name to match component