import React from 'react';

const Client = ({ client }) => {
  return (
    <>
      <div className='col'>
        <div className='team-member'>
          <img className='mx-auto rounded-circle' src={client.img} alt={client.name} />
          <h4>{client.name.toUpperCase()}</h4>
          <p className='text-muted'>{client.description}</p>
        </div>
      </div>
    </>
  );
};

export default Client;
