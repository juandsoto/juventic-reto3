import React, { useState } from 'react';
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import { useLoginContext } from '../contexts/loginContext';
import Modal from './Modal';
import Form from './Form';
import URL from '../server';

const Team = ({ person }) => {
  const { isAdmin } = useLoginContext();
  const [isEditing, setIsEditing] = useState(false);
  const [state, setState] = useState(person);

  const updatePerson = (person) => {
    setState(person);
    axios.patch(`${URL}/team/${person.id}`, person).catch(console.log);
  };

  return (
    <>
      <div className='col'>
        <div className='team-member'>
          <img className='mx-auto rounded-circle' src={state.img} alt='...' />
          <h4>{state.name.toUpperCase()}</h4>
          <p className='text-muted'>{state.description}</p>
          <button className='btn btn-dark btn mx-2 social-twitter'>
            <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
          </button>
          <button className='btn btn-dark btn mx-2 social-facebook'>
            <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
          </button>
          <button className='btn btn-dark btn mx-2 social-whatsapp'>
            <FontAwesomeIcon icon={faWhatsapp}></FontAwesomeIcon>
          </button>
          {isAdmin && (
            <button className='mt-2 mx-auto w-100 d-block btn btn-secondary' onClick={() => setIsEditing(!isEditing)}>
              editar
            </button>
          )}
        </div>
      </div>
      {isEditing && (
        <Modal isOpen={setIsEditing} title={`editando a ${state.name}`}>
          <div className='modal-content'>
            <Form payload={state} action={updatePerson} isOpen={setIsEditing}></Form>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Team;
