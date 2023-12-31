import "./globals.css";
import { Inter } from "next/font/google";
import DarkThemeProvider from "./libs/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Weather Wizard",
  description: "Generated by create next app",
  keywords: ["weather", "next js"],
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className} suppressHydrationWarning={true}>
        <DarkThemeProvider>{children}</DarkThemeProvider>
      </body>
    </html>
  );
}
