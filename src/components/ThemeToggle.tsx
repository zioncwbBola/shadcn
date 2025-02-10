// src\components\ThemeToggle.tsx
'use client';
import { useEffect, useState } from 'react';
import { BiSun, BiMoon, BiWater } from 'react-icons/bi';

const ThemeToggle = () => {
  const themes = ['black', 'ocean-blues', 'deep-blue'];
  const [theme, setTheme] = useState('black');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') || 'black';
    setTheme(storedTheme);
    document.documentElement.setAttribute('data-theme', storedTheme);
  }, []);

  const toggleTheme = () => {
    const currentIndex = themes.indexOf(theme);
    const nextTheme = themes[(currentIndex + 1) % themes.length];
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('theme', nextTheme);
  };

  const getThemeIcon = () => {
    if (theme === 'black') return <BiMoon className="inline-block mr-2" />;
    if (theme === 'ocean-blues') return <BiWater className="inline-block mr-2" />;
    return <BiSun className="inline-block mr-2" />;
  };

  return (
    <button onClick={toggleTheme} className="btn btn-sm btn-primary mt-4">
      {getThemeIcon()} 
      {theme === 'black' ? 'Tema Escuro' : theme === 'ocean-blues' ? 'Tema Oceano' : 'Tema Azul Profundo'}
    </button>
  );
};

export default ThemeToggle;
