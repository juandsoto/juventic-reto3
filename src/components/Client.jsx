import React, { useState } from 'react';

const Client = ({ client }) => {
	const [state, setState] = useState(client);

	return (
		<>
			<div className="col-3">
				<div className="team-member">
					<img className="mx-auto rounded-circle" src={state.img} alt={state.name} />
					<h4>{state.name.toUpperCase()}</h4>
					<p className="text-muted">{state.description}</p>'
				</div>
			</div>
		</>
	);
};

export default Client;
