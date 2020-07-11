import React from 'react';
import { Spring } from 'react-spring/renderprops';

export default function experience() {
  return (
    <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} config={{ delay: 1000, duration: 1000 }}>
      {(props) => (
        <div style={props}>
          <div>
            <h1 className='make-your-visit text-center'>Make your visit a unique experience</h1>
            <hr className='make-your-visit-hr' />
            <p className='make-your-visit-p' style={{ marginLeft: '5px', marginRight: '5px' }}>
              We ensure that once we take a project on-board, we provide 360 degree solutions. As
              Arpatech is a technological hub, we give your project the ultimate platform it needs
              to be scalable and successful.
            </p>
            <div className='card-columns'>
              <div className='card bg-light'>
                <div className='card-body text-center'>
                  <p className='card-text'>Some text inside the first card</p>
                </div>
              </div>
              <div className='card bg-light'>
                <div className='card-body text-center'>
                  <p className='card-text'>Some text inside the second card</p>
                </div>
              </div>
              <div className='card bg-light'>
                <div className='card-body text-center'>
                  <p className='card-text'>Some text inside the third card</p>
                </div>
              </div>
              <div className='card bg-light'>
                <div className='card-body text-center'>
                  <p className='card-text'>Some text inside the fourth card</p>
                </div>
              </div>
              <div className='card bg-light'>
                <div className='card-body text-center'>
                  <p className='card-text'>Some text inside the fifth card</p>
                </div>
              </div>
              <div className='card bg-light'>
                <div className='card-body text-center'>
                  <p className='card-text'>Some text inside the sixth card</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Spring>
  );
}
