import { ArrowRight } from "lucide-react";
import {motion} from "framer-motion"
const Button = (props) => {
  return (
    <motion.button 
    initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeIn" }}
    type="submit" className="bg-Login-Button text-white py-3 mt-4 text-[1.2rem] font-medium flex justify-center items-center gap-2 cursor-pointer">
              {props.label} <ArrowRight strokeWidth={2.5} size={20} />
            </motion.button>
  )
}

export default Button