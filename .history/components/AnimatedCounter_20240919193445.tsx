'use client';

import CountUp from "react-countup";

const AnimatedCounter = ({amount}:{amount:number}) => {
	return (
		<div cl>
			<CountUp 
				duration={2.35}
				decimals={2}
			  decimal=","
  			prefix="₹ "
				end={amount}
			/>
		</div>
	)
}

export default AnimatedCounter