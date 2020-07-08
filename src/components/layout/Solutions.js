import React from 'react';
import img04 from '../../assets/img/04.svg';
import img05 from '../../assets/img/05.svg';
import img06 from '../../assets/img/06.svg';

export const Solutions = () => {
  return (
    <div className='sec-two'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-xl-5 col-lg-5 col-md-12 col-sm-12 animated fadeInUp delay-1s'>
            <h3 className='expert'>
              Discuss with our Experts & Choose the BEST SOLUTION FOR YOUR BUSINESS
            </h3>
          </div>
          <div className='col-xl-3 col-lg-2 col-md-5 col-sm-12 animated fadeInUp delay-2s'>
            <img className='mobileimg' src={img04} alt='img' />
            <a className='mobiletel' href='tel:+1 (000) 000-0000'>
              +1 (000) 000-0000
            </a>
          </div>
          <div className='col-xl-2 col-lg-2 col-md-3 col-sm-12 livepadd animated fadeInUp delay-3s'>
            <img className='chatimg' src={img05} alt='img' />
            <span className='livechat'>live Chat</span>
          </div>
          <div className='col-xl-2 col-lg-3 col-md-3 col-sm-12 livechatpadd animated fadeInUp delay-4s'>
            <img className='message' src={img06} alt='img' />
            <span className='messageinfo'>Email</span>
          </div>
        </div>
      </div>
    </div>
  );
};
