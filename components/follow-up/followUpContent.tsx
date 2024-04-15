"use client";

import CalendarUi from "./calendarUi";
import { useGetThoughtsByUser } from "@/hooks/useGetThoughtsByUser";
import { useGetThoughtsByUserAndFeeling } from "@/hooks/useGetThoughtsByUserAndFeeling";
import FeelingFilterOfThoughts from "./feelingFilterOfThoughts";

const FollowUpContent = () => {
  const { thoughts, token } = useGetThoughtsByUser();

  const { thoughtsByFeeling, fetchThoughtsByFeeling } =
    useGetThoughtsByUserAndFeeling();

  return (
    <>
      <FeelingFilterOfThoughts
        fetchThoughtsByFeeling={fetchThoughtsByFeeling}
      />
      <CalendarUi
        thoughts={thoughts}
        token={token}
        thoughtsByFeeling={thoughtsByFeeling}
      />
    </>
  );
};

export default FollowUpContent;
