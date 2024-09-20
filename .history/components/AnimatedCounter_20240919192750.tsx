'use client';

import CountUp from "react-countup";

const AnimatedCounter = ({amount}:{amount:number}) => {
	return (
		<div>
			<CountUp 
			start={0}
			end={amount}/>
		</div>
	)
}

export default AnimatedCounter