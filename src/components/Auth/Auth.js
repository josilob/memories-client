import React from 'react';
import {
	Avatar,
	Paper,
	Button,
	Grid,
	Typography,
	Container,
} from '@material-ui/core';
import LockOutlineIcon from '@material-ui/icons/LockOutlined';
import Input from './Input';

import useStyles from './styles';

const Auth = () => {
	const classes = useStyles();
	const isSignup = false;
	const handleSubmit = () => {};
	const handleChange = () => {};

	return (
		<Container component='main' maxWidth='xs'>
			<Paper className={classes.paper} elevation={3}>
				<Avatar className={classes.avatar}>
					<LockOutlineIcon />
				</Avatar>
				<Typography variant='h5'>{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
				<form className={classes.form} onSubmit={handleSubmit}>
					<Grid container spacing={2}>
						{isSignup && (
							<>
								<Input
									name='firstName'
									label='First Name'
									handleChange={handleChange}
									autoFocus
									half
								/>

								<Input
									name='firstName'
									label='First Name'
									handleChange={handleChange}
									half
								/>
							</>
						)}
						<Input
							name='email'
							label='Email Adress'
							handleChange={handleChange}
							type='email'
						/>
						<Input
							name='password'
							label='Password'
							handleChange={handleChange}
							type='password'
						/>
					</Grid>
				</form>
			</Paper>
		</Container>
	);
};

export default Auth;
