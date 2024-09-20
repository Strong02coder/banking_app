"use-client";

import { Chart as ChartJs, ArcElement, Tooltip, Legend } from "chart.js"
import { Doughnut } from 'react-chartjs-2';

ChartJs.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({accounts}:DoughnutChartProps) => {
	const data = {
		datasets: [{
			label: 'Banks',
			data: ,
			backgroundColor: [
		}]
	}
	return <Doughnut data={[]}/>
}

export default DoughnutChart