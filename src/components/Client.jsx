import React from 'react';

const Client = ({ name, description, img }) => {

	return (
		<>
			<div className="col">
				<div className="team-member">
					<img className="mx-auto rounded-circle" src={img} alt="..." />

					<h4>{name.toUpperCase()}</h4>
					<p className="text-muted">{description}</p>
				</div>
			</div>
		</>
	);
};

export default Client;
