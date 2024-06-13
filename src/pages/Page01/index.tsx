import { Group, Stack } from '@mantine/core';
import Areachart from '../../components/Charts/Areachart';
import Barchart from '../../components/Charts/Barchart';
import ColumnMultiplechart from '../../components/Charts/ColumnMultiplechart';
import Columnchart from '../../components/Charts/Columnchart';
import Donutchart from '../../components/Charts/Donutchart';
import Linechart from '../../components/Charts/Linechart';
import Mixchart from '../../components/Charts/Mixchart';
import Piechart from '../../components/Charts/Piechart';
import VectorMap from '../../components/Charts/VectorMap';

export default function Page01() {
	return (
		<Stack>
			<VectorMap />
			<Group m={'0 auto'} justify='space-between' maw={'max-content'}>
				<Areachart />
				<Linechart />
			</Group>
			<Group m={'0 auto'} justify='space-between' maw={'max-content'}>
				<Columnchart />
				<ColumnMultiplechart />
			</Group>
			<Group m={'0 auto'} justify='space-between' maw={'max-content'}>
				<Barchart />
				<Mixchart />
			</Group>
			<Group m={'0 auto'} justify='space-between' maw={'max-content'}>
				<Piechart />
				<Donutchart />
			</Group>
		</Stack>
	);
}
