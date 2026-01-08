import type { Metadata } from "next";
import { inter, poppins } from './fonts'
import "./globals.css";
import { SearchProvider } from "./context/searchContext";



export const metadata: Metadata = {
  title: "Waka NG",
  description: "Your home of trusted gadgets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SearchProvider>
      <html lang="en">
        <body  className={`${inter.variable} ${poppins.variable}`}
        >
          {children}
        </body>
      </html>
    </SearchProvider>
  );
}
