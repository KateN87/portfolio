'use client';
import { useContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './globalstyles';
import { ThemeContext } from './ThemeContext';

const ThemeClient = ({ children }: { children: React.ReactNode }) => {
	const { theme } = useContext(ThemeContext);
	const isDarkTheme = theme === 'dark';
	return (
		<ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
			{children}
		</ThemeProvider>
	);
};

export default ThemeClient;
