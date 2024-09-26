import Link from 'next/link'
import React from 'react'

const Sidebar = ({user}:SiderbarProps) => {
	return (
		<section className="sidebar">
			<nav className="flex flex-col gap-4">
				<Link href="/" className="mb-12 cursor-pointer items-center gap-2">
				<img src="/logo.png" alt="Logo" className="w-8 h-8
				  
				</Link>
			</nav>
		</section>
	)
}

export default Sidebar