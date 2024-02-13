'use client';
import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
	text: '#222222',
	textTransparent: '#22222291',
	toggleBorder: '#FFF',
	background: '#FFF',
};

export const darkTheme = {
	text: '#f9ead9',
	textTransparent: '#f9ead98d',
	background: '#222222',
};

const GlobalStyles = createGlobalStyle`
  :root {
	--max-width: 1100px;
	--font-mono: ui-monospace, Menlo, Monaco, 'Cascadia Mono', 'Segoe UI Mono',
		'Roboto Mono', 'Oxygen Mono', 'Ubuntu Monospace', 'Source Code Pro',
		'Fira Mono', 'Droid Sans Mono', 'Courier New', monospace;

	--background-color: ${({ theme }) => theme.background};
	--text-color: ${({ theme }) => theme.text};
	--text-transparent: ${({ theme }) => theme.textTransparent};
}

* {
	box-sizing: border-box;
	padding: 0;
	margin: 0;
	
}

html,
body {
	max-width: 100vw;
	overflow: hidden;
	
}

body {
	background: var(--background-color);
    color: var(--text-color);
    transition: background 0.2s ease-in, color 0.2s ease-in;
}
/* 
h1{
	color: var(--text-color)
}
p {
	color: var(--text-color)
} */

a {
	color: inherit;
	text-decoration: none;
}
`;

export default GlobalStyles;
