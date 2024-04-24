import { Calendar, dayjsLocalizer, DayPropGetter } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import dayjs from "dayjs";
import "dayjs/locale/fr";
import "dayjs/locale/en";
import "dayjs/locale/es";
import { useState, useEffect } from "react";
import { useGetThoughtsByUser } from "@/hooks/useGetThoughtsByUser";
import { useGetThoughtsByUserAndFeeling } from "@/hooks/useGetThoughtsByUserAndFeeling";
import { useCalendarStyle } from "@/hooks/useCalendarStyle";
import FeelingFilterOfThoughts from "./feelingFilterOfThoughts";
import { useTranslation } from "react-i18next";
import CalendarThoughtsBox from "./calendarThoughtsBox";

export interface CalendarEvent {
  id: string;
  start: Date;
  end: Date;
  title: string;
  positiveThought: string;
  negativeThought: string;
  feeling: string;
}

const CalendarUi = () => {
  const localizer = dayjsLocalizer(dayjs);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedThoughts, setSelectedThoughts] = useState<CalendarEvent[]>([]);
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const { thoughts } = useGetThoughtsByUser();
  const { thoughtsByFeeling, fetchThoughtsByFeeling } =
    useGetThoughtsByUserAndFeeling();

  let calendarLanguage = "es";
  if (currentLocale === "en") {
    calendarLanguage = "en";
  } else if (currentLocale === "fr") {
    calendarLanguage = "fr";
  }
  dayjs.locale(calendarLanguage);

  // events && eventsByFeeling arrays

  const events: CalendarEvent[] = Array.isArray(thoughts)
    ? thoughts.map((thought) => {
        return {
          id: thought._id,
          start: new Date(thought.createdAt),
          end: new Date(thought.createdAt),
          title: thought.user,
          negativeThought: thought.negativeThought,
          positiveThought: thought.positiveThought,
          feeling: thought.feeling,
        };
      })
    : [];

  const eventsByFeeling: CalendarEvent[] = Array.isArray(thoughtsByFeeling)
    ? thoughtsByFeeling.map((thought) => {
        return {
          id: thought._id,
          start: new Date(thought.createdAt),
          end: new Date(thought.createdAt),
          title: thought.user,
          negativeThought: thought.negativeThought,
          positiveThought: thought.positiveThought,
          feeling: thought.feeling,
        };
      })
    : [];

  // select thoughts by feeling:

  useEffect(() => {
    if (thoughtsByFeeling) {
      setSelectedThoughts(eventsByFeeling);
    }
  }, [thoughtsByFeeling]);

  // select thoughts by day:

  const handleSelectSlot = (slotInfo: any) => {
    setSelectedDate(slotInfo.start);
    const selectedThoughtsPerDay = events.filter((event) =>
      dayjs(event.start).isSame(slotInfo.start, "day")
    );
    setSelectedThoughts(selectedThoughtsPerDay);
  };

  //style of calendar:

  const { customCalendarMessages, components, eventStyleGetter } =
    useCalendarStyle();

  const dayPropGetter: DayPropGetter = (date) => {
    const hasEvents = events.some((event) =>
      dayjs(event.start).isSame(date, "day")
    );
    return {
      style: {
        backgroundColor: hasEvents ? "#6BC384" : "#FBFBFB",
      },
    };
  };

  return (
    <>
      <div className="flex lg:gap-10 justify-between items-center lg:items-start w-full flex-col lg:flex-row ">
        <div className="flex flex-col justify-center items-center rounded-lg">
          <Calendar
            className="w-full sm2:w-[25.25rem] sm:w-[22rem] xs:w-[19.5rem] xxs:w-[16.5rem]"
            style={{
              height: 400,
            }}
            localizer={localizer}
            events={events}
            views={["month"]}
            messages={customCalendarMessages}
            eventPropGetter={eventStyleGetter}
            dayPropGetter={dayPropGetter}
            onSelectEvent={handleSelectSlot}
            onSelectSlot={handleSelectSlot}
            selectable
            components={components}
          />
          <FeelingFilterOfThoughts
            fetchThoughtsByFeeling={fetchThoughtsByFeeling}
          />
        </div>
        <CalendarThoughtsBox
          selectedThoughts={selectedThoughts}
          selectedDate={selectedDate}
        />
      </div>
    </>
  );
};

export default CalendarUi;
