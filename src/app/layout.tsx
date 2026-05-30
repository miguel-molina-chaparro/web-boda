import type { Metadata } from "next";
import {
  Great_Vibes,
  Cormorant_Garamond,
  Lato,
} from "next/font/google";
import "./globals.css";
import { AudioToggle } from "@/components/AudioToggle";
import { DecorativeSideImages } from "@/components/DecorativeSideImages";

const fontScript = Great_Vibes({
  weight: "400",
  variable: "--font-script",
  subsets: ["latin"],
});

const fontSerif = Cormorant_Garamond({
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  subsets: ["latin"],
});

const fontSans = Lato({
  weight: ["300", "400", "700"],
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Save the date",
  description: "Invitación a nuestra boda",
  themeColor: "#faf8f6",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth" style={{ colorScheme: "only light" }}>
      <head>
        <meta name="color-scheme" content="light" />
        <meta name="supported-color-schemes" content="light" />
        <meta name="theme-color" content="#faf8f6" />
      </head>
      <body
        className={`${fontScript.variable} ${fontSerif.variable} ${fontSans.variable} font-sans antialiased`}
      >
        <DecorativeSideImages />
        <div className="relative z-10 min-h-screen ml-[72px] mr-[72px] sm:ml-[168px] sm:mr-[168px] md:ml-[248px] md:mr-[248px] lg:ml-[288px] lg:mr-[288px]">
          {children}
        </div>
        <AudioToggle />
      </body>
    </html>
  );
}
