import React, { useState, useEffect } from 'react';
import Service from '../components/Service';

import img1 from '../assets/img/portfolio/imagen10.jfif';
import img2 from '../assets/img/portfolio/imagen12.jfif';
import img3 from '../assets/img/portfolio/imagen11.jfif';
import img4 from '../assets/img/portfolio/imagen8.jfif';
import img5 from '../assets/img/portfolio/imagen6.jfif';
import img6 from '../assets/img/portfolio/imagen5.jfif';

const Services = () => {

	const [services, setServices] = useState([]);

	const fetchServices = async () => {
		const res = await fetch('http://localhost:4000/services');
		const services = await res.json();
		setServices(services);
	};

	useEffect(() => {
		fetchServices();
	}, []);

	const images = [img1, img2, img3, img4, img5, img6];

	return (
		<>
			<section className="page-section bg-light" id="portfolio">
				<div className="container">
					<div className="text-center">
						<h2 className="section-heading text-uppercase mt-5">Servicios</h2>
						<h3 className="section-subheading text-muted">¡Todo para tus celebraciones! </h3>
					</div>
					<div className="row">
						{services.map((service, index) => <Service key={service.id} {...service}>
							<img className="img-fluid h-50" src={images[index]} alt="..." />
						</Service>)}
					</div>
				</div>
			</section>
		</>
	);
};

export default Services;
