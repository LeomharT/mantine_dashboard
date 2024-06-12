'use client';
import { AppShellNavbar, NavLink } from '@mantine/core';
import {
	Icon2fa,
	IconChartHistogram,
	IconDatabaseImport,
	IconFingerprint,
	IconKey,
	IconReceipt2,
	IconSettings,
} from '@tabler/icons-react';
import { useState } from 'react';

export default function AppNavbar() {
	const [active, setActive] = useState('Notifications');

	const tabs = [
		{ link: '', label: 'Notifications', icon: <IconChartHistogram /> },
		{ link: '', label: 'Billing', icon: <IconReceipt2 /> },
		{ link: '', label: 'Security', icon: <IconFingerprint /> },
		{ link: '', label: 'SSH Keys', icon: <IconKey /> },
		{ link: '', label: 'Databases', icon: <IconDatabaseImport /> },
		{ link: '', label: 'Authentication', icon: <Icon2fa /> },
		{ link: '', label: 'Other Settings', icon: <IconSettings /> },
	];

	return (
		<AppShellNavbar p={'sm'}>
			{tabs.map((tab) => (
				<NavLink
					active={tab.label === active}
					onClick={() => setActive(tab.label)}
					key={tab.label}
					leftSection={tab.icon}
					label={tab.label}
				/>
			))}
		</AppShellNavbar>
	);
}
