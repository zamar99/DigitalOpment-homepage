import React from 'react';
import fb from '../../assets/img/facebook.jpg';
import twit from '../../assets/img/Twitter.jpg';
import pin from '../../assets/img/pinterest.jpg';
import istg from '../../assets/img/insta.jpg';
import lid from '../../assets/img/linkedin.jpg';
import './socialMedia.css';

export const SocialMedia = () => {
  return (
    <div className='social-footer-icons'>
      <div className='container-fluid mb-5'>
        <div className='row'>
          <div className='col-lg-2 col-sm-12 d-block m-auto p-0'>
            <div className='box20 yellow'>
              <img src={fb} alt='img' />
              <div className='box-content'>
                <a href='https://www.facebook.com/Digitalopment/?_rdc=1&_rdr'>
                  <i className='fab fa-facebook circle-icon' />
                </a>
              </div>
            </div>
          </div>
          <div className='col-lg-2 col-sm-12 d-block m-auto p-0'>
            <div className='box20 box30 yellow'>
              <img src={twit} alt='img' />
              <div className='box-content'>
                <a href='https://twitter.com/digitalopment'>
                  <i className='fab fa-twitter circle-icon' />
                </a>
              </div>
            </div>
          </div>
          <div className='col-lg-2 col-sm-12 d-block m-auto p-0'>
            <div className='box20 box40 yellow'>
              <img src={pin} alt='img' />
              <div className='box-content'>
                <a href='https://www.pinterest.com/digitalopment0434/'>
                  <i className='fab fa-pinterest circle-icon' />
                </a>
              </div>
            </div>
          </div>
          <div className='col-lg-2 col-sm-12 d-block m-auto p-0'>
            <div className='box20 box50 yellow'>
              <img src={istg} alt='img' />
              <div className='box-content'>
                <a href='https://www.instagram.com/digitalopment/'>
                  <i className='fab fa-instagram circle-icon' />
                </a>
              </div>
            </div>
          </div>
          <div className='col-lg-2 col-sm-12 d-block m-auto p-0'>
            <div className='box20 box60 yellow'>
              <img src={lid} alt='img' />
              <div className='box-content'>
                <a href='https://www.linkedin.com/company/digitalopment/'>
                  <i className='fab fa-linkedin circle-icon' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
