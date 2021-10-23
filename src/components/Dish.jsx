import React from 'react';
const Dish = ({ name, description, price, img }) => {

	return (
		<>
			<div className="col-12 col-md-6 col-lg-4">
				<div className="card text-light text-center" style={{ background: '#212529' }}>
					<img className="card-img-top" src={img} alt="..." />
					<div className="card-body">
						<h5 className="card-title">{name}</h5>
						<p className="card-text">{description}</p>
						<h5>${price}</h5>
						<button className="btn btn-primary w-100 text-black">Agregar al carrito</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Dish;
