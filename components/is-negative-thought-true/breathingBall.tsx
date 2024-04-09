import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const BreathingBall = () => {
  const { t } = useTranslation();
  const [toggleBreathe, setToggleBreathe] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setToggleBreathe((prevState) => !prevState);
    }, 7500);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ scale: 1 }}
      animate={{
        scale: [1, 0.5, 1],
      }}
      transition={{
        scale: { duration: 15, ease: "easeInOut", repeat: Infinity },
      }}
      className="bg-dark bg-cover bg-center sm2:h-[380px] sm2:w-[380px] sm:h-[310px] sm:w-[310px] xs:h-[270px] xs:w-[270px] h-[230px] w-[230px] rounded-full md:my-8 my-5 border-[2px] border-white"
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
