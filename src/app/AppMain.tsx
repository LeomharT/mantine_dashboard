import { AppShellMain, Group, Stack } from '@mantine/core';
import BarMultiplechart from '../components/Charts/BarMultiplechart';
import BarCharts from '../components/Charts/Barchart';
import VectorMap from '../components/Charts/VectorMap';

export default function AppMain() {
	return (
		<AppShellMain>
			<Stack>
				<VectorMap />
				<Group m={'0 auto'} justify='space-between' maw={'max-content'}>
					<BarCharts />
					<BarMultiplechart />
				</Group>
			</Stack>
		</AppShellMain>
	);
}
