'use client';
import {
	ActionIcon,
	AppShellHeader,
	Group,
	useMantineColorScheme,
} from '@mantine/core';
import { MantineLogo } from '@mantinex/mantine-logo';
import { IconMoon, IconSun } from '@tabler/icons-react';
export default function AppHeader() {
	const { colorScheme, toggleColorScheme } = useMantineColorScheme();

	return (
		<AppShellHeader>
			<Group h='100%' px='md' justify='space-between'>
				<MantineLogo size={30} />
				<ActionIcon
					size={'xl'}
					variant='default'
					onClick={toggleColorScheme}
				>
					{colorScheme === 'light' ? <IconMoon /> : <IconSun />}
				</ActionIcon>
			</Group>
		</AppShellHeader>
	);
}
