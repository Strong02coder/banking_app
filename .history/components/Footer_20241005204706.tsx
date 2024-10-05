import React from 'react'

const Footer = ({ user, type = 'desktop' }: FooterProps) => {
	return (
		<footer className="footer">
			<div className={type === 'mobile' ? "footer_name">
				<p className="text-xl font-bold text-gray-700">
					{user.firstName}
				</p>
			</div>
		</footer>
	)
}

export default Footer