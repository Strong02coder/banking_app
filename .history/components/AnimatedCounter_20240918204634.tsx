'use client';

import 

const AnimatedCounter = ({amount}:{amount:number}) => {
	return (
		<div>
			<CountUp end={amount} />
		</div>
	)
}

export default AnimatedCounter