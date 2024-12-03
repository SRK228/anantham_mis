import React, { createContext, useContext, useEffect } from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

interface ThemeContextType {
  fontSize: number;
}

const ThemeContext = createContext<ThemeContextType>({ fontSize: 16 });

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { fontSize } = useSelector((state: RootState) => state.settings);

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}px`;
  }, [fontSize]);

  return (
    <ThemeContext.Provider value={{ fontSize }}>
      <NextThemesProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </NextThemesProvider>
    </ThemeContext.Provider>
  );
}