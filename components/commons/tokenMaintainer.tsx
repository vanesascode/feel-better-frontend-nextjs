"use client";

import {
  selectAuth,
  maintainUserDataStoredinRedux,
  logout,
} from "@/redux/features/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useEffect, useMemo } from "react";
import { decode, JwtPayload } from "jsonwebtoken";

interface MyJwtPayload extends JwtPayload {
  exp: number;
}

export default function TokenMaintainer() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(maintainUserDataStoredinRedux());
  }, []);

  const { token } = useAppSelector(selectAuth);

  const extractTokenExpiration = (token: string | null) => {
    const decodedToken = decode(token || "") as MyJwtPayload;
    if (decodedToken && decodedToken.exp) {
      const expirationTime = new Date(decodedToken.exp * 1000);
      return expirationTime;
    }
    return null;
  };

  const expirationTime = extractTokenExpiration(token);
  const currentTime = useMemo(() => new Date(), []);

  useEffect(() => {
    if (expirationTime && expirationTime < currentTime) {
      localStorage.removeItem("token");
      dispatch(logout());
    }
  }, [expirationTime, currentTime, dispatch]);

  return <></>;
}
