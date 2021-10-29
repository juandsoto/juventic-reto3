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
						placeholder="    Usuario" />
					<input
						className='form-login-input'
						type="password"
						value={form.password}
						name='password'
						required
						onChange={onInputChange} 
						placeholder="    Contraseña"/>
				</div>
				
			</form>

			<button className="btn-login" type="button" onClick={handleSubmit}>Ingresar</button>

		</div >
	);
};

export default Login;
