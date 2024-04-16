import { fetchThoughtsByUserAndFeeling } from "@/api/follow-up/followUp";
import { useEffect, useState } from "react";
import {
  maintainUserDataStoredinRedux,
  selectAuth,
} from "@/redux/features/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

export interface Thought {
  _id: string;
  user: string;
  negativeThought: string;
  positiveThought: string;
  feeling: string;
  createdAt: Date;
}

export const useGetThoughtsByUserAndFeeling = () => {
  const [thoughtsByFeeling, setThoughtsByFeeling] = useState<Thought[]>([]);
  const [
    getThoughtsByUserAndFeelingError,
    setGetThoughtsByUserAndFeelingError,
  ] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(maintainUserDataStoredinRedux());
  }, []);

  const { token, _id } = useAppSelector(selectAuth);

  const fetchThoughtsByFeeling = async (feeling: string) => {
    try {
      const thoughtsByFeelingData = await fetchThoughtsByUserAndFeeling({
        token,
        _id,
        feeling,
      });
      setThoughtsByFeeling(thoughtsByFeelingData);
    } catch (error) {
      setGetThoughtsByUserAndFeelingError(true);
    }
  };

  return {
    thoughtsByFeeling,
    fetchThoughtsByFeeling,
    getThoughtsByUserAndFeelingError,
  };
};
