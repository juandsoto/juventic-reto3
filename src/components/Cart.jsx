import React from 'react';
import { useCartContext } from '../contexts/cartContext';

const Cart = () => {

	const context = useCartContext();

	if (context.cart.length === 0) {
		return (
			<div className='cart'>
				<h2 className='bg-black p-2 text-light'>Tus Platos</h2>
				<h4 className='text-danger'>Aún no has añadido platos</h4>
			</div>
		);
	}

	return (

		<div className='cart' >
			<h2 className='bg-black p-2 text-light'>Tus Platos</h2>
			{
				context.cart.map((item) => (
					<div
						key={item.id}
						className='row justify-content-center align-items-center'
					>
						<div className='col-4'>
							{/* <img className='img-fluid' src={item.img} alt={item.name} /> */}
							<p>{item.name}</p>
						</div>
						<div className='col-4'>
							<button
								className='btn btn-danger btn-sm me-3'
								onClick={() => context.decrement(item.id)}
							>
								-
							</button>
							<button
								className='btn btn-success btn-sm'
								onClick={() => context.increment(item.id)}
							>
								+
							</button>
						</div>
						<p className='col-4'>
							{item.qty} - ${item.qty * item.price}
						</p>
					</div>
				))
			}
			<hr />
			<div className='d-flex justify-content-around text-start'>
				<div>total</div>
				<div>$ {context.total}</div>
			</div>
			<div className="d-flex mt-4 justify-content-center">
				<button onClick={() => context.clear()} className='text-dark btn btn-danger w-25 me-4'>
					clear cart
				</button>
				<button className='text-dark btn btn-warning w-25 ml-4'>checkout</button>
			</div>
		</div >

	);
};

export default Cart;
