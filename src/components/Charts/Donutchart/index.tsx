import { Card, Title } from '@mantine/core';
import Charts from 'react-apexcharts';

export default function Donutchart() {
	return (
		<Card shadow='xs'>
			<Title order={3}>Donut</Title>
			<Charts
				width={'500'}
				type='donut'
				options={{
					chart: {
						toolbar: { show: false },
						zoom: {
							enabled: false,
						},
					},
					plotOptions: {
						pie: {
							donut: {
								size: '90',
								labels: {
									show: true,
									total: {
										showAlways: false,
										show: true,
										fontSize: '24px',
										fontWeight: 700,
									},
								},
							},
						},
					},
					dataLabels: { enabled: false },
					legend: {
						show: true,
						position: 'top',
						fontWeight: 700,
						fontSize: '16px',
						markers: {
							width: 15,
							height: 15,
							radius: 10,
						},
					},

					labels: ['Apple', 'Mango', 'Orange', 'Watermalon'],
					colors: ['#00A76F', '#FFAB00', '#00B8D9', '#FF5630'],
				}}
				series={[44, 55, 13, 43]}
			/>
		</Card>
	);
}
