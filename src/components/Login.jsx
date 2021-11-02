import React, { useState } from 'react';
import { useLoginContext } from '../contexts/loginContext';

const Login = ({ isOpen }) => {

	const { setIsAdmin } = useLoginContext();

	const ADMIN = {
		adminName: 'admin',
		adminPassword: 'admin'
	};

	const [form, setForm] = useState({
		name: '',
		password: ''
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const { name, password } = form;
		const { adminName, adminPassword } = ADMIN;

		if (name === adminName && password === adminPassword) {
			setIsAdmin(true);
			isOpen(false);
		} else {
			alert('No eres administrador!!!');
		}

	};

	return (
		<>
			<form className='w-100' autoComplete='off' onSubmit={handleSubmit}>
				<div className="form-floating">
					<input
						className='form-control'
						type="text"
						value={form.name}
						name='name'
						autoFocus
						required
						onChange={handleChange} />
					<label htmlFor="floatingInputValue">Nombre</label>
				</div>
				<div className="form-floating">
					<input
						className='form-control'
						type="password"
						value={form.password}
						name='password'
						required
						onChange={handleChange} />
					<label htmlFor="floatingInputValue">Contraseña</label>
				</div>

				<div className='modal-submitbtn'>
					<button type="submit" className='btn btn-primary text-black'>Ingresar</button>
				</div>
			</form>
		</>
	);
};

export default Login;
