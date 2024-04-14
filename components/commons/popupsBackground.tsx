import { motion } from "framer-motion";

const PopupsBackground = ({ onClick }: { onClick?: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      exit={{ opacity: 0 }}
      className="fixed top-0 left-0 right-0 w-full h-full bg-[#ffffff] bg-opacity-30 z-10"
      onClick={onClick}
    ></motion.div>
  );
};

export default PopupsBackground;
