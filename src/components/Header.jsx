import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {

	return (
		<>
			<nav className='navbar navbar-expand-lg navbar-dark fixed-top navbar-shrink' id="mainNav">
				<div className="container">
					<Link className="navbar-brand" to='/'>Pane e pasta colombiani</Link>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
						Menu
						<FontAwesomeIcon icon={faBars} style={{ paddingLeft: '4px' }} size='lg'></FontAwesomeIcon>
					</button>
					<div className="collapse navbar-collapse" id="navbarResponsive">
						<ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
							<ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
								<li className="nav-item"><Link className="nav-link" to='/'>
									<p className="stroke">
										Inicio
									</p> </Link></li>
								<li className="nav-item"><Link className="nav-link" to='/about'>
									<p className="stroke">
										Equipo
									</p> </Link></li>
								<li className="nav-item"><Link className="nav-link" to='/menu'>
									<p className="stroke">
										Menu
									</p> </Link></li>
								<li className="nav-item"><Link className="nav-link" to='/services'>
									<p className="stroke">
										Servicios
									</p> </Link></li>
								<li className="nav-item"><Link className="nav-link" to='/contact'>
									<p className="stroke">
										Contactanos
									</p> </Link></li>
							</ul>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Header;
