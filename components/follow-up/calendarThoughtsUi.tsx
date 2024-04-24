import dayjs from "dayjs";
import { CalendarEvent } from "./calendarUi";
import { PencilIcon, ArchiveBoxXMarkIcon } from "@heroicons/react/24/solid";
import { useTranslation } from "react-i18next";

interface CalendarThoughtsUiProps {
  selectedDate: Date | null;
  selectedThoughts: CalendarEvent[];

  handleOpenModalToEditThought: (
    _id: string,
    positiveThought: string,
    negativeThought: string,
    feeling: string
  ) => void;
  handleOpenModalToDeleteThought: (_id: string) => void;
}
const CalendarThoughtsUi = ({
  selectedDate,
  selectedThoughts,
  handleOpenModalToDeleteThought,
  handleOpenModalToEditThought,
}: CalendarThoughtsUiProps) => {
  const { t } = useTranslation();

  return (
    <section>
      {selectedDate && (
        <div
          className={selectedThoughts.length > 0 ? "p-0 xs:p-2 sm:p-3" : "p-0"}
        >
          <ul>
            {selectedThoughts.map((thought, index) => (
              <div
                key={thought.id}
                className={`text-white ${
                  index === selectedThoughts.length - 1 ? "" : "mb-10"
                }`}
              >
                <div className="flex justify-between items-center mb-4 sm:gap-2">
                  <div className="flex items-center md:text-heading3-bold sm:text-body-bold text-base-bold gap-1 md:gap-2 xl:gap-3">
                    <p className="underline">
                      {dayjs(thought.start).format("DD MMMM, YYYY")}
                    </p>
                    <p>{thought.feeling}</p>
                  </div>
                  <div className="flex md:gap-5 gap-3">
                    <button
                      onClick={() =>
                        handleOpenModalToEditThought(
                          thought.id,
                          thought.positiveThought,
                          thought.negativeThought,
                          thought.feeling
                        )
                      }
                    >
                      <PencilIcon className="sm:w-5 sm:h-5 w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleOpenModalToDeleteThought(thought.id)}
                    >
                      <ArchiveBoxXMarkIcon className="sm:w-6 sm:h-6 w-4 h-4" />
                    </button>
                  </div>
                </div>
                <li>
                  <p className="md:text-body-bold text-base-bold  mb-2">
                    {t("negative-thought")}{" "}
                    <span className="md:text-body-thin text-base-thin text-gray">
                      {thought.negativeThought}
                    </span>
                  </p>
                  <p className="md:text-body-bold text-base-bold text-light-green ">
                    {t("positive-thought")}{" "}
                    <span className="md:text-body-thin text-base-thin text-gray">
                      {thought.positiveThought}
                    </span>
                  </p>
                </li>
              </div>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default CalendarThoughtsUi;
