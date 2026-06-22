import { motion } from "framer-motion"; // 1. Imported Framer Motion
import { ImageContainer2 } from "../../../../shared/components/ImageContainer";
import RightRegisterContent from "./RightRegisterContent";

export default function Register({ onNavigate }) {
  // Stagger container to orchestrate the entry of the left form and right image
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Delay between form showing up and image showing up
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
      className="grid grid-cols-1 lg:grid-cols-[60%_1fr] w-full max-h-screen place-items-center display-grid"
    >
      {/* 2. Form panel wraps and slides smoothly in from the left */}
      <motion.div variants={itemVariantsLeft} className=" h-full w-full display-full">
        <RightRegisterContent onNavigate={onNavigate} />
      </motion.div>

      {/* 3. Marketing Image wrapper smoothly glides in from the right */}
      <motion.div variants={itemVariantsRight} className="w-full h-full justify-center hidden lg:block login-sidebar-image image2">
        <ImageContainer2 />
      </motion.div>
    </motion.div>
  );
}