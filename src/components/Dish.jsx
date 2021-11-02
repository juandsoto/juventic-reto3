import React from 'react';
import { useCartContext } from '../contexts/cartContext';
import { useLoginContext } from '../contexts/loginContext';
const Dish = ({ dish }) => {

	const { name, description, price, img } = dish;

	const { addToCart } = useCartContext();

	const { isAdmin } = useLoginContext();

	return (
		<>
			<div className="col-12 col-md-6 col-lg-4 mb-4">
				<div className="card text-light text-center" style={{ background: '#212529' }}>
					<img className="card-img-top dish-img" src={img} alt={name} />
					<div className="card-body">
						<h5 className="card-title">{name}</h5>
						<p className="card-text">{description}</p>
						<h5>${price}</h5>
						<button onClick={() => addToCart(dish)} className="btn btn-primary w-100 text-black">Agregar al carrito</button>
						{isAdmin && <button className="mt-2 mx-auto w-100 d-block btn btn-secondary">editar</button>}
					</div>
				</div>
			</div>
		</>
	);
};

export default Dish;
