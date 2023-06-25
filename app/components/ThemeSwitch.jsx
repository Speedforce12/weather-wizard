"use client";

import { useState } from "react";
import { Switch } from "@headlessui/react";

export default function ThemeSwitch() {
  const [enabled, setEnabled] = useState(false);

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`bg-gray-400 relative inline-flex h-6 w-14 items-center rounded-full`}>
      <span className='sr-only'>Enable notifications</span>
      <div
        className={` ${
          enabled ? "translate-x-9" : "translate-x-1"
        }  h-4 w-4 transform rounded-full transition-all duration-300 ease-in`}>
        {enabled ? (
          <span className='absolute right-0.5 -top-1'>🌜</span>
        ) : (
          <span className='absolute left-0.5 -top-1'>🌞</span>
        )}
      </div>
    </Switch>
  );
}

