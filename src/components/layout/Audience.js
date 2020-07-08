import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export const Audience = () => {
  return (
    <Container>
      <Row>
        <Col xs={6}>
          <h1 className='title'>ACTIVITIES,SPECIAL EVENTS</h1>
          <h2 className='more-h2'>
            FAMILY FUN <span className='MUCH-color'>&MUCH MORE</span>
          </h2>
          <p className='exhibits-p font-italic'>EXHIBITS, INTERACTIVE DISPLAYS, ARTEFACTS</p>
        </Col>
        <Col lg={2}>
          <div className='card bg-primary text-white view overlay zoom'>
            <div className='card-body'>
              <h4 className='card-title'>Audience</h4>
              <p className='card-text'>Some example text. Some example text.</p>
            </div>
          </div>
        </Col>
        <Col lg={2}>
          <div className='card bg-primary text-white'>
            <div className='card-body'>
              <h4 className='card-title'>Audience</h4>
              <p className='card-text'>Some example text. Some example text.</p>
            </div>
          </div>
        </Col>
        <Col lg={2}>
          <div className='card bg-primary text-white'>
            <div className='card-body'>
              <h4 className='card-title'>Audience</h4>
              <p className='card-text'>Some example text. Some example text.</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
