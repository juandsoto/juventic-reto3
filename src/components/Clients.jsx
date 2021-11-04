import React, { useEffect, useState } from 'react';

import axios from 'axios';
import URL from '../server';

import Client from './Client';
import Form from './Form';
import Modal from './Modal';

const Clients = () => {
  const [loading, setLoading] = useState(true);
  const [clients, setClients] = useState([]);
  const [isButtonOpen, setIsButtonOpen] = useState(false);

  const fetchClients = async () => {
    const res = await fetch(`${URL}/clients`);
    const clients = await res.json();
    setClients(clients);
    setLoading(false);
  };

  const createClient = (client) => {
    axios.post(`${URL}/clients`, client).catch(console.log);
  };

  useEffect(() => {
    fetchClients();
  }, []);

  return (
    <>
      <div className='container'>
        <div className='text-center'>
          <h2 className='section-heading text-uppercase mt-5 mb-4'>OPINIONES/CLIENTES</h2>
          <h4 className='section-subheading text-muted mb-5'>PANE E PASTA COLOMBIANI</h4>
        </div>
        {loading ? (
          <div className='d-flex justify-content-center'>
            <div className='spinner-border' role='status'>
              <span className='visually-hidden'>Loading...</span>
            </div>
          </div>
        ) : (
          <div className='row'>
            {clients.slice(0, 8).map((client) => {
              return <Client key={client.id} client={client} />;
            })}
            <div className='d-flex justify-content-center mb-4'>
              <button className='btn btn-secondary' onClick={() => setIsButtonOpen(!isButtonOpen)}>
                Dános tu propio testimonio!
              </button>
            </div>
          </div>
        )}
      </div>

      {isButtonOpen && (
        <Modal isOpen={setIsButtonOpen} title={`Danos tu opinión`}>
          <div className='modal-content'>
            <Form
              payload={{
                name: '',
                description: '',
                img: '',
              }}
              text={'crear'}
              action={createClient}
              isOpen={setIsButtonOpen}
            ></Form>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Clients;
