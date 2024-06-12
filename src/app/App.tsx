import { AppShell, MantineProvider } from '@mantine/core';
import AppHeader from './AppHeader';
import AppMain from './AppMain';
import AppNavbar from './AppNavbar';

export default function App() {
	return (
		<MantineProvider withCssVariables defaultColorScheme={'light'}>
			<AppShell
				padding={'sm'}
				header={{ height: 64 }}
				navbar={{
					width: 300,
					breakpoint: 'sm',
					collapsed: {
						mobile: true,
					},
				}}
			>
				<AppNavbar />
				<AppHeader />
				<AppMain />
			</AppShell>
		</MantineProvider>
	);
}
