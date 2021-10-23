import React, { useEffect, useState } from 'react';

import Client from './Client';

const Clients = () => {

	const [loading, setLoading] = useState(true);
	const [clients, setClients] = useState([]);

	const fetchClients = async () => {
		const res = await fetch('http://localhost:4000/clients');
		const clients = await res.json();
		setClients(clients);
		setLoading(false);
	};

	useEffect(() => {
		fetchClients();
	}, []);

	return (
		<>
			<div className="container">
				<div className="text-center">
					<h2 className="section-heading text-uppercase mt-5 mb-4">OPINIONES/CLIENTES</h2>
					<h4 className="section-subheading text-muted mb-5">PANE E PASTA COLOMBIANI</h4>
				</div>
				<div className="row">
					{loading ? <h1>Loading...</h1> : clients.map((client, index) => {
						return <Client key={client.id} {...client}>
						</Client>;
					})}
				</div>
			</div>
		</>
	);
};

export default Clients;
