import { Card, Title } from '@mantine/core';
import Charts from 'react-apexcharts';

export default function Radial() {
	return (
		<Card shadow='xs'>
			<Title order={3}>Radial</Title>
			<Charts
				width={'500'}
				type='radialBar'
				options={{
					chart: {
						toolbar: { show: false },
						zoom: {
							enabled: false,
						},
					},
					stroke: {
						lineCap: 'round',
					},
					plotOptions: {
						radialBar: {
							hollow: {
								size: '60%',
							},
							dataLabels: {
								show: true,
								total: {
									show: true,
									fontSize: '24px',
									fontWeight: 700,
								},
							},
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
				series={[44, 55, 13, 43]}
			/>
		</Card>
	);
}
