import { motion } from "framer-motion";
import ImageContainer from "../../../../shared/components/ImageContainer";
import RightLoginContent from "./RightLoginContent";

const Login = ({ onNavigate }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariantsLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const itemVariantsRight = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 lg:grid-cols-[50%_1fr]  w-full overflow-x-hidden max-h-screen display-grid"
    >
      {/* Left side Graphic Image Wrapper */}
      <motion.div variants={itemVariantsLeft} className="w-full h-full hidden lg:block login-sidebar-image">
        <ImageContainer /> 
      </motion.div>

      {/* Right side Login Content Form Wrapper */}
      <motion.div variants={itemVariantsRight} className="w-full h-full display-full">
        <RightLoginContent onNavigate={onNavigate} />
      </motion.div>
    </motion.div>
  );
};

export default Login;