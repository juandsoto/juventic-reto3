import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Modal = ({ children, title, isOpen }) => {
  return (
    <div className='modal-overlay'>
      <div className='modal-container'>
        <div className='modal-header'>
          <h3>{title}</h3>
        </div>
        <button className='modal-closebtn' onClick={() => isOpen(false)}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
