import { Chart as ChartJs, ArcElement, Tooltip, Legend } from "chart.js"
import { Doughnut } from 'react-chartjs-2';

ChartJs.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({accounts}:DoughnutChartProps) => {
	return <Doughnut data={[]}/>
}

export default DoughnutChart