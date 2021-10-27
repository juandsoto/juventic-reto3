import React, { useState } from 'react';

const Login = () => {

	const ADMIN = {
		adminName: 'admin123456',
		adminPassword: '123456'
	};

	const [form, setForm] = useState({
		name: '',
		password: ''
	});

	const onInputChange = (e) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const { name, password } = form;
		const { adminName, adminPassword } = ADMIN;

		if (name === adminName && password === adminPassword) {
			console.log('coincide');
		} else {
			console.log('no es admin');
		}

	};

	return (
		<div className='login' >
			<h1>Login</h1>

			<form autoComplete='off'>
				<input
					type="text"
					value={form.name}
					name='name'
					required
					onChange={onInputChange} />
				<input
					type="password"
					value={form.password}
					name='password'
					required
					onChange={onInputChange} />
			</form>

			<button type="button" onClick={handleSubmit}>Ingresar</button>

			<pre>{JSON.stringify(form)}</pre>
		</div >
	);
};

export default Login;
