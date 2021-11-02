import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faCircle } from '@fortawesome/free-solid-svg-icons';
import { useLoginContext } from '../contexts/loginContext';

const Service = ({ id, name, description, img }) => {

	const { isAdmin } = useLoginContext();


	return (
		<>
			<div className="col-lg-4 col-sm-6">
				<div className="portfolio-item">
					<a className="portfolio-link" data-bs-toggle="modal" href={`#portafolioModal${id}`}>
						<div className="portfolio-hover">
							<div className="portfolio-hover-content"><FontAwesomeIcon icon={faPlus} size='3x'></FontAwesomeIcon></div>
						</div>
						<img className="img-fluid h-50" src={img} alt="..." />

					</a>
					<div className="portfolio-caption">
						<div className="portfolio-caption-heading">{name.toUpperCase()}</div>
						{isAdmin && <button className="mt-2 mx-auto w-100 d-block btn btn-secondary">editar</button>}

					</div>
				</div>
			</div>


			<div className="portfolio-modal modal fade" id={`portafolioModal${id}`} tabIndex="-1" role="dialog" aria-hidden="true">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="close-modal" data-bs-dismiss="modal"><FontAwesomeIcon icon={faCircle} size='2x'></FontAwesomeIcon></div>
						<div className="container">
							<div className="row justify-content-center">
								<div className="col-lg-8">
									<div className="modal-body">
										<h2>{name.toUpperCase()}</h2>
										<img className="img-fluid h-50" src={img} alt="..." />

										<p>{description}</p>

										<button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
											<i className="fas fa-times me-1"></i>
											Cerrar
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Service;
