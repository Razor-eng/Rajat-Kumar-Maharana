import { ThemeProvider } from "@/Provider/ThemeProvider";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { AnimatePresence } from "framer-motion";
import Footer from "@/components/Footer";
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: '--font-mont'
})

export const metadata = {
  title: "Rajat Kumar Maharana",
  description: "Portfolio created by next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className={`${montserrat.variable} font-mont bg-light w-full dark:bg-dark min-h-screen`}>
            <Navbar />
            <AnimatePresence mode='wait'>
              {children}
            </AnimatePresence>
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
