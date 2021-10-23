import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faWhatsapp } from '@fortawesome/free-brands-svg-icons';


const Team = ({ children, name, description }) => {
	return (
		<>
			<div className="col">
				<div className="team-member">
					{children}
					<h4>{name.toUpperCase()}</h4>
					<p className="text-muted">{description}</p>
					<button className="btn btn-dark btn mx-2 social-twitter" ><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></button>
					<button className="btn btn-dark btn mx-2 social-facebook" ><FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon></button>
					<button className="btn btn-dark btn mx-2 social-whatsapp" ><FontAwesomeIcon icon={faWhatsapp}></FontAwesomeIcon></button>
				</div>
			</div>
		</>
	);
};

export default Team;
