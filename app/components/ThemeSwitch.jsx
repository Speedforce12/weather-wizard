"use client";

import { useState } from "react";
import { Switch } from "@headlessui/react";
import { useTheme } from "next-themes";

export default function ThemeSwitch() {
  const [enabled, setEnabled] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  return (
    <div
      className={`relative flex h-6 w-12 flex-shrink-0 cursor-pointer items-center rounded-full bg-gray-600 px-0.5 duration-500 transition-all ease-in ${
        resolvedTheme === "dark" ? "justify-end " : "justify-start"
      }`}
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}>
      <span className='absolute left-0'>🌜</span>
      <div
        className='z-40 h-5 w-5 rounded-full bg-white'
       
      />

      <span className='absolute right-0.5'>🌞</span>
    </div>
  );
}
