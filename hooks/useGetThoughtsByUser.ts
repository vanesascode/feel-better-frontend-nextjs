import { fetchThoughtsByUser } from "@/api/follow-up/followUp";
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

export const useGetThoughtsByUser = () => {
  const [thoughts, setThoughts] = useState<Thought[]>([]);
  const [getThoughtsByUserError, setGetThoughtsByUserError] =
    useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(maintainUserDataStoredinRedux());
  }, []);

  const { token, _id } = useAppSelector(selectAuth);

  const fetchThoughts = async () => {
    try {
      const thoughtsData = await fetchThoughtsByUser({
        token,
        _id,
      });
      setThoughts(thoughtsData);
      if (Array.isArray(thoughtsData)) {
        setIsLoading(false);
      }
    } catch (error) {
      setGetThoughtsByUserError(true);
    }
  };

  useEffect(() => {
    fetchThoughts();
  }, [token, _id, thoughts]);

  return {
    thoughts,
    token,
    getThoughtsByUserError,
    isLoading,
  };
};
