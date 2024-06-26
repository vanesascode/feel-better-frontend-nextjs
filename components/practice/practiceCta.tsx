import CtaButton from "../commons/ctaButton";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";

interface PracticeTopCtaProps {
  children: React.ReactNode;
  url: string;
  thin?: boolean;
  bold?: boolean;
}

const PracticeCta = ({ children, url, thin, bold }: PracticeTopCtaProps) => {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <div className=" flex flex-col justify-start items-center">
      <div className="flex flex-col justify-center items-center max-w-[75.5rem] p-7 md:p-14 gap-5">
        <h2
          className={`${
            thin &&
            "md:text-heading3-thin xs:text-body-thin text-base-thin text-gray"
          } ${
            bold &&
            "md:text-heading3-bold xs:text-body-bold text-base-bold text-white"
          } text-center px-3 `}
        >
          {children}
        </h2>
        <CtaButton
          onClick={() => router.push(url)}
          green
          darkerShadow
          type="button"
        >
          {t("start")}
        </CtaButton>
      </div>
    </div>
  );
};

export default PracticeCta;
