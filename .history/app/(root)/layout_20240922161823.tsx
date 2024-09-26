import Sidebar from "@/components/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
	const loggedIn = { firstname : 'Aryan', last}
  return (
    <main className="flex h-screen w-full font-inner">
			<Sidebar/>
			{children}
		</main>
  );
}
