"use-client";

import { Chart as ChartJs, ArcElement, Tooltip, Legend } from "chart.js"
import { Doughnut } from 'react-chartjs-2';

ChartJs.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({accounts}:DoughnutChartProps) => {
	const data = {
		datasets: [{
			label: 'Banks',
			data: [1250, 5000, 2400],
			backgroundColor: ['#0747b6', '#2265d8', '#2f']
		}]
	}
	return <Doughnut data={[]}/>
}

export default DoughnutChart