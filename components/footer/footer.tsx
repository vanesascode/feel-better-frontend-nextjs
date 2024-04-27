"use client";

import { socialMediaIcons } from "@/constants/socialMediaIcons";
import SocialMediaIcon from "./socialMediaIcon";
import Link from "next/link";
import FooterLink from "./footerLink";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="flex justify-center items-center bg-black">
        <div className="flex justify-center items-center w-[87rem]">
          <div className="bg-dark h-[0.05rem] w-full md:my-10 my-5 max-[89.5rem]:mx-10"></div>
        </div>
      </div>

      <div className="p-horizontal flex justify-center items-center bg-black">
        <div className="flex justify-between items-center max-w-[87rem] w-full flex-col lg:flex-row max-sm1:gap-5 pb-10">
          <div className="lg:w-1/3 w-full max-lg:text-center max-lg:px-10 sm1:pb-10">
            <div className="text-heading2-bold sm:py-5 py-3 text-white">
              <Link href="/">FeelBetter</Link>
            </div>
            <p className="text-gray md:text-body-thin text-base-thin">
              {t("footer:feel-better-description")}
            </p>
          </div>
          <div className="grid sm1:grid-cols-3 grid-cols-2 text-white lg:w-2/3 w-full md:text-body-regular text-base-regular">
            <FooterLink href="/account">{t("footer:account")}</FooterLink>
            <FooterLink href="/follow-up">{t("footer:follow-up")}</FooterLink>
            <FooterLink href="/conditions">{t("footer:conditions")}</FooterLink>
            <FooterLink href="/learn">{t("footer:learn")}</FooterLink>
            <FooterLink href="/meditation-info">
              {t("footer:meditation")}
            </FooterLink>
            <FooterLink href="/cookies-policy">
              {t("footer:cookies")}
            </FooterLink>
            <FooterLink href="/practice">{t("footer:practice")}</FooterLink>
            <FooterLink href="/challenge-thoughts-info">
              {t("footer:alternative-thoughts")}
            </FooterLink>
          </div>
        </div>
      </div>
      <div className="p-horizontal flex justify-center items-center ">
        <div className="text-gray text-small-thin md:text-base-thin flex justify-between items-center max-w-[87.5rem] w-full flex-col md:flex-row max-md:gap-5 py-5">
          <p>Copyright © 2024 FeelBetter</p>
          <a
            href="mailto:mejoraconfeelbetter@gmail.com?subject=&body="
            className=" hover:text-cta-green transition duration-300 ease-in-out cursor-pointer"
          >
            {t("footer:contact-us")}
          </a>
          <div className="flex md:gap-6 gap-7 sm1:max-w-[10rem] max-w-[11rem] ">
            {socialMediaIcons.map((icon) => (
              <SocialMediaIcon
                key={icon.id}
                href={icon.href}
                src={icon.src}
                alt={icon.alt}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
