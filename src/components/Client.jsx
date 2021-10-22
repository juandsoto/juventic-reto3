import React from 'react';

const Client = ({ children, name, description }) => {

	return (
		<>
			<div className="col">
				<div className="team-member">
					{children}
					<h4>{name.toUpperCase()}</h4>
					<p className="text-muted">{description}</p>
				</div>
			</div>
		</>
	);
};

export default Client;
