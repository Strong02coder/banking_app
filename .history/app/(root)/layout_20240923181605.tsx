import Sidebar from "@/components/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
	const loggedIn = {firstname: 'Aryan', lastname: 'Agrawal'}
  return (
    <main className="flex h-screen w-full font-inner">
			<Sidebar user = {loggedIn}/>
			<div className="flex size-full flex-col">
				<div className="root-layout">
					<Image />
				</div>
			</div>
			{children}
		</main>
  );
}
