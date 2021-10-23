import React from 'react';

import Hero from '../components/Hero';
import Carrousel from '../components/Carrousel';
import Clients from '../components/Clients';

const Home = () => {
	return (
		<>
			<Hero title='¡bienvenidos a nuestro restaurante!'></Hero>
			<Carrousel></Carrousel>
			<Clients></Clients>
		</>
	);
};

export default Home;
