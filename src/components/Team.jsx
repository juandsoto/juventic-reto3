import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { useLoginContext } from '../contexts/loginContext';


const Team = ({ name, description, img }) => {

	const { isAdmin } = useLoginContext();

	return (
		<>
			<div className="col">
				<div className="team-member">
					<img className="mx-auto rounded-circle" src={img} alt="..." />
					<h4>{name.toUpperCase()}</h4>
					<p className="text-muted">{description}</p>
					<button className="btn btn-dark btn mx-2 social-twitter" ><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></button>
					<button className="btn btn-dark btn mx-2 social-facebook" ><FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon></button>
					<button className="btn btn-dark btn mx-2 social-whatsapp" ><FontAwesomeIcon icon={faWhatsapp}></FontAwesomeIcon></button>
					{isAdmin && <button className="mt-2 mx-auto w-100 d-block btn btn-secondary">editar</button>}

				</div>
			</div>
		</>
	);
};

export default Team;
