import { ArrowRight } from "lucide-react";
import {motion} from "framer-motion"
import { twMerge } from "tw-merge";
const Button = ({className, label,}) => {
  return (
    <motion.button 
    initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeIn" }}
    type="submit" className= {twMerge("form-button", className)}>
              {label} <ArrowRight strokeWidth={2.5} size={20} />
            </motion.button>
  )
}

export default Button