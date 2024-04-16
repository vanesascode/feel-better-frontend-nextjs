import dayjs from "dayjs";
import { CalendarEvent } from "./calendarUi";

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
  return (
    <>
      {selectedDate && (
        <div className="">
          <ul>
            {selectedThoughts.map((thought) => (
              <div key={thought.id}>
                <h2>
                  {dayjs(selectedDate).format("DD MMMM, YYYY")}{" "}
                  {thought.feeling}
                </h2>

                <li className="mb-2">
                  <div>
                    <span className="font-bold">PositiveThought: </span>{" "}
                    {thought.positiveThought}
                  </div>
                  <div>
                    <span className="font-bold">NegativeThought: </span>{" "}
                    {thought.negativeThought}
                  </div>
                </li>

                <div className="flex mb-5">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() =>
                      handleOpenModalToEditThought(
                        thought.id,
                        thought.positiveThought,
                        thought.negativeThought,
                        thought.feeling
                      )
                    }
                  >
                    Edit
                  </button>

                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-5"
                    onClick={() => handleOpenModalToDeleteThought(thought.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default CalendarThoughtsUi;
