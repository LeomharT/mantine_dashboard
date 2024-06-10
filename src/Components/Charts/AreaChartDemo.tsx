import { AreaChart } from '@mantine/charts';
import { data } from '../../mockdata/AreaChart';
import { Text } from '@mantine/core';
import classes from '../../styles/Chart.module.css';

export default function AreaChartDemo() {
  return (
    <div className={classes.areaChart}>
      <Text>Fruit Sales within Australia</Text>
      <AreaChart
        w={600}
        h={300}
        data={data}
        dataKey="date"
        withLegend
        series={[
          { name: 'Apples', color: 'indigo.6' },
          { name: 'Oranges', color: 'blue.6' },
          { name: 'Tomatoes', color: 'teal.6' },
        ]}
        curveType="linear"
      />
    </div>
  );
}