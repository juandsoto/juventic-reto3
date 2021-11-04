import React, { useState, useEffect } from 'react';
import Service from '../components/Service';

import URL from '../server';

const Services = () => {
  const [loading, setLoading] = useState(true);
  const [services, setServices] = useState([]);

  const fetchServices = async () => {
    const res = await fetch(`${URL}/services`);
    const services = await res.json();
    setServices(services);
    setLoading(false);
  };

  useEffect(() => {
    window.scrollTo({ top: true });
    fetchServices();
  }, []);

  return (
    <>
      <section className='bg-light' id='portfolio'>
        <div className='container'>
          <div className='text-center'>
            <h2 className='section-heading text-uppercase mt-5'>Servicios</h2>
            <h3 className='section-subheading text-muted'>¡Todo para tus celebraciones! </h3>
          </div>
          {loading ? (
            <div className='d-flex justify-content-center'>
              <div className='spinner-border' role='status'>
                <span className='visually-hidden'>Loading...</span>
              </div>
            </div>
          ) : (
            <div className='row'>
              {services.map((service) => (
                <Service key={service.id} service={service}></Service>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Services;
