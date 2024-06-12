import { Card, Title, useMantineTheme } from '@mantine/core';
import Chart from 'react-apexcharts';

export default function Mixchart() {
	const theme = useMantineTheme();

	return (
		<Card shadow='xs'>
			<Title order={3}>Mix</Title>
			<Chart
				options={{
					chart: {
						toolbar: { show: false },
						zoom: {
							enabled: false,
						},
						stacked: false,
					},
					dataLabels: {
						enabled: false,
					},
					plotOptions: {
						bar: {
							columnWidth: '20%',
							borderRadius: 5,
							borderRadiusApplication: 'end',
						},
					},
					grid: {
						strokeDashArray: 3,
					},
					stroke: {
						width: [0, 3, 3],
						curve: 'smooth',
					},
					fill: {
						opacity: [1, 1, 1],
						type: ['solid', 'gradient', 'solid'],
						gradient: {
							shade: 'light',
							type: 'vertical',
							opacityFrom: 0.5,
							opacityTo: 0,
							stops: [0, 100, 100],
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
					{
						data: [25, 20, 45, 40, 13, 20, 37, 75, 41],
						type: 'bar',
					},
					{
						data: [30, 40, 45, 50, 49, 60, 70, 75, 60],
						type: 'area',
					},
					{
						data: [55, 49, 61, 66, 45, 58, 51, 47, 17],
						type: 'line',
					},
				]}
				type='line'
				width='500'
			/>
		</Card>
	);
}
