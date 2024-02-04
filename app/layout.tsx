import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import StyledComponentsRegistry from './lib/registry';
import GlobalStyles from './globalstyles';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Kates Portfolio',
	description: 'Portfolio site for Kate Nordqvist',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<link rel='icon' type='image/x-icon' href='/favicon.png'></link>
			<body className={inter.className}>
				<StyledComponentsRegistry>
					<GlobalStyles />
					{children}
				</StyledComponentsRegistry>
			</body>
		</html>
	);
}
