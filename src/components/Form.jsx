import React, { useState } from 'react';

const Form = ({ payload, isOpen, action, text = 'actualizar' }) => {

	const [form, setForm] = useState(payload);

	const onChange = (e) => {
		const { name, value } = e.target;
		setForm({
			...form,
			[name]: value
		});
	};

	const handleOnSubmit = async (e) => {
		e.preventDefault();
		if (!form.img)
			action({ ...form, img: 'https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-6.png' });
		else
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
						onChange={onChange} />
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
						style={{ minHeight: '100px' }} />
					<label htmlFor="floatingInputValue">Descripción</label>
				</div>
				<div className="form-floating">
					<input
						className='form-control'
						type="text"
						value={form.img}
						name='img'
						onChange={onChange} />
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
					<button type="submit" className='btn btn-primary text-black'>{text}</button>
				</div>
			</form>
		</>
	);
};

export default Form;
