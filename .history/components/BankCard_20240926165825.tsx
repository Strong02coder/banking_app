import Link from 'next/link'
import React from 'react'

const BankCard = ({ account, userName, showBalance = true}: CreditCardProps) => {
	return (
		<div>
			<Link>
			  <a href="#" className="bank-card__logo">
			</Link>
		</div>
	)
}

export default BankCard