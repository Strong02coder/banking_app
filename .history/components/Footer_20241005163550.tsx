import React from 'react'

const Footer = ({ user }: FooterProps) => {
	return (
		<footer className="footer">
			<div>
				<p>
					{user.name} ({user.firstNameName})
				</p>
			</div>
		</footer>
	)
}

export default Footer