import type { Metadata } from 'next';
import '../globals.css';
import { Header } from '../shared/components/shared';

export const metadata: Metadata = {
	title: 'Create Next App',
	icons: {
		icon: '/logo.png',
	},
};

export default function HomeLayout({
	children,
	modal,
}: Readonly<{
	children: React.ReactNode;
	modal: React.ReactNode;
}>) {
	return (
		<>
			<Header />
			<main className='min-h-screen'>
				{children}
				{modal}
			</main>
		</>
	);
}
