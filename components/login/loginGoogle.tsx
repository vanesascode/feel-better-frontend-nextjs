import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { JwtPayload } from "jsonwebtoken";
import { useGetExistingUsersEmails } from "@/hooks/useGetExistingUsersEmails";
import {
  useLoginGoogleUserMutation,
  useRegisterGoogleUserMutation,
} from "@/redux/services/authApi";
import { useAppDispatch } from "@/redux/hooks";
import { setUser } from "@/redux/features/authSlice";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

interface CustomJwtPayload extends JwtPayload {
  name: string;
  email: string;
}

const LoginGoogle = () => {
  const { t } = useTranslation();
  const [error, setError] = useState<boolean>(false);
  const { existingUsersEmails } = useGetExistingUsersEmails();
  const dispatch = useAppDispatch();
  const [
    loginGoogleUser,
    {
      data: loginGoogleData,
      isSuccess: isLoginGoogleSuccess,
      isError: isLoginGoogleError,
    },
  ] = useLoginGoogleUserMutation();
  const [
    registerGoogleUser,
    {
      data: registerGoogleData,
      isSuccess: isRegisterGoogleSuccess,
      isError: isRegisterGoogleError,
    },
  ] = useRegisterGoogleUserMutation();
  const router = useRouter();

  useEffect(() => {
    if (isLoginGoogleSuccess) {
      dispatch(
        setUser({
          _id: loginGoogleData.user._id,
          name: loginGoogleData.user.name,
          email: loginGoogleData.user.email,
          token: loginGoogleData.token,
        })
      );
      router.push("/");
    }
    if (isRegisterGoogleSuccess) {
      dispatch(
        setUser({
          _id: registerGoogleData.user._id,
          name: registerGoogleData.user.name,
          email: registerGoogleData.user.email,
          token: registerGoogleData.token,
        })
      );
      router.push("/");
    }
  }, [
    isLoginGoogleSuccess,
    isLoginGoogleError,
    isRegisterGoogleSuccess,
    isRegisterGoogleError,
  ]);

  return (
    <>
      <GoogleLogin
        onSuccess={async (credentialResponse) => {
          var credentialResponseDecoded = jwtDecode<CustomJwtPayload>(
            credentialResponse.credential!
          );
          console.log(credentialResponseDecoded);
          const userName = credentialResponseDecoded.given_name;
          const userEmail = credentialResponseDecoded.email;
          if (userName && userEmail) {
            if (existingUsersEmails.length > 0) {
              if (existingUsersEmails.includes(userEmail)) {
                await loginGoogleUser({ name: userName, email: userEmail });
              }
              await registerGoogleUser({ name: userName, email: userEmail });
            }
          }
        }}
        onError={() => {
          setError(true);
        }}
      />
      {error && (
        <p className="text-red-500 text-base-regular text-center mt-2">
          {t("sorry-server-error")}
        </p>
      )}
    </>
  );
};

export default LoginGoogle;
