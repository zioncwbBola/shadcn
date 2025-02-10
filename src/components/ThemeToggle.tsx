'use client';
import { useEffect, useState } from 'react';
import { BiSun, BiMoon } from 'react-icons/bi';

const ThemeToggle = () => {
  const [theme, setTheme] = useState('black');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') || 'black';
    setTheme(storedTheme);
    document.documentElement.setAttribute('data-theme', storedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'black' ? 'corporate' : 'black';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <button onClick={toggleTheme} className="btn btn-sm btn-primary mt-4">
      {theme === 'black' ? (
        <>
          <BiSun className="inline-block mr-2" /> Tema Claro
        </>
      ) : (
        <>
          <BiMoon className="inline-block mr-2" /> Tema Escuro
        </>
      )}
    </button>
  );
};

export default ThemeToggle;
