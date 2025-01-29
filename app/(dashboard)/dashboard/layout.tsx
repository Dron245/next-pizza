import type { Metadata } from 'next';
import '../../globals.css';



export const metadata: Metadata = {
	title: 'Create Next App',
};

export default function DashLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
				KJENFSDFNDFNSKDJFN SKD NSKDJNF KSJD N
				<main className='min-h-screen'>{children}</main>
				</>
	);
}
