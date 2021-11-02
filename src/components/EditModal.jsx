import React, { useState } from 'react';

const EditModal = ({ payload }) => {

	const [form, setForm] = useState(payload);

	const onChange = (e) => {
		const { name, value } = e.target;
		setForm({
			...form,
			[name]: value
		});
	};

	const handleOnSubmit = (e) => {
		e.preventdefault();

	};

	return (
		<div className='login p-2 text-light' >
			<h1>Editar</h1>
			<form autoComplete='off' onSubmit={handleOnSubmit}>
				<div className='form-login'>
					<input
						className='form-login-input'
						type="text"
						value={form.name}
						name='name'
						required
						onChange={onChange}
						placeholder="Nombre" />
					<textarea
						className='form-login-input'
						type="text"
						value={form.description}
						name='description'
						required
						onChange={onChange}
						placeholder="Descripción" />
					<input
						className='form-login-input'
						type="text"
						value={form.img}
						name='img'
						required
						onChange={onChange}
						placeholder="Imagén" />
				</div>
				<button type="submit" className='btn btn-primary'>Actualizar</button>
			</form>
			<h3>{JSON.stringify(form)}</h3>
		</div>
	);
};

export default EditModal;
