import { useToggleBreathingInstructions } from "@/hooks/useToggleBreathingInstructions";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const BreathingBall = () => {
  const { t } = useTranslation();

  const { toggleBreathe } = useToggleBreathingInstructions();

  return (
    <motion.div
      initial={{ scale: 1 }}
      animate={{
        scale: [1, 0.5, 1],
      }}
      transition={{
        scale: { duration: 13, ease: "easeInOut", repeat: Infinity },
      }}
      className="bg-dark bg-cover bg-center sm2:h-[23.75rem] sm2:w-[23.75rem] sm:h-[19.37rem] sm:w-[19.37rem] xs:h-[16.87rem] xs:w-[16.87rem] h-[14.37rem] w-[14.37rem] rounded-full md:my-8 my-5 border-[0.125rem] border-white"
      style={{
        backgroundImage: "url('/thoughts/breathing-leaves.png')",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white md:text-cover3-semibold  text-heading1-bold text-center">
        {toggleBreathe ? t("breathe-in") : t("breathe-out")}
      </div>
    </motion.div>
  );
};

export default BreathingBall;
