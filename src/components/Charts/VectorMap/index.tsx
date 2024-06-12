import { Card } from '@mantine/core';
//@ts-ignore
import jsVectorMap from 'jsvectormap';
import 'jsvectormap/dist/maps/world';
import { useEffect } from 'react';

export default function VectorMap() {
	useEffect(() => {
		const map = new jsVectorMap({
			selector: '#map',
			map: 'world',
		});

		console.log(map);
	}, []);
	return (
		<Card shadow='xs'>
			<div id='map'></div>
		</Card>
	);
}
