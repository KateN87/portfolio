'use client';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
	--max-width: 1100px;
	--font-mono: ui-monospace, Menlo, Monaco, 'Cascadia Mono', 'Segoe UI Mono',
		'Roboto Mono', 'Oxygen Mono', 'Ubuntu Monospace', 'Source Code Pro',
		'Fira Mono', 'Droid Sans Mono', 'Courier New', monospace;

	--background-color: #222222;
	--text-color: #f9ead9;
}

* {
	box-sizing: border-box;
	padding: 0;
	margin: 0;
	color: var(--text-color);
}

html,
body {
	max-width: 100vw;
	overflow: hidden;
}

body {
	background-color: var(--background-color);
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
