import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Navbar from "@/components/navbar";
import PagesList from "@/components/pagelist";

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
      <body className={inter.className}>
        <div className="flex flex-col h-screen">
          <Navbar/>

          <div className="flex flex-column items-stretch bg-red-300 h-full">
            <div className="w-1/3 bg-gray-900 m-4">
              <PagesList/>
            </div>
            <div className="w-2/3 bg-gray-900 m-4 ml-0">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
