import { Nunito } from 'next/font/google';
import './globals.css';

const nunito = Nunito({
	subsets: ['cyrillic'],
	variable: '--font-nunito',
	weight: ['400', '500', '600', '700', '800', '900'],
});

export default function RootLayout({
	children,
}: Readonly<{
	modal: React.ReactNode;
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${nunito.variable} ${nunito.variable} antialiased`}>
				{children}
			</body>
		</html>
	);
}
