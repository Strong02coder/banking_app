import React from 'react'

const Footer = ({ user }: FooterProps) => {
	return (
		<footer className="footer">
			<div className="footer_">
				<p>
					{user.firstName[0]}
				</p>
			</div>
		</footer>
	)
}

export default Footer