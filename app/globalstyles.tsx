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
}

html,
body {
	max-width: 100vw;
	overflow-x: hidden;
}

body {
	background-color: var(--background-color)
}

p {
	color: var(--text-color)
}

a {
	color: inherit;
	text-decoration: none;
}
`;

export default GlobalStyles;
