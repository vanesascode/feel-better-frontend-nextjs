"use client";

import { useAppDispatch } from "@/redux/hooks";
import { useEffect } from "react";
import { maintainThoughtsDataStoredinRedux } from "@/redux/features/thoughtSlice";

const ThoughtsMaintainer = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(maintainThoughtsDataStoredinRedux());
  }, []);

  return <></>;
};

export default ThoughtsMaintainer;
