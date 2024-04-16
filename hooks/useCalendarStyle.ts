import { CalendarEvent } from "@/components/follow-up/calendarUi";
import { EventPropGetter } from "react-big-calendar";
import { useTranslation } from "react-i18next";

export const useCalendarStyle = () => {
  const { t } = useTranslation();

  const customCalendarMessages = {
    today: t("today"),
    previous: t("previous"),
    next: t("next"),
  };

  const components = {
    event: () => null,
  };

  const eventStyleGetter: EventPropGetter<CalendarEvent> = () => {
    const style: React.CSSProperties = {
      backgroundColor: "transparent",
    };
    return {
      style,
    };
  };

  return {
    customCalendarMessages,
    components,
    eventStyleGetter,
  };
};
