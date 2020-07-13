import React from 'react';
import './career.css';
import { Spring } from 'react-spring/renderprops';
import img1 from '../../../assets/img/mouse.png';
import { Form, Col } from 'react-bootstrap';
import { Button } from '@material-ui/core';
import ProjectForm from '../../layout/ProjectForm';

export default function Career() {
  return (
    <div>
      <Spring from={{ opacity: 0, marginTop: -500 }} to={{ opacity: 1, marginTop: 0 }}>
        {(props) => (
          <div style={props}>
            <div className='contact-hero-section'>
              <div className='video-container'>
                <h1 className='ml3'>
                  <b>GRAPHIC DESIGNING</b>
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
            <div className='container' style={{ textAlign: 'center' }}>
              <h1>
                <b>Job Details</b>
              </h1>
              <h2>Find out your job opportunities</h2>
              <br />
              <Form>
                <Form.Row>
                  <Col>
                    <Form.Control placeholder='Job Title/Keywords' />
                  </Col>
                  <Col>
                    <Form.Control as='select' defaultValue='choose'>
                      <option>Location</option>
                      <option>...</option>
                    </Form.Control>
                  </Col>
                  <Col>
                    <Form.Control as='select' defaultValue='choose'>
                      <option>Select Category</option>
                      <option>...</option>
                    </Form.Control>
                  </Col>
                  <Col>
                    <Button
                      style={{
                        backgroundColor: '#0073b0',
                        width: '190px',
                        color: 'white',
                      }}
                      variant='raised'
                    >
                      Search Now
                    </Button>
                  </Col>
                </Form.Row>
              </Form>
            </div>
          </div>
        )}
      </Spring>

      <br />
      <br />

      <div className='container'>
        <div className='row'>
          <div className='col s12 m6'>
            <div className='card myStyle blue-grey darken-1'>
              <div className='card-content white-text'>
                <h3 style={{ fontSize: '40px', marginTop: '40px' }}>Creative Graphic Designer</h3>
              </div>
            </div>
          </div>
          <div className='col s12 m6'>
            <div className='card myStyle blue-grey darken-1'>
              <div className='card-content white-text'>
                <h3 style={{ fontSize: '35px', marginTop: '70px' }}>Web Design & Development</h3>
              </div>
            </div>
          </div>
          <div className='col s12 m6'>
            <div className='card myStyle blue-grey darken-1'>
              <div className='card-content white-text'>
                <h3 style={{ fontSize: '40px', marginTop: '60px' }}>Mobile App Development</h3>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className='row'>
          <div className='col s12 m6'>
            <div className='card myStyle blue-grey darken-1'>
              <div className='card-content white-text'>
                <h3 style={{ fontSize: '40px', marginTop: '50px' }}>Content Management</h3>
              </div>
            </div>
          </div>
          <div className='col s12 m6'>
            <div className='card myStyle blue-grey darken-1'>
              <div className='card-content white-text'>
                <h3 style={{ fontSize: '40px', marginTop: '40px' }}>Search Engine Optimization</h3>
              </div>
            </div>
          </div>
          <div className='col s12 m6'>
            <div className='card myStyle blue-grey darken-1'>
              <div className='card-content white-text'>
                <h3 style={{ fontSize: '40px', marginTop: '60px' }}>Video Animation</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
      <ProjectForm />
    </div>
  );
}
