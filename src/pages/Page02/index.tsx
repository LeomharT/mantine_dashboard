import { Group, Stack } from '@mantine/core';
import Radar from '../../components/Charts/Radar';
import Radial from '../../components/Charts/Radial';

export default function Page02() {
	return (
		<Stack>
			<Group m={'0 auto'} justify='space-between' maw={'max-content'}>
				<Radial />
				<Radar />
			</Group>
		</Stack>
	);
}
