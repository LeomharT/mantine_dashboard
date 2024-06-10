import { AppShellMain } from '@mantine/core';
import AreaChartDemo from '../Components/Charts/AreaChartDemo';
import PieChartDemo from '../Components/Charts/PieChartDemo';
import classes from '../styles/Chart.module.css';

export default function AppMain() {
	return (
		<AppShellMain>
			<div className={classes.chart}>
				<AreaChartDemo />
				<PieChartDemo />
			</div>
		</AppShellMain>
	);
}
