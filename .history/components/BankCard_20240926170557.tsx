import Link from 'next/link'
import React from 'react'

const BankCard = ({ account, userName, showBalance = true}: CreditCardProps) => {
	return (
		<div className="flex flex-col">
			<Link href="/" className="bank-card">
			  <div className="bank-card">
					<div>
						<h1>

						</h1>
					</div>
				</div>
			</Link>
		</div>
	)
}

export default BankCard