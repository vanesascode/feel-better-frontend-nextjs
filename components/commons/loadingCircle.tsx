import { useShowLoadingCircle } from "@/hooks/useShowLoadingCircle";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const LoadingCircle = () => {
  const { showServerError } = useShowLoadingCircle();
  const { t } = useTranslation();
  return (
    <div className="bg-[#000000] flex justify-center items-center h-[50vh] flex-col text-center">
      <Image
        src="/loading.gif"
        alt="loading circle that spins while fetching data"
        width={400}
        height={400}
        className="p-[3.12rem]"
      />
      {showServerError && (
        <p className="text-red-400 text-base-bold md:text-body-bold pb-10 mt-[-2rem]">
          {t("sorry-server-error")}
        </p>
      )}
    </div>
  );
};

export default LoadingCircle;
