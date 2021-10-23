import React, { useState, useEffect } from 'react';

import Hero from '../components/Hero';
import Dish from '../components/Dish';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faFire, faHamburger } from '@fortawesome/free-solid-svg-icons';

import heroImg from '../img/outline_restaurant_menu_white_24dp.png';

import img1 from '../assets/img/portfolio/pastabola.jpg';

const Menu = () => {

	const [dishes, setDishes] = useState([]);

	const fetchMenu = async () => {
		const res = await fetch('http://localhost:4000/menu');
		const menu = await res.json();
		setDishes(menu);
	};

	useEffect(() => {
		fetchMenu();
	}, []);

	return (
		<>
			<Hero title='nuestro menú'></Hero>

			<div className='py-4' style={{ background: '#b95a00' }}>
				<div className="container">
					<div className="d-flex flex-wrap justify-content-around text-center text-light">
						<div className="">
							<FontAwesomeIcon icon={faUtensils} color='black' size='2x'></FontAwesomeIcon>
							<p>¡Explora los nuevos platillos de nuestro restaurante!<br />
								más de 100 platillos diferentes</p>
						</div>
						<div className="">
							<FontAwesomeIcon icon={faFire} color='black' size='2x'></FontAwesomeIcon>
							<p>Chefs expertos<br />
								Prueba las nuevas combinaciones</p>
						</div>
						<div className="">
							<FontAwesomeIcon icon={faHamburger} color='black' size='2x'></FontAwesomeIcon>
							<p>Bebidas ilimitadas<br />
								¡Ven y disfruta de tú bebida favorita en cualquier momento!</p>
						</div>
					</div>
				</div>
			</div>

			<div style={{ background: '#1d2124' }}>
				<a href="assets/MenuPaneyPastaColombiani.pdf" id='carta' download="MenuPaneyPastaColombianim," className="text-light btn mb-4" style={{ textAlign: 'center' }}>
					DESCARGAR MENÚ

				</a>

				<div className="container" >
					<div className="row">
						{dishes.map(dish => {
							return <Dish key={dish.id} {...dish} img={img1}></Dish>;
						})}
					</div>
				</div>
			</div>
		</>
	);
};

export default Menu;
