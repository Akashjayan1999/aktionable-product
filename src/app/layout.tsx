import type { Metadata } from "next";
import { Geist, Geist_Mono, Quicksand, Varela_Round } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme.provider"
import { ThemeResetProvider } from "@/components/providers/theme-reset.provider";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const quicksand = Quicksand({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-quicksand",
});

const varelaRound = Varela_Round({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-varela-round",
});

export const metadata = {
  title: "Aktionable.AI",
  description: "AI-powered actionable insights platform",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable}  ${quicksand.variable} ${varelaRound.variable}  antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem ={false}
            disableTransitionOnChange
      >
        <ThemeResetProvider>
        {children}
        </ThemeResetProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
