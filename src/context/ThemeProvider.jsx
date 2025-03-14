import { createContext, useContext, useEffect, useState } from 'react';

const initialState = {
  theme: 'light',
  setTheme: () => null,
};

const ThemeProviderContext = createContext(initialState);

const AppVersion = '!Brogrammers';

export function ThemeProvider({
  children,
  defaultTheme = `${AppVersion.brand == 'Brogrammers' ? 'light' : 'light_edu'}`,
  storageKey = 'vite-ui-theme',
  ...props
}) {
  const [theme, setTheme] = useState(() => localStorage.getItem(storageKey) || defaultTheme);

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove('light', 'dark');

    root.classList.add(theme);
  }, [theme]);

  const value = {
    theme,
    setTheme: (newTheme) => {
      localStorage.setItem(storageKey, newTheme);
      setTheme(newTheme);
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value} className="min-h-screen">
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
};
