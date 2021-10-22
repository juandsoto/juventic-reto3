import React, { useEffect, useState } from 'react';

import img1 from '../assets/img/portfolio/mujer1.jfif';
import img2 from '../assets/img/portfolio/mujer2.jfif';
import img3 from '../assets/img/portfolio/hombre3.jfif';
import img4 from '../assets/img/portfolio/mujer4.jfif';

import Client from './Client';

const Clients = () => {

	const [clients, setClients] = useState([]);

	const fetchClients = async () => {
		const res = await fetch('http://localhost:4000/clients');
		const clients = await res.json();
		setClients(clients);
	};

	useEffect(() => {
		fetchClients();
	}, []);

	const images = [img1, img2, img3, img4];

	return (
		<>
			<div className="container">
				<div className="text-center">
					<h2 className="section-heading text-uppercase mt-5 mb-4">OPINIONES/CLIENTES</h2>
					<h4 className="section-subheading text-muted mb-5">PANE E PASTA COLOMBIANI</h4>
				</div>
				<div className="row">
					{clients.map((client, index) => {
						return <Client key={client.id} {...client}>
							<img className="mx-auto rounded-circle" src={images[index]} alt="..." />
						</Client>;
					})}
				</div>
			</div>
		</>
	);
};

export default Clients;
