import { Card, Title, useMantineTheme } from '@mantine/core';
import Charts from 'react-apexcharts';
export default function Radar() {
	const theme = useMantineTheme();

	return (
		<Card shadow='xs'>
			<Title order={3}>Radar</Title>
			<Charts
				width={'500'}
				type='radar'
				options={{
					chart: {
						toolbar: { show: false },
						zoom: {
							enabled: false,
						},
					},
					xaxis: {
						categories: [
							'January',
							'February',
							'March',
							'April',
							'May',
							'June',
						],
					},
					yaxis: {
						stepSize: 20,
						labels: {
							style: { colors: theme.colors.gray[5] },
						},
					},

					legend: {
						show: true,
						position: 'right',
						fontWeight: 700,
						itemMargin: { vertical: 12 },
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
						name: 'Series 1',
						data: [80, 50, 30, 40, 100, 20],
					},
					{
						name: 'Series 2',
						data: [70, 60, 40, 30, 70, 50],
					},
					{
						name: 'Series 3',
						data: [12, 10, 71, 22, 36, 15],
					},
				]}
			/>
		</Card>
	);
}
