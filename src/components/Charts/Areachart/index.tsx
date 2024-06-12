import { Card, Title, useMantineTheme } from '@mantine/core';
import Chart from 'react-apexcharts';

export default function Areachart() {
	const theme = useMantineTheme();

	return (
		<Card shadow='xs'>
			<Title order={3}>Area </Title>
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
					stroke: {
						width: 3,
					},
					fill: {
						type: 'gradient',
						gradient: {
							opacityFrom: 0.4,
							opacityTo: 0,
						},
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
					colors: ['#00A76F', '#FFAB00', '#00B8D9', '#FF5630'],
				}}
				series={[
					{ data: [30, 40, 45, 50, 49, 60, 70, 75, 60] },
					{ data: [20, 33, 15, 12, 30, 25, 26, 54, 33] },
				]}
				type='area'
				width='500'
			/>
		</Card>
	);
}
