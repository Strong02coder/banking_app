import React from 'react'

const Rightsidebar = ({ user, transaction, banks}: RightSidebarProps) => {
	return (
		<aside className="right-sidebar">
			<section className="flex flex-col pb-8">
				<div className="profile-banner"/>
				<div className="profile">
					<div className="profile-img">
						<span className="text-5xl font-bold text-blue-500">{user.firstName[0]}</span>
					</div>
					<div className="text-5xl">
						<h1>
							{user.firstName} {user.lastName} 
						</h1>
					</div>
				</div>
			</section>
		</aside>
	)
}

export default Rightsidebar