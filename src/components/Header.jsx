import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import Cart from '../components/Cart';
import Login from '../components/Login';
import Modal from './Modal';

import { useCartContext } from '../contexts/cartContext';
import { useLoginContext } from '../contexts/loginContext';

const Header = () => {

	const [toggleCart, setToggleCart] = useState(false);
	const [toggleLogin, setToggleLogin] = useState(false);

	const { quantity } = useCartContext();
	const { isAdmin, setIsAdmin } = useLoginContext();

	return (
		<>
			<nav className='navbar navbar-expand-lg navbar-light bg-dark navbar-shrink fixed-top'>
				<div className='container'>
					<Link className='navbar-brand text-warning' to='/'>
						{isAdmin ? 'Panel de administrador' : 'Pane e pasta colombiani'}
					</Link>
					<div>
						<button
							className='navbar-toggler'
							style={{ backgroundColor: 'white' }}
							type='button'
							data-bs-toggle='offcanvas'
							data-bs-target='#offcanvasNavbar'
							aria-controls='offcanvasNavbar'
						>
							<span className='navbar-toggler-icon'></span>
						</button>
					</div>
					<div
						className='bg-dark offcanvas offcanvas-end'
						tabIndex='-1'
						id='offcanvasNavbar'
						aria-labelledby='offcanvasNavbarLabel'
					>
						<div className='offcanvas-header'>
							<h5
								className='offcanvas-title text-warning'
								id='offcanvasNavbarLabel'
							>
								Pane e pasta colombiani
							</h5>
							<button
								type='button'
								className='btn-close text-reset bg-light'
								data-bs-dismiss='offcanvas'
								aria-label='Close'
							></button>
						</div>
						<div className='offcanvas-body'>
							<ul className='navbar-nav justify-content-end flex-grow-1 pe-3'>
								<li className='nav-item ' data-bs-dismiss='offcanvas'>
									<Link className='nav-link' to='/'>
										<p className='stroke text-light'>Inicio</p>
									</Link>
								</li>
								<li className='nav-item' data-bs-dismiss='offcanvas'>
									<Link className='nav-link' to='/about'>
										<p className='stroke text-light'>Equipo</p>
									</Link>
								</li>
								<li className='nav-item' data-bs-dismiss='offcanvas'>
									<Link className='nav-link' to='/menu'>
										<p className='stroke text-light'>Menú</p>
									</Link>
								</li>
								<li className='nav-item' data-bs-dismiss='offcanvas'>
									<Link className='nav-link' to='/services'>
										<p className='stroke text-light'>Servicios</p>
									</Link>
								</li>
								<li className='nav-item' data-bs-dismiss='offcanvas'>
									<Link className='nav-link' to='/contact'>
										<p className='stroke text-light'>Contáctanos</p>
									</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className='nav-item ml-5'>
						{isAdmin ?
							<button type="button" className="btn btn-primary" onClick={() => setIsAdmin(false)}>
								Logout
							</button> :
							<button type="button" className="btn btn-primary" onClick={() => setToggleLogin(!toggleLogin)}>
								Login
							</button>
						}
					</div>
					<button
						className='d-flex mx-2 btn btn-outline-warning align-items-center'
						onClick={() => setToggleCart(!toggleCart)}
					>
						<FontAwesomeIcon
							icon={faShoppingCart}
							color='yellow'
							size='2x'
						></FontAwesomeIcon>
						<h5>{quantity !== 0 && quantity}</h5>
					</button>
				</div>
			</nav>
			{toggleCart && <Cart></Cart>}
			{toggleLogin &&
				<Modal isOpen={setToggleLogin} title={`ingresa como administrador`}>
					<div className="modal-content">
						<Login isOpen={setToggleLogin} />
					</div>
				</Modal>}
		</>
	);
};

export default Header;
