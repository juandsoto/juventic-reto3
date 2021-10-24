import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import Cart from '../components/Cart';
import { useCartContext } from '../contexts/cartContext';

const Header = () => {

	const [toggleCart, setToggleCart] = useState(false);

	const { quantity } = useCartContext();

	return (
		<>
			<nav className="navbar navbar-light bg-dark navbar-shrink fixed-top">
				<div className="container">
					<Link className="navbar-brand text-warning" to='/'>Pane e pasta colombiani</Link>
					<div className="d-flex">
						<button className="d-flex mx-2 btn btn-outline-warning align-items-center" onClick={() => setToggleCart(!toggleCart)}>
							<FontAwesomeIcon icon={faShoppingCart} color='yellow' size='2x'>
							</FontAwesomeIcon>
							<h5>{quantity !== 0 && quantity}</h5>
						</button>

						<button className="navbar-toggler" style={{ backgroundColor: 'white' }} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
							<span className="navbar-toggler-icon"></span>
						</button>
					</div>
					<div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
						<div className="offcanvas-header">
							<h5 className="offcanvas-title text-warning" id="offcanvasNavbarLabel">Pane e pasta colombiani</h5>
							<button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
						</div>
						<div className="offcanvas-body text-light">
							<ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
								<li className="nav-item">
									<Link className="nav-link" to='/'>
										<p className="stroke">
											Inicio
										</p> </Link> </li>
								<li className="nav-item"><Link className="nav-link" to='/about'>
									<p className="stroke">
										Equipo
									</p> </Link></li>
								<li className="nav-item"><Link className="nav-link" to='/menu'>
									<p className="stroke">
										Menú
									</p> </Link></li>
								<li className="nav-item"><Link className="nav-link" to='/services'>
									<p className="stroke">
										Servicios
									</p> </Link></li>
								<li className="nav-item"><Link className="nav-link" to='/contact'>
									<p className="stroke">
										Contáctanos
									</p> </Link></li>
							</ul>
						</div>
					</div>

				</div>
			</nav>
			{toggleCart && <Cart></Cart>}
		</>
	);
};

export default Header;
