import React, { useState } from 'react';
import { Redirect } from 'react-router';
import { useLoginContext } from '../contexts/loginContext';

const Login = () => {

	const { isAdmin, setIsAdmin } = useLoginContext();

	const ADMIN = {
		adminName: 'admin',
		adminPassword: 'admin'
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
			setIsAdmin(true);
		} else {
			alert('No eres administrador!!!');
		}

	};

	if (isAdmin) {
		return <Redirect to='/' />;
	}

	return (
		<div className='login p-2 text-light' >
			<h1>Login</h1>

			<form autoComplete='off'>
				<div className='form-login'>
					<input
						className='form-login-input'
						type="text"
						value={form.name}
						name='name'
						required
						onChange={onInputChange}
						placeholder="   Usuario" />
					<input
						className='form-login-input'
						type="password"
						value={form.password}
						name='password'
						required
						onChange={onInputChange}
						placeholder="   Contraseña" />
				</div>

			</form>

			<button className="btn-login" type="button" onClick={handleSubmit}>Ingresar</button>

		</div >
	);
};

export default Login;
