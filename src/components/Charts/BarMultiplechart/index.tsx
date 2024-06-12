import { Card, Title, useMantineTheme } from '@mantine/core';
import Chart from 'react-apexcharts';

export default function BarMultiplechart() {
	const theme = useMantineTheme();

	return (
		<Card shadow='xs'>
			<Title order={3}>Column Multiple</Title>
			<Chart
				options={{
					chart: {
						width: 350,
						toolbar: { show: false },
						zoom: {
							enabled: false,
						},
					},
					dataLabels: {
						enabled: false,
					},
					plotOptions: {
						bar: {
							columnWidth: '40%',
							borderRadius: 4,
							borderRadiusApplication: 'end',
						},
					},
					stroke: {
						width: 0,
					},
					grid: {
						strokeDashArray: 3,
					},
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
					legend: {
						show: true,
						position: 'top',
						horizontalAlign: 'right',
						fontWeight: 700,
						fontSize: '16px',
						markers: {
							width: 15,
							height: 15,
							radius: 10,
						},
					},
				}}
				series={[
					{ data: [30, 40, 45, 50, 49, 60, 70, 75, 60] },
					{ data: [20, 33, 15, 12, 30, 25, 26, 54, 33] },
				]}
				type='bar'
				width='500'
			/>
		</Card>
	);
}
