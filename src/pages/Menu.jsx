import React, { useState, useEffect } from 'react';

import Hero from '../components/Hero';
import Dish from '../components/Dish';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faFire, faHamburger } from '@fortawesome/free-solid-svg-icons';

import URL from '../server';

const Menu = () => {

	const [loading, setLoading] = useState(true);
	const [dishes, setDishes] = useState([]);

	const fetchMenu = async () => {
		const res = await fetch(`${URL}/menu`);
		const menu = await res.json();
		setDishes(menu);
	};

	useEffect(() => {
		fetchMenu();
		setLoading(false);
		window.scrollTo({ top: true });
	}, []);

	return (
		<>
			<Hero title='nuestro menú'></Hero>

			<div className='py-4' style={{ background: '#b95a00' }}>
				<div className="container">
					<div className="d-flex flex-column flex-lg-row justify-content-around text-center text-light">
						<div>
							<FontAwesomeIcon icon={faUtensils} color='black' size='2x'></FontAwesomeIcon>
							<p>¡Explora los nuevos platillos de nuestro restaurante! más de 100 platillos diferentes</p>
						</div>
						<div>
							<FontAwesomeIcon icon={faFire} color='black' size='2x'></FontAwesomeIcon>
							<p>Chefs expertos Prueba las nuevas combinaciones</p>
						</div>
						<div>
							<FontAwesomeIcon icon={faHamburger} color='black' size='2x'></FontAwesomeIcon>
							<p>Bebidas ilimitadas ¡Ven y disfruta de tú bebida favorita en cualquier momento!</p>
						</div>
					</div>
				</div>
			</div>

			<div style={{ background: '#1d2124', textAlign: 'center' }}>
				<div className="mb-4">
					<h2 className='text-light'>Menú</h2>
					<a href="assets/MenuPaneyPastaColombiani.pdf" id='carta' download="MenuPaneyPastaColombianim," className="text-black btn btn-primary">
						Descarga nuestro menú
					</a>
				</div>

				<div className="container" >
					<div className="row">
						{loading ? <h1>Loading ...</h1> :
							dishes.map(dish => {
								return <Dish key={dish.id} dish={dish} ></Dish>;
							})}
					</div>
				</div>
			</div>		</>
	);
};

export default Menu;
