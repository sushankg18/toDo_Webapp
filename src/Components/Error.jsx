import React, { useState } from 'react';
import '../styles/Error.css';
import { MdOutlineErrorOutline } from 'react-icons/md';
import { IoIosCloseCircleOutline } from 'react-icons/io';

const Error = ({ onClose }) => {
  return (
    <div className='loading-div'>
      <MdOutlineErrorOutline fontSize={'3rem'} />
      <h1>please add any task.!</h1>
      <button onClick={onClose}>
        Close <IoIosCloseCircleOutline fontSize={'1.4rem'} />
      </button>
    </div>
  );
};

export default Error;
