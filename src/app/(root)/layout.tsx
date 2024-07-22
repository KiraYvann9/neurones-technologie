
import type { Metadata } from "next";

import { Inter } from "next/font/google";
import "../globals.css";
import { cn } from "@/lib/utils";
import {FirstNav, FooterComponent, Navbar} from "@/components";
import {NavigationEvents} from "@/components/NavigationEvent";
import {Suspense} from "react";
import {PiChatsFill} from "react-icons/pi";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={cn('relative min-h-screen w-full flex flex-col items-center',inter.className)}>
        <div className={cn('fixed w-full z-30 drop-shadow-md')}>
            <FirstNav/>
            <Navbar/>
        </div>
        <main className={'relative min-h-screen w-full'}>
            <Suspense fallback={null}>
                <NavigationEvents/>
            </Suspense>
            <div
                className={'hidden sm:flex fixed z-50 bottom-36  drop-shadow-lg left-[-55px] rounded-b-xl bg-custom-orange py-2 px-4 rotate-[-90deg] text-sm'}>
                <PiChatsFill size={22} className={'mr-2'}/> Votre avis compte
            </div>
            {children}
        </main>
        <FooterComponent/>
      </body>
    </html>
  );
}
