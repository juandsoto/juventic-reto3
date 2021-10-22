import React, { useState, useEffect } from 'react';

import img1 from '../assets/img/imagen 1.jfif';
import img2 from '../assets/img/imagen 4.jfif';
import img3 from '../assets/img/imagen 2.jfif';
import img4 from '../assets/img/imagen 3.jfif';

import img5 from '../assets/img/fotoKevin.jfif';
import img6 from '../assets/img/fotoValen.jpg';
import img7 from '../assets/img/juan.jpeg';
import img8 from '../assets/img/fotoDavid.jfif';

import Team from '../components/Team';
import Map from '../components/Map';

const About = () => {

	const [team, setTeam] = useState([]);

	const fetchTeam = async () => {
		const res = await fetch('http://localhost:4000/team');
		const team = await res.json();
		setTeam(team);
	};

	useEffect(() => {
		fetchTeam();
	}, []);

	const images = [img5, img6, img7, img8];

	return (
		<>
			<section className="page-section" id="about">
				<div className="container">
					<div className="text-center">
						<h2 className="section-heading text-uppercase mt-5">NOSOTROS</h2>
						<h3 className="section-subheading text-muted">Pane e pasta colombiani.</h3>
					</div>
					<ul className="timeline">
						<li>
							<div className="timeline-image"><img className="rounded-circle img-fluid" src={img1} alt="..." /></div>
							<div className="timeline-panel">
								<div className="timeline-heading">
									<h4>2019-2021</h4>
									<h4 className="subheading">¿COMO NACIO NUESTRA IDEA?</h4>
								</div>
								<div className="timeline-body"><p className="text-muted">Todo nació como un sueño de cada uno de nosotros, donde las ideas y profesiones se complementaron dando esto como resultado el mejor restaurante. </p></div>
							</div>
						</li>
						<li className="timeline-inverted">
							<div className="timeline-image"><img className="rounded-circle img-fluid" src={img2} alt="..." /></div>
							<div className="timeline-panel">
								<div className="timeline-heading">
									<h4>2019</h4>
									<h4 className="subheading">¿COMO TRABAJAMOS PARA PODER LOGRARLO?</h4>
								</div>
								<div className="timeline-body"><p className="text-muted">  Fue una combinación de parte de todos, llena de amor, dedicación y mucha disciplina. </p></div>
							</div>
						</li>
						<li>
							<div className="timeline-image"><img className="rounded-circle img-fluid" src={img3} alt="..." /></div>
							<div className="timeline-panel">
								<div className="timeline-heading">
									<h4>2020</h4>
									<h4 className="subheading">ABRIMOS NUESTRO NEGOCIO </h4>
								</div>
								<div className="timeline-body"><p className="text-muted"> Abrimos este gran sueño siendo un logro fundamental para la vida de cada uno de nosotros, cada día con nuestro servicio les queremos brindar y trasmitir la misma pasión por la cocina y el amor a las pastas y así lograr que se sientan en un lugar lleno de amor y paz.

								</p></div>
							</div>
						</li>
						<li className="timeline-inverted">
							<div className="timeline-image"><img className="rounded-circle img-fluid" src={img4} alt="..." /></div>
							<div className="timeline-panel">
								<div className="timeline-heading">
									<h4>2021</h4>
									<h4 className="subheading">Segunda sede</h4>
								</div>
								<div className="timeline-body"><p className="text-muted">Luego de cumplir nuestro primer sueño, se fue creando otra meta que en el 2021 fue posible, este año ha sido lleno de muchas experiencias, donde se ha hecho realidad la inauguración  nuestro segundo restaurante, siendo esto un motor fundamental para cada día brindarles lo mejor.</p></div>
							</div>
						</li>
						<li className="timeline-inverted">
							<div className="timeline-image">
								<h4 className="h4margintop">¡Se tú
									<br />
									parte
									<br />
									de esta
									<br />
									historia!
								</h4>
							</div>
						</li>
					</ul>
				</div>
			</section>
			<section className="page-section bg-light" id="team">
				<div className="container">
					<div className="text-center">
						<h2 className="section-heading text-uppercase">NUESTRO EQUIPO</h2>
						<h3 className="section-subheading text-muted">PANE E PASTA COLOMBIANI</h3>
					</div>
					<div className="row">
						{team.map((person, index) => {
							return <Team key={person.id} {...person} >
								<img className="mx-auto rounded-circle" src={images[index]} alt="..." />
							</Team>;
						})}
					</div>
				</div>
			</section>
			<Map></Map>
		</>
	);
};

export default About;
