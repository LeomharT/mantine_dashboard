import {
	ActionIcon,
	Card,
	Group,
	Select,
	Stack,
	Text,
	Title,
} from '@mantine/core';
import { IconTrendingDown } from '@tabler/icons-react';
import Charts from 'react-apexcharts';

export default function TotalUser() {
	return (
		<Card shadow='xs' w={532}>
			<Stack>
				<Group justify='space-between'>
					<Text c={'dimmed'}>Total active users</Text>
					<Select
						w={128}
						size='xs'
						allowDeselect={false}
						defaultValue={'Last 7 days'}
						data={['Last 7 days', 'Last 30 days', 'Last month']}
					/>
				</Group>
				<Group justify='space-between'>
					<Title>18,765</Title>
					<Charts
						type='bar'
						width={60}
						height={40}
						series={[{ data: [15, 18, 12, 51, 68, 11, 39, 37] }]}
						options={{
							chart: {
								toolbar: {
									show: false,
								},
								zoom: {
									enabled: false,
								},
								sparkline: {
									enabled: true,
								},
							},
							plotOptions: {
								bar: {
									borderRadius: 2,
									borderRadiusApplication: 'end',
								},
							},
						}}
					/>
				</Group>
				<Group gap={'xs'}>
					<ActionIcon variant='light' color={'red'} radius={'xl'}>
						<IconTrendingDown />
					</ActionIcon>
					<Text size='sm' fw={700}>
						-12.0%
					</Text>
					<Text size='sm' c={'dimmed'}>
						last week
					</Text>
				</Group>
			</Stack>
		</Card>
	);
}
