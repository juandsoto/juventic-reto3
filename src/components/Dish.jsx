import React, { useState } from 'react';
import { useCartContext } from '../contexts/cartContext';
import { useLoginContext } from '../contexts/loginContext';

import Modal from './Modal';
import Form from './Form';

import axios from 'axios';
import URL from '../server';

const Dish = ({ dish, updateDish, deleteDish }) => {
  const { addToCart } = useCartContext();
  const { isAdmin } = useLoginContext();

  const [isEditing, setIsEditing] = useState(false);
  const [state, setState] = useState(dish);

  const update = (dish) => {
    updateDish(dish);
    setState(dish);
    axios.patch(`${URL}/menu/${dish.id}`, dish).catch(console.log);
  };

  const del = (dish) => {
    deleteDish(dish);
    axios.delete(`${URL}/menu/${dish.id}`).catch(console.log);
  };

  return (
    <>
      <div className='col-12 col-md-6 col-xl-4 mb-4'>
        <div className='card text-light text-center' style={{ background: '#212529' }}>
          <img className='card-img-top dish-img' src={state.img} alt={state.name} />
          <div className='card-body'>
            <h5 className='card-title'>{state?.name}</h5>
            <p className='card-text'>{state?.description}</p>
            <h5>${state?.price}</h5>
            <button onClick={() => addToCart(dish)} className='btn btn-primary w-100 text-black'>
              Agregar al carrito
            </button>
            {isAdmin && (
              <div className='d-flex mt-2 justify-content-evenly'>
                <button className='btn btn-secondary px-3' onClick={() => setIsEditing(!isEditing)}>
                  EDITAR
                </button>
                <button className='btn btn-danger px-3' onClick={() => del(dish)}>
                  ELIMINAR
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      {isEditing && (
        <Modal isOpen={setIsEditing} title={`editando a ${state.name}`}>
          <div className='modal-content'>
            <Form payload={state} action={update} isOpen={setIsEditing}></Form>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Dish;
