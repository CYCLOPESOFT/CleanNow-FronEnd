import { useState, useEffect } from 'react';

export const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    const localTheme = window.localStorage.getItem('theme');
    return localTheme || 'light';
  });

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      window.localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };

  useEffect(() => {
    const htmlElement = document.querySelector('html');
    if (theme === 'light') {
      htmlElement.classList.remove('dark');
    } else {
      htmlElement.classList.add('dark');
    }
  }, [theme]);


  return { theme, toggleTheme };
};
