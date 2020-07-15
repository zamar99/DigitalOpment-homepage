import React from 'react';
import img from '../../assets/img/circle.png';

export const Tech = () => {
  return (
    <div className='container'>
      <h1
        style={{ textAlign: 'center', fontWeight: 'bolder', fontSize: '50px', margin: '.67em 0' }}
      >
        <strong>TECHNOLOGY & BUSINESS</strong>
      </h1>
      <h2 style={{ textAlign: 'center' }}>
        <strong>PARTNERS AROUND THE WORLD</strong>
      </h2>
      <br />
      <div>
        <img src={img} alt='img' />
      </div>
    </div>
  );
};
