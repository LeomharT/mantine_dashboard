import { AppShellMain } from '@mantine/core';
import { Outlet } from 'react-router';

export default function AppMain() {
	return (
		<AppShellMain>
			<Outlet />
		</AppShellMain>
	);
}
