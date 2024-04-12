import { motion, AnimatePresence } from "framer-motion";

interface DarkBackgroundWhenVerticalNavbarOpenProps {
  showOptionsNavbar: boolean;
  setShowOptionsNavbar: React.Dispatch<React.SetStateAction<boolean>>;
  darkBackground: boolean;
}

const DarkBackgroundWhenVerticalNavbarOpen = ({
  showOptionsNavbar,
  setShowOptionsNavbar,
  darkBackground,
}: DarkBackgroundWhenVerticalNavbarOpenProps) => {
  return (
    <AnimatePresence>
      {showOptionsNavbar && darkBackground && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          exit={{ opacity: 0 }}
          className="fixed top-0 left-0 right-0 w-full h-full bg-[#000000] bg-opacity-50 z-10"
          onClick={() => setShowOptionsNavbar(false)}
        ></motion.div>
      )}
    </AnimatePresence>
  );
};

export default DarkBackgroundWhenVerticalNavbarOpen;
