import Link from "next/link";
import CalendarThoughtsLogic from "./calendarThoughtsLogic";
import { useTranslation } from "react-i18next";
import { useGetThoughtsByUser } from "@/hooks/useGetThoughtsByUser";
import { CalendarEvent } from "./calendarUi";

interface CalendarThoughtsBoxProps {
  selectedDate: Date | null;
  selectedThoughts: CalendarEvent[];
}

const CalendarThoughtsBox = ({
  selectedDate,
  selectedThoughts,
}: CalendarThoughtsBoxProps) => {
  const { t } = useTranslation();
  const { thoughts, token } = useGetThoughtsByUser();

  return (
    <>
      <div className="bg-dark flex flex-col justify-start items-start border-[1px] border-white xs:p-5 p-2 lg:min-h-[30.3rem] max-h-[37.5rem] md:max-h-[80vh] overflow-y-auto w-full sm2:w-full sm:w-[22rem] xs:w-[19.5rem] xxs:w-[16.5rem]">
        {(!selectedThoughts || selectedThoughts.length === 0) &&
          thoughts.length > 0 && (
            <div className="w-full">
              <p className="text-white text-center md:p-10 p-3 text-base-thin md:text-body-thin">
                {t("instructions")}
              </p>
            </div>
          )}
        {thoughts.length === 0 ? (
          <Link
            href="/choose-negative-thought"
            className="sm:mb-0 mb-3 text-base-bold md:text-body-bold text-cta-green text-center w-full"
          >
            {t("no-thoughts-yet")}
          </Link>
        ) : (
          ""
        )}
        <CalendarThoughtsLogic
          selectedDate={selectedDate}
          selectedThoughts={selectedThoughts}
          token={token}
        />
      </div>
    </>
  );
};

export default CalendarThoughtsBox;
