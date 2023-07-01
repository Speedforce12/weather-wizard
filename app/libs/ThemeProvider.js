// app/providers.jsx

"use client";

import { ThemeProvider } from "next-themes";

const DarkThemeProvider = ({ children }) => {
  return <ThemeProvider attribute='class'>{children}</ThemeProvider>;
};

export default DarkThemeProvider;
