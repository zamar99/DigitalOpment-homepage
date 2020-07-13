import React from 'react';
import { Card, CardGroup, Row, Col } from 'react-bootstrap';
import MultiStep from 'react-multistep';
import StepOne from '../MultiStepForm/stepOne';
import StepTwo from '../MultiStepForm/stepTwo';
import StepThree from '../MultiStepForm/stepThree';
import StepFour from '../MultiStepForm/stepFour';
import img from '../../assets/img/White.png';

const steps = [
  { component: <StepOne /> },
  { component: <StepTwo /> },
  { component: <StepThree /> },
  { component: <StepFour /> },
];

export default function ContactForm() {
  return (
    <div>
      <CardGroup>
        <Card className='text-center bg-dark text-white'>
          <Row>
            <Col>
              <div className='container'>
                <Card.Img src={img} style={{ width: '350px', height: '500px' }} />
              </div>
            </Col>
            <Col>
              <div className='container'>
                <MultiStep steps={steps} />
                <div className='container app-footer'>
                  <h6>Press 'Enter' or click on progress bar for next step.</h6>
                </div>
              </div>
            </Col>
          </Row>
        </Card>
      </CardGroup>
    </div>
  );
}
