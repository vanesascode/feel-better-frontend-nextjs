"use client";

import Link from "next/link";
import CtaButton from "../commons/ctaButton";

interface CookiesConsentFormProps {
  rejectCookies: () => void;
  acceptCookies: () => void;
}

const CookiesConsentForm = ({
  rejectCookies,
  acceptCookies,
}: CookiesConsentFormProps) => {
  return (
    <div className="fixed inset-0 bg-opacity-70 bg-dark z-[5000]">
      <section className="flex fixed bottom-0 left-0 right-0 justify-center items-center p-horizontal py-5 bg-dark">
        <div className="max-w-[90rem] flex lg:justify-start items-center lg:gap-28 gap-5 lg:flex-row flex-col">
          <div>
            <p className="text-white ms:text-body-thin text-base-thin max-lg:text-center">
              Esta aplicación web utiliza cookies. Puedes personalizar tu
              configuración.{" "}
              <Link
                href="/cookies-policy"
                className="hover:text-light-green text-body-bold underline "
              >
                Saber más
              </Link>
            </p>

            <article className="flex mt-4 flex-col sm:flex-row ms:text-body-thin text-base-thin text-gray gap-5 max-lg:justify-center justify-start items-center">
              <section>
                <input
                  type="checkbox"
                  id="necessaryCookies"
                  defaultChecked
                  disabled
                />
                <label htmlFor="necessaryCookies" className=" ml-2">
                  Cookies Necesarias
                </label>
              </section>

              <section>
                <input type="checkbox" id="analysisCookies" />
                <label htmlFor="analysisCookies" className=" ml-2">
                  Cookies de análisis
                </label>
              </section>
            </article>
          </div>

          <div className="flex gap-5 sm:flex-row flex-col">
            <div>
              <CtaButton
                type="button"
                onClick={rejectCookies}
                darkerShadow
                white
              >
                Rechazar optionales
              </CtaButton>
            </div>
            <CtaButton type="button" onClick={acceptCookies} darkerShadow green>
              Aceptar todas
            </CtaButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CookiesConsentForm;
