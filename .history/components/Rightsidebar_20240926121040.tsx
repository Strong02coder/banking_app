import React from 'react'

const Rightsidebar = ({ user, transaction, banks}: RightSidebarProps) => {
	return (
		<aside className="right-sidebar">
			<section className="flex flex-col pb-8">
				<div className="profile-banner"/>
				<div className="profile">
					<div className="profile-img">
						<span>{user.firstName[Range()]}</span>
					</div>
				</div>
			</section>
		</aside>
	)
}

export default Rightsidebar