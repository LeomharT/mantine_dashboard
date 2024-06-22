import { AppShell, MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { Notifications } from '@mantine/notifications';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AuthError from '../pages/AuthError';
import AppHeader from './AppHeader';
import AppMain from './AppMain';
import AppNavbar from './AppNavbar';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
});

export default function App() {
	const auth = sessionStorage.getItem('auth');

	return (
		<QueryClientProvider client={queryClient}>
			<MantineProvider withCssVariables defaultColorScheme={'light'}>
				<Notifications position='top-center' />
				<ModalsProvider>
					{auth ? (
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
					) : (
						<AuthError />
					)}
				</ModalsProvider>
			</MantineProvider>
		</QueryClientProvider>
	);
}
