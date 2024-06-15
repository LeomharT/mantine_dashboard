'use client';
import { AppShellNavbar, NavLink } from '@mantine/core';
import {
	Icon2fa,
	IconChartArcs,
	IconChartHistogram,
	IconDatabaseImport,
	IconFingerprint,
	IconKey,
	IconSettings,
} from '@tabler/icons-react';
import { useState } from 'react';
import { useNavigate } from 'react-router';

export default function AppNavbar() {
	const navigate = useNavigate();

	const [active, setActive] = useState('Notifications');

	const tabs = [
		{ link: '/', label: 'Notifications', icon: <IconChartHistogram /> },
		{ link: 'page01', label: 'Billing', icon: <IconChartArcs /> },
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
					onClick={() => {
						setActive(tab.label);
						navigate(tab.link ?? '');
					}}
					key={tab.label}
					leftSection={tab.icon}
					label={tab.label}
				/>
			))}
		</AppShellNavbar>
	);
}
