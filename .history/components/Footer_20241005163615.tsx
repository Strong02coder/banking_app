import React from 'react'

const Footer = ({ user }: FooterProps) => {
	return (
		<footer className="footer">
			<div>
				<p>
					{user.firstName}
				</p>
			</div>
		</footer>
	)
}

export default Footer