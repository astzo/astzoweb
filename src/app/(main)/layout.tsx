import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/frontend/shared/Navbar";
import ParticlesBackground from "@/components/frontend/shared/ParticalsBackground";

export const metadata: Metadata = {
  title: "ASTZO",
  description: "Advanced Solutions for Technology and Operations",
};
const montserrat = Montserrat({
  variable: "--font-montserrat-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${montserrat.variable} antialiased font-[family-name:var(--font-montserrat-sans)]`}
      >
        <Navbar />
        <main className='relative min-h-screen'>
          <ParticlesBackground />
          {children}
        </main>
        <footer>
          <div className='container mx-auto px-4 py-8 text-center text-sm text-gray-500'>
            &copy; {new Date().getFullYear()} astzo. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
