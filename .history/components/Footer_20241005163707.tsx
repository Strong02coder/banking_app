import React from 'react'

const Footer = ({ user }: FooterProps) => {
	return (
		<footer className="footer">
			<div className="footer_name">
				<p className="text-xl font-bold text-gray-600">
					{user.firstName[0]}
				</p>
			</div>
		</footer>
	)
}

export default Footer