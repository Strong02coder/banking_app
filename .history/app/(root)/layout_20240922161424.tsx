import { Sidebar } from "C:\Users\Aryan Agrawal\OneDrive\Documents\banking_app\components\Sidebar.tsx";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
			<Sidebar/>
			{children}
		</main>
  );
}
