import { Card, Title, useMantineTheme } from '@mantine/core';
import Chart from 'react-apexcharts';

export default function Linechart() {
	const theme = useMantineTheme();

	return (
		<Card shadow='xs'>
			<Title order={3}>Area</Title>
			<Chart
				options={{
					chart: {
						toolbar: { show: false },
						zoom: {
							enabled: false,
						},
					},
					dataLabels: {
						enabled: false,
					},
					grid: {
						strokeDashArray: 3,
					},
					stroke: { curve: 'smooth', width: 3 },
					yaxis: {
						min: 0,
						max: 80,
						stepSize: 20,
						labels: {
							style: { colors: [theme.colors.gray[5]] },
						},
					},
					xaxis: {
						categories: [
							'Feb',
							'Mar',
							'Apr',
							'May',
							'Jun',
							'Jul',
							'Aug',
							'Sep',
							'Oct',
						],
						labels: {
							style: { colors: theme.colors.gray[5] },
						},
					},
					colors: ['#00A76F', '#FFAB00', '#00B8D9', '#FF5630'],
				}}
				series={[{ data: [30, 40, 45, 50, 53, 60, 70, 75, 78] }]}
				type='line'
				width='500'
			/>
		</Card>
	);
}
