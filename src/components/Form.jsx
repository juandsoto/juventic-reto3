import React, { useState } from 'react';
import { useCartContext } from '../contexts/cartContext';

const Form = ({ payload, isOpen, action, text = 'actualizar', type }) => {

	const { cart, total, quantity } = useCartContext();

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

	if (type === 'cart') {

		return (
			<>
				<form autoComplete='off' action="https://formspree.io/f/xbjqbgko" method="POST">
					<input type="hidden" name="_language" value="es" />
					<input
						type="hidden"
						name="_subject"
						value="Pane e pasta Colombiani"
					/>
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
						<input
							className='form-control'
							type="email"
							value={form.email}
							autoFocus
							name='email'
							required
							onChange={onChange} />
						<label htmlFor="floatingInputValue">Email</label>
					</div>
					<div className='form-check'>
						<input
							className='form-check-input'
							type='checkbox'
							value=''
							id='flexCheckDefault'
							required
						/>
						<label
							className='form-check-label'
							htmlFor='flexCheckDefault'
						>
							Al hacer clic en "Enviar", aceptas nuestras Condiciones,
							la Política de datos y la Política de cookies.Es posible
							que te enviemos notificaciones por SMS, que puedes
							desactivar cuando quieras.
						</label>
					</div>
					<div className='modal-submitbtn'>
						<button type="submit" className='btn btn-primary text-black'>{text}</button>
					</div>

					{cart.map((dish, index) => {
						return (
							<input key={index} type='hidden' name={dish.name} value={`$${dish.price} * ${dish.qty} = $${dish.price * dish.qty}`} />
						);
					})}

					<input type="hidden" name='Cantidad total' value={`${quantity} platos`} />
					<input type="hidden" name='Total' value={`$${total}`} />
				</form>
			</>
		);
	}

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
