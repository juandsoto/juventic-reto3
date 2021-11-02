import React, { useState } from 'react';
import axios from 'axios';

import URL from '../server';

import { useLoginContext } from '../contexts/loginContext';

import Form from './Form';
import Modal from './Modal';

const Client = ({ client }) => {
	const { isAdmin } = useLoginContext();
	const [isEditing, setIsEditing] = useState(false);
	const [state, setState] = useState(client);

	const updateClient = (client) => {
		setState(client);
		axios.patch(`${URL}/clients/${client.id}`, client)
			.catch(console.log);
	};

	return (
		<>
			<div className="col">
				<div className="team-member">
					<img className="mx-auto rounded-circle" src={state.img} alt={state.name} />
					<h4>{state.name.toUpperCase()}</h4>
					<p className="text-muted">{state.description}</p>
					{isAdmin && <button className="w-100 btn btn-secondary" onClick={() => setIsEditing(!isEditing)}>editar</button>}
				</div>
			</div>
			{isEditing &&
				<Modal isOpen={setIsEditing} title={`editando a ${state.name}`}>
					<div className="modal-content">
						<Form payload={state} action={updateClient} isOpen={setIsEditing}></Form>
					</div>
				</Modal>}
		</>
	);
};

export default Client;
