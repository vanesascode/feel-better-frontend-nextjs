import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface ActivityCardProps {
  children: ReactNode;
  link: string;
  image: string;
  alt: string;
  greenDark?: boolean;
  greenMedium?: boolean;
  greenLight?: boolean;
}

const ActivityCard = ({
  children,
  link,
  image,
  alt,
  greenDark,
  greenMedium,
  greenLight,
}: ActivityCardProps) => {
  return (
    <motion.article
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <Link href={link}>
        <div className="flex flex-col justify-center items-center">
          <div
            className={`flex justify-center items-center bg-dark-green-1 px-16 py-[40px] rounded-3xl  ${
              greenDark && "bg-dark-green-2"
            } ${greenMedium && "bg-dark-green-1"} ${
              greenLight && "bg-light-green"
            }`}
          >
            <div className="max-xs:w-[3rem] max-xs:h-[3rem] max-sm:w-[4rem] max-sm:h-[4rem] flex justify-center items-center">
              <Image src={image} alt={alt} width={60} height={60} />
            </div>
          </div>
          <div className="max-w-32 flex justify-center items-center pt-5 md:pb-0 pb-5">
            <p className="text-center text-white md:text-body-regular text-base-thin">
              {children}
            </p>
          </div>
        </div>
      </Link>
    </motion.article>
  );
};

export default ActivityCard;
