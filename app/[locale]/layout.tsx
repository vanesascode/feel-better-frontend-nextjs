import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/redux/provider";
import Script from "next/script";
import { CookiesConsentLogic } from "@/components/cookies-consent-bar/cookiesConsentLogic";
const inter = Inter({ subsets: ["latin"] });
import { GoogleOAuthProvider } from "@react-oauth/google";

export const metadata: Metadata = {
  title: "Feel Better",
  description: "Aplicación web para ayudar a gente con dolor crónico",
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
