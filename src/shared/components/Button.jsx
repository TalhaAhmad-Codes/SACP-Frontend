import { ArrowRight } from "lucide-react";
import {motion} from "framer-motion"
import { twMerge } from "tw-merge";
const Button = ({className, label,}) => {
  return (
    <motion.button 
    initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeIn" }}
    type="submit" className= {twMerge("bg-[#0066fe] text-white px-5 py-2.5 rounded-full text-sm font-medium shadow-sm hover:bg-blue-700 transition-all transform active:scale-95", className)}>
              {label} <ArrowRight strokeWidth={2.5} size={20} />
            </motion.button>
  )
}

export default Button