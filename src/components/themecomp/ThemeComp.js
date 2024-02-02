"use client"
import React, { useState, useEffect } from 'react';
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md';
import { useTheme } from 'next-themes';

const ThemeComp = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  console.log(theme, "theme");

  return (
    <div>
      {mounted && (
        <div>
          {theme === 'dark' ? (
            <MdDarkMode onClick={() => setTheme("light")} className="cursor-pointer mr-4" size={25} />
          ) : (
            <MdOutlineLightMode onClick={() => setTheme("dark")} className="cursor-pointer mr-4" size={25} />
          )}
        </div>
      )}
    </div>
  );
};

export default ThemeComp;

