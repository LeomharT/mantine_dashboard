import { PieChart } from '@mantine/charts';
import { data } from '../../mockdata/PieChart';
import { Text } from '@mantine/core';
import classes from '../../styles/Chart.module.css';

export default function PieChartDemo() {
    return (
        <div className={classes.pieChart}>
            <Text>Fruit Sales across countries</Text>
            <PieChart
                w={200}
                h={300}
                data={data}
                withTooltip
                tooltipDataSource="segment"
                mx="auto"
            />
        </div>
    );

}