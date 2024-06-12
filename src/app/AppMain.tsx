import { AppShellMain } from '@mantine/core';
import Chart from "react-apexcharts";

export default function AppMain() {
	return <AppShellMain>
		 <Chart
               series={[{data:[30, 40, 45, 50, 49, 60, 70, 91]}] }
              type="bar"
              width="500"
            />
	</AppShellMain>;
}
 