"use client";

import { useTranslation } from "react-i18next";
import Image from "next/image";
import Link from "next/link";

const HomeActivities = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="bg-dark p-horizontal flex justify-center">
        <div className="max-w-[1440px]">
          <h3 className="md:text-heading2-bold text-heading3-bold text-white text-center md:pt-20 sm:pt-14 pt-10 md:pb-14 sm:pb-10 pb-8 p-horizontal">
            {t("activities-title")}
          </h3>
          <div className="flex sm2:flex-row flex-col justify-around sm2:items-start items-center md:pb-20 sm:pb-14 pb-10">
            <article>
              <Link href="/elegir-pensamiento">
                <div className="flex flex-col justify-center items-center">
                  <div className="flex justify-center items-center bg-dark-green-2 px-16 py-10 sm2:mr-5 sm:mr-0 rounded-3xl">
                    <Image
                      src="/home/head-icon.svg"
                      alt="activities"
                      width={70}
                      height={70}
                      className=""
                    />
                  </div>
                  <div className="max-w-32 flex justify-center items-center pt-5 md:pb-0 pb-5">
                    <p className="text-center text-white md:text-body-regular text-base-thin font-source ">
                      {t("activity-one")}
                    </p>
                  </div>
                </div>
              </Link>
            </article>
            <article>
              <Link href="/meditaciones">
                <div className="flex flex-col justify-center items-center">
                  <div className="flex justify-center items-center bg-dark-green-1 px-16 py-[47px] rounded-3xl">
                    <Image
                      src="/home/loto-icon.svg"
                      alt="activities"
                      width={70}
                      height={70}
                      className=""
                    />
                  </div>
                  <div className="max-w-32 flex justify-center items-center pt-5 md:pb-0 pb-5">
                    <p className="text-center text-white md:text-body-regular text-base-thin font-source ">
                      {t("activity-two")}
                    </p>
                  </div>
                </div>
              </Link>
            </article>
            <article>
              <Link href="/aprender">
                <div className="flex flex-col justify-center items-center">
                  <div className="flex justify-center items-center bg-light-green px-16 py-10 rounded-3xl sm2:ml-5 sm:ml-0">
                    <Image
                      src="/home/learn-icon.svg"
                      alt="activities"
                      width={70}
                      height={70}
                      className=""
                    />
                  </div>
                  <div className="max-w-32 flex justify-center items-center pt-5 ">
                    <p className="text-center text-white md:text-body-regular text-base-thin font-source ">
                      {t("activity-three")}
                    </p>
                  </div>
                </div>
              </Link>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeActivities;
