'use client';

import CountUp from "react-countup";

const AnimatedCounter = ({amount}:{amount:number}) => {
	return (
		<div>
			<CountUp 
				duration={2.55}
				decimals={2}
			  decimal=","
  			prefix="₹ "
				end={amount}
			/>
		</div>
	)
}

export default AnimatedCounter