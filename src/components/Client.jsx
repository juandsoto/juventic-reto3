import React, { useState } from 'react';
import axios from 'axios';

import URL from '../server';

import { useLoginContext } from '../contexts/loginContext';
import EditModal from './EditModal';

const Client = ({ client }) => {
	const { isAdmin } = useLoginContext();

	const [isEditing, setIsEditing] = useState(false);

	const { name, description, img } = client;


	const updateClient = (client) => {
		const newClient = { ...client, name: 'pepito' };
		axios.patch(`${URL}/clients/${client.id}`, newClient)
			.then(console.log)
			.catch(console.log);
	};

	return (
		<>
			<div className="col">
				<div className="team-member">
					<img className="mx-auto rounded-circle" src={img} alt="..." />
					<h4>{name.toUpperCase()}</h4>
					<p className="text-muted">{description}</p>
					{isAdmin && <button className="w-100 btn btn-secondary" onClick={() => setIsEditing(!isEditing)}>editar</button>}
				</div>
			</div>
			{isEditing && <EditModal payload={client} />}

		</>
	);
};

export default Client;
