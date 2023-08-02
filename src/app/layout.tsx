import "@/styles/globals.css";
import { Metadata } from "next";

import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/layout/Header";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { exofont } from "@/lib/fonts";

import { TrpcProvider } from "@/provider/trpc-provider";
import { ThemeProvider } from "@/provider/theme-provider";
import Footer from "@/components/layout/Footer";
//import { SessionProvider } from "next-auth/react";
//import { type Session } from 'next-auth';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    //shortcut: "/favicon-16x16.png",
    //apple: "/apple-touch-icon.png",
  },
};

export default async function RootLayout({
  children,
  //session,
}: {
  children: React.ReactNode;
  //session: Session | null | undefined;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen max-w-[1920px] mx-auto bg-background relative",
          exofont.className
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <TrpcProvider>
            {/* <SessionProvider refetchOnWindowFocus={false} session={session} > */}
            <div id="fastone">
            <div className="fastoneApp relative">
              <Header />
              {children}
              <Footer />
            </div>
            </div>
            {/* </SessionProvider> */}
          </TrpcProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
