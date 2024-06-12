import { Card, Title, useMantineTheme } from '@mantine/core';
//@ts-ignore
import jsVectorMap from 'jsvectormap';
import 'jsvectormap/dist/maps/world';
import { useEffect } from 'react';
import classes from './style.module.css';

export default function VectorMap() {
	const theme = useMantineTheme();

	useEffect(() => {
		const el = document.querySelector('#map');

		if (el) el.innerHTML = '';

		const map = new jsVectorMap({
			selector: '#map',
			map: 'world',
			zoomButtons: false,
			zoomOnScroll: false,
			regionsSelectable: true,
			visualizeData: {
				scale: [theme.colors.blue[1], theme.colors.blue[7]],
				values: {
					EG: 29,
					CN: 150,
					US: 50,
					CA: 90,
					BR: 75,
				},
			},
		});

		console.log(map);
	}, []);
	return (
		<Card shadow='xs' classNames={{ ...classes }}>
			<Title order={3}>VectorMap</Title>
			<div id='map'></div>
		</Card>
	);
}
