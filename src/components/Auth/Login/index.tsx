import { Button, Group, PasswordInput, Stack, TextInput } from '@mantine/core';
import { isNotEmpty, useForm } from '@mantine/form';
import { modals } from '@mantine/modals';
import { notifications } from '@mantine/notifications';
import { IconArrowLeft, IconX } from '@tabler/icons-react';
import sleep from '../../../utils/sleep';

interface LoginInput {
	user?: string;
	pass?: string;
}
export default function Login() {
	const { getInputProps, onSubmit, onReset, reset } = useForm({
		initialValues: {
			user: '',
			pass: '',
		},
		validate: {
			user: isNotEmpty('Please enter username'),
			pass: isNotEmpty('Please enter password'),
		},
	});

	const login = async (data: LoginInput) => {
		modals.closeAll();

		const id = notifications.show({
			id: 'Authenticate',
			title: 'Authenticate',
			loading: true,
			message: 'Loading...',
		});

		await sleep(2000);

		if (data.user !== 'admin' || data.pass !== 'admin!') {
			notifications.update({
				id,
				color: 'red',
				loading: false,
				icon: <IconX />,
				title: 'Authenticate Error',
				message: 'Incorret Username or Password',
			});
		} else {
			sessionStorage.setItem('auth', 'allow');

			window.location.reload();
		}
	};

	return (
		<form onReset={onReset} onSubmit={onSubmit(login)}>
			<Stack>
				<TextInput
					label='Username'
					withAsterisk
					placeholder='Please enter'
					{...getInputProps('user')}
				/>
				<PasswordInput
					label='Password'
					withAsterisk
					placeholder='Please enter'
					{...getInputProps('pass')}
				/>
				<Group justify='space-between'>
					<Button
						p={0}
						c='gray'
						variant='transparent'
						onClick={() => {
							modals.closeAll();
							reset();
						}}
						leftSection={<IconArrowLeft size={14} />}
					>
						Back to the login page
					</Button>
					<Button type='submit'>Login to the page</Button>
				</Group>
			</Stack>
		</form>
	);
}
