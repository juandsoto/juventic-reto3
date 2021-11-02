import React, { useState } from 'react';

const Form = ({ payload, isOpen, action }) => {

	const [form, setForm] = useState(payload);

	const onChange = (e) => {
		const { name, value } = e.target;
		setForm({
			...form,
			[name]: value
		});
	};

	const handleOnSubmit = (e) => {
		e.preventDefault();
		action(form);
		isOpen(false);
	};

	return (
		<>
			<form className='w-100' autoComplete='off' onSubmit={handleOnSubmit}>
				<div className="form-floating">
					<input
						className='form-control'
						type="text"
						value={form.name}
						autoFocus
						name='name'
						required
						onChange={onChange}
						placeholder="Nombre" />
					<label htmlFor="floatingInputValue">Nombre</label>
				</div>
				<div className="form-floating">
					<textarea
						className='form-control'
						type="text"
						value={form.description}
						name='description'
						required
						onChange={onChange}
						placeholder="Descripción"
						style={{ minHeight: '100px' }} />
					<label htmlFor="floatingInputValue">Descripción</label>
				</div>
				<div className="form-floating">
					<input
						className='form-control'
						type="text"
						value={form.img}
						name='img'
						required
						onChange={onChange}
						placeholder="Imagén" />
					<label htmlFor="floatingInputValue">Imágen</label>
				</div>

				{payload.price && <div className="form-floating">
					<input
						className='form-control'
						type="number"
						value={form.price}
						name='price'
						required
						onChange={onChange} />
					<label htmlFor="floatingInputValue">Precio</label>
				</div>}

				<div className='modal-submitbtn'>
					<button type="submit" className='btn btn-primary text-black'>Actualizar</button>
				</div>
			</form>
		</>
	);
};

export default Form;
