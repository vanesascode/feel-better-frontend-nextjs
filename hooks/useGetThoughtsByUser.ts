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
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(maintainUserDataStoredinRedux());
  }, []);

  const { token, _id } = useAppSelector(selectAuth);

  const fetchThoughts = async () => {
    const thoughtsData = await fetchThoughtsByUser({
      token,
      _id,
    });
    setThoughts(thoughtsData);
  };

  useEffect(() => {
    fetchThoughts();
  }, [token, _id]);

  return {
    thoughts,
    token,
  };
};