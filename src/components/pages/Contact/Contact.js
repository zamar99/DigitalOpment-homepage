import React from 'react';
import './cotact.css';
import { Spring } from 'react-spring/renderprops';
import img1 from '../../../assets/img/mouse.png';
import { Locations } from '../../layout/Locations';
import ProjectForm from '../../layout/ProjectForm';

export default function Contact() {
  return (
    <div>
      <Spring from={{ opacity: 0, marginTop: -500 }} to={{ opacity: 1, marginTop: 0 }}>
        {(props) => (
          <div style={props}>
            <div className='contact-hero-section'>
              <div className='video-container'>
                <h1 className='ml3'>
                  <b>Get in Touch!</b>
                </h1>
                <a href='#mousenew' className='mouseeffectone'>
                  <img className='mouseimg-about hvr-wobble-vertical' src={img1} alt='img' />
                </a>
              </div>
              <div className='hero-section'>
                <div className='icon-bar'>
                  <a
                    target='_blank'
                    href='https://www.facebook.com/Digitalopment/?_rdc=1&_rdr'
                    className='fab fa-facebook facebook-i hvr-bob'
                  ></a>
                  <a
                    target='_blank'
                    href='https://twitter.com/digitalopment'
                    className='fab fa-twitter hvr-bob twitter-i'
                  ></a>
                  <a
                    target='_blank'
                    href='https://www.pinterest.com/digitalopment0434/'
                    className='fab fa-pinterest hvr-bob printerest-i'
                  ></a>
                  <a
                    target='_blank'
                    href='https://www.instagram.com/digitalopment/'
                    className='fab fa-instagram  hvr-bob instagram-i'
                  ></a>
                  <a
                    target='_blank'
                    href='https://www.linkedin.com/company/digitalopment/'
                    className='fab fa-linkedin hvr-bob linkedin-i'
                  ></a>
                </div>
              </div>
            </div>
          </div>
        )}
      </Spring>
      <br />
      <br />

      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} config={{ delay: 1000, duration: 1000 }}>
        {(props) => (
          <div style={props}>
            <Locations />
          </div>
        )}
      </Spring>

      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} config={{ delay: 2000, duration: 2000 }}>
        {(props) => (
          <div style={props}>
            <ProjectForm />
          </div>
        )}
      </Spring>
      <br />
    </div>
  );
}
