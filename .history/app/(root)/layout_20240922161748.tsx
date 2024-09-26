import Sidebar from "@/components/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
	const 
  return (
    <main className="flex h-screen w-full font-inner">
			<Sidebar/>
			{children}
		</main>
  );
}
