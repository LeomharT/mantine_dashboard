import { Button, Center, Stack, Text, Title } from '@mantine/core';
import { modals } from '@mantine/modals';
import { IconLockAccess } from '@tabler/icons-react';
import Login from '../../components/Auth/Login';
import classes from './style.module.css';

export default function AuthError() {
	const auth = () => {
		modals.open({
			id: 'Authenticate',
			title: 'Authenticate Required',
			children: <Login />,
		});
	};

	return (
		<Center className={classes.root}>
			<Stack align='center'>
				<IconLockAccess className={classes.icon} />
				<Title className={classes.title}>
					Sorry Authenticate Required...
				</Title>
				<Text size='lg' ta='center' className={classes.description}>
					Our servers could not handle your request. Don&apos;t worry,
					our development team was already notified. Try refreshing
					the page.
				</Text>
				<Button variant='white' size='lg' onClick={auth}>
					Login on this page
				</Button>
			</Stack>
		</Center>
	);
}
