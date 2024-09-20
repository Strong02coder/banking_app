'use client';

import CountUp from "react-countup";

const AnimatedCounter = ({amount}:{amount:number}) => {
	return (
		<div>
			<CountUp 
			start={0}
			  decimal=","
  			prefix="₹ "
				end={amount}
			/>
		</div>
	)
}

export default AnimatedCounter