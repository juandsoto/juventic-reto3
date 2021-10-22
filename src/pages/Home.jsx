import React from 'react';

import img1 from '../assets/img/portfolio/mujer1.jfif';
import img2 from '../assets/img/portfolio/mujer2.jfif';
import img3 from '../assets/img/portfolio/hombre3.jfif';
import img4 from '../assets/img/portfolio/mujer4.jfif';
import Carrousel from '../components/Carrousel';

const Home = () => {
	return (
		<>
			<header className="masthead">
				<div className="container">
					<div className="masthead-subheading">¡BIENVENIDOS A NUESTRO RESTAURANTE!</div>
					<div className="masthead-heading text-uppercase">Pane e pasta colombiani</div>
				</div>
			</header>
			<Carrousel></Carrousel>
			<div className="container">
				<div className="text-center">
					<h2 className="section-heading text-uppercase mt-5 mb-4">OPINIONES/CLIENTES</h2>
					<h4 className="section-subheading text-muted mb-5">PANE E PASTA COLOMBIANI</h4>
				</div>
				<div className="row">

					<div className="col">
						<div className="team-member">
							<img className="mx-auto rounded-circle bordenosotros" src={img1} alt="..." />
							<h4>LUISA VILLADA</h4>
							<p className="text-muted">"Me encanta el restaurante, la comida y los precios!"</p>
						</div>
					</div>
					<div className="col">
						<div className="team-member">
							<img className="mx-auto rounded-circle" src={img2} alt="..." />
							<h4>VALERIA CARDONA</h4>
							<p className="text-muted">"Volveria una y mil veces, fue el mejor cumple años del mundo"</p>
						</div>
					</div>
					<div className="col">
						<div className="team-member">
							<img className="mx-auto rounded-circle" src={img3} alt="..." />
							<h4>CARLOS MORA</h4>
							<p className="text-muted">"Mi hijo quedó feliz con sus grados, la mejor comida de todas"</p>
						</div>
					</div>
					<div className="col">
						<div className="team-member">
							<img className="mx-auto rounded-circle" src={img4} alt="..." />
							<h4>TATIANA SILVA</h4>
							<p className="text-muted">"Me enamoré de las pastas de este restaurante, son los mejores"</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
