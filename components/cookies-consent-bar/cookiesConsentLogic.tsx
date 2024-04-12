"use client";

import { useEffect, useState } from "react";
import { hasCookie, setCookie } from "cookies-next";
import CookiesConsentForm from "@/components/cookies-consent-bar/cookiesConsentForm";

const CookiesConsentLogic = () => {
  const [showConsent, setShowConsent] = useState(true);

  useEffect(() => {
    setShowConsent(hasCookie("cookieConsent"));
  }, []);

  const acceptCookies = () => {
    setCookie("cookieConsent", "true");
    setShowConsent(true);
  };

  const rejectCookies = () => {
    setCookie("cookieConsent", "false");
    setShowConsent(true);
  };

  if (showConsent) {
    return null;
  }

  return (
    <>
      <CookiesConsentForm
        rejectCookies={rejectCookies}
        acceptCookies={acceptCookies}
      />
    </>
  );
};

export { CookiesConsentLogic };
