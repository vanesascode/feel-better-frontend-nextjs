import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/redux/provider";
import Script from "next/script";
import { CookiesConsentLogic } from "@/components/cookies-consent-bar/cookiesConsentLogic";
const inter = Inter({ subsets: ["latin"] });
import { GoogleOAuthProvider } from "@react-oauth/google";

export const metadata: Metadata = {
  title: "FeelBetter",
  description:
    "FeelBetter es una aplicación web diseñada para ayudarte en el manejo diario de tu dolor crónico a través de trabajo cognitivo y de la meditación.",
  applicationName: "FeelBetter",
  referrer: "origin-when-cross-origin",
  keywords: [
    "dolor crónico",
    "fibromialgia",
    "chronic pain",
    "meditation",
    "cbt",
    "health",
    "web application",
    "positive thoughts therapy",
    "terapia de pensamientos positivo",
    "divulgación de contenido de autoayuda",
    "divulgación educativa sobre el dolor crónico",
    "health educational content",
  ],
  authors: [
    {
      name: "Vanesa Juarez",
      url: "https://www.linkedin.com/in/vanesajuarezparis",
    },
  ],
  creator: "Vanesa Juarez",
  publisher: "Vanesa Juarez",

  openGraph: {
    title:
      "FeelBetter | Aplicación web para ayudarte en el manejo diario de tu dolor crónico a través de trabajo cognitivo y de la meditación.",
    description:
      "FeelBetter es una aplicación web desarrollada para ayudarte en el manejo diario de tu dolor crudo a través de trabajo cognitivo y de la meditación.",
    siteName: "FeelBetter",
    url: "https://www.mejoraconfeelbetter.online",
    images: {
      url: "https://feel-better-ds7o8l2du-vanesascodes-projects.vercel.app/opengraph-image.png?b7ee1efe9c5429d5",
    },
    locale: "es-ES",
    type: "website",
  },
  metadataBase: new URL("https://www.mejoraconfeelbetter.online"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-JD5GLKZHEE"
        ></Script>
        <Script id="google-analytics">
          {` window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-JD5GLKZHEE');`}
        </Script>
      </head>
      <body className={inter.className}>
        <GoogleOAuthProvider
          clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!}
        >
          <Providers>{children}</Providers>
        </GoogleOAuthProvider>
        <CookiesConsentLogic />
      </body>
    </html>
  );
}
