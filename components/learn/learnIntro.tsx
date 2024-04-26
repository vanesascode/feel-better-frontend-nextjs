import { useTranslation } from "react-i18next";

const LearnIntro = () => {
  const { t } = useTranslation();

  return (
    <div className=" flex flex-col justify-start items-center">
      <div className="flex flex-col justify-center items-center max-w-[75.5rem] p-8 md:p-16">
        <h2 className="md:text-heading3-thin xs:text-body-thin text-base-thin text-gray text-center">
          {t("learn-intro")} <br />
        </h2>
      </div>
    </div>
  );
};

export default LearnIntro;
