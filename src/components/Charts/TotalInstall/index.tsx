import {
	ActionIcon,
	Card,
	Group,
	Select,
	Stack,
	Text,
	Title,
	useMantineTheme,
} from '@mantine/core';
import { IconTrendingUp } from '@tabler/icons-react';
import Charts from 'react-apexcharts';

export default function TotalInstalled() {
	const theme = useMantineTheme();

	return (
		<Card shadow='xs' w={532}>
			<Stack>
				<Group justify='space-between'>
					<Text c={'dimmed'}>Total installed</Text>
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
							colors: [theme.colors.green[7]],
						}}
					/>
				</Group>
				<Group gap={'xs'}>
					<ActionIcon variant='light' color={'green'} radius={'xl'}>
						<IconTrendingUp />
					</ActionIcon>
					<Text size='sm' fw={700}>
						+2.6%
					</Text>
					<Text size='sm' c={'dimmed'}>
						last week
					</Text>
				</Group>
			</Stack>
		</Card>
	);
}
