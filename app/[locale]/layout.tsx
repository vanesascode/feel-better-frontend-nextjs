import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/redux/provider";
import Script from "next/script";
const inter = Inter({ subsets: ["latin"] });

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
    <html>
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
        <Providers>{children} </Providers>
      </body>
    </html>
  );
}
