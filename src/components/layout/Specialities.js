import React from 'react';
import icon1 from '../../assets/img/icon1.png';
import icon2 from '../../assets/img/icon2.png';
import icon3 from '../../assets/img/icon3.png';
import icon4 from '../../assets/img/icon4.png';

export const Specialities = () => {
  return (
    <div
      id='mousenew'
      className='sec-one'
      style={{ background: 'black', color: 'white', height: '40%' }}
    >
      <div className='container'>
        <div className='row'>
          <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 animated bounceInLeft delay-2s'>
            <div className='sec-one-info'>
              <h1
                className='ml2'
                style={{ marginTop: '50px', color: '#1F4685', fontWeight: 'bold' }}
              >
                OUR
              </h1>
              <h1 style={{ color: '#1F4685', fontWeight: 'bold' }}>SPECIALITIES</h1>
              <p style={{ fontWeight: 'bold' }}>
                We ensure that once we take a project on-board, we provide 360 degree solutions. As
                Arpatech is a technological hub, we give your project the ultimate platform it needs
                to be scalable and successful.
              </p>
            </div>
          </div>
          <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 animated bounceInRight delay-2s'>
            <div className='sec-one-icons'>
              <div className='row' style={{ marginTop: '40px' }}>
                <div className='col-lg-3 col-md-3 col-sm-12 animated fadeInDown delay-3s'>
                  <img src={icon1} alt='img' />
                  <p>
                    WEB DESIGN &<br /> DEVELOPMENT
                  </p>
                </div>
                <div className='col-lg-3 col-md-3 col-sm-12 animated fadeInDown delay-3s'>
                  <img src={icon2} alt='img' />
                  <p>
                    MOBLIE APP
                    <br />
                    DEVELOPMENT
                  </p>
                </div>
                <div className='col-lg-3 col-md-3 col-sm-12 animated fadeInDown delay-4s'>
                  <img src={icon3} alt='img' />
                  <p>
                    SOFTWARE
                    <br />
                    DEVELOPMENT
                  </p>
                </div>
                <div className='col-lg-3 col-md-3 col-sm-12 animated fadeInDown delay-5s'>
                  <img src={icon4} alt='img' />
                  <p>
                    SOFTWARE
                    <br />
                    DEVELOPMENT
                  </p>
                </div>
              </div>
              <div className='sec-one-icons1'>
                <div className='row'>
                  <div className='col-lg-3 col-md-3 col-sm-12 animated fadeInDown delay-3s'>
                    <img src={icon1} alt='img' />
                    <p>
                      WEB DESIGN &<br /> DEVELOPMENT
                    </p>
                  </div>
                  <div className='col-lg-3 col-md-3 col-sm-12 animated fadeInDown delay-3s'>
                    <img src={icon2} alt='img' />
                    <p>
                      MOBLIE APP
                      <br />
                      DEVELOPMENT
                    </p>
                  </div>
                  <div className='col-lg-3 col-md-3 col-sm-12 animated fadeInDown delay-4s'>
                    <img src={icon3} alt='img' />
                    <p>
                      SOFTWARE
                      <br />
                      DEVELOPMENT
                    </p>
                  </div>
                  <div className='col-lg-3 col-md-3 col-sm-12 animated fadeInDown delay-5s'>
                    <img src={icon4} alt='img' />
                    <p>
                      SOFTWARE
                      <br />
                      DEVELOPMENT
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
