"use client";

import CalendarUi from "./calendarUi";
import { useGetThoughtsByUser } from "@/hooks/useGetThoughtsByUser";
import { useGetThoughtsByUserAndFeeling } from "@/hooks/useGetThoughtsByUserAndFeeling";
import { useTranslation } from "react-i18next";

const FollowUpContent = () => {
  const { t } = useTranslation();
  const { thoughts, token, getThouthgsByUserError } = useGetThoughtsByUser();
  const {
    thoughtsByFeeling,
    fetchThoughtsByFeeling,
    getThoughtsByUserAndFeelingError,
  } = useGetThoughtsByUserAndFeeling();

  return (
    <>
      {(getThouthgsByUserError && (
        <p className="text-red-400">{t("sorry-server-error")}</p>
      )) ||
        (getThoughtsByUserAndFeelingError && (
          <p className="text-red-400">{t("sorry-server-error")}</p>
        ))}
      <CalendarUi
        thoughts={thoughts}
        token={token}
        thoughtsByFeeling={thoughtsByFeeling}
        fetchThoughtsByFeeling={fetchThoughtsByFeeling}
      />
    </>
  );
};

export default FollowUpContent;
