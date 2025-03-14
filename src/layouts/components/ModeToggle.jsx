import React from 'react';
import { MoonStar, Sun } from 'lucide-react';
import { useTheme } from '../../context/ThemeProvider';

export default function ModeToggle() {
  const { setTheme, theme } = useTheme();
  const changeTheme = (e) => {
    e.stopPropagation();
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div
      onClick={changeTheme}
      className="relative flex select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground cursor-pointer">
      <div className="flex flex-1 items-center">
        {theme === 'light' ? (
          <MoonStar className="mr-2 h-4 w-4 text-purple-500 fill-purple-400" />
        ) : (
          <Sun className="mr-2 h-4 w-4 text-yellow-500 fill-yellow-400" />
        )}
        <span>{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</span>
      </div>
    </div>
  );
}
