'use client';
import React, { createContext, useState, ReactNode } from 'react';

type ThemeContextType = {
	theme: string;
	toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
	theme: 'light',
	toggleTheme: () => {},
});

const ThemeProvider = ({ children }: { children: ReactNode }) => {
	const [theme, setTheme] = useState('light');

	const toggleTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light');
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export { ThemeContext, ThemeProvider };
