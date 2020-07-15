import React from 'react';
import { Row, Container } from 'react-bootstrap';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { ProgressCircle } from '../progressCircle/ProgressCircle';

export const ProgressBar = () => {
  const percentage1 = 90;
  const percentage2 = 75;
  const percentage3 = 90;
  const percentage4 = 75;

  return (
    <div className='container'>
      <h1 style={{ fontWeight: 'bold', textAlign: 'center', fontSize: '2em', margin: '.67em' }}>
        We Love To Share Our Facts.
      </h1>
      <p style={{ textAlign: 'center', fontWeight: 'bold' }}>
        The dilemma in the digital world is agencies mainly try to "Sell" what they have. We believe
        in customizing solutions, our services, our people, our processes and our thought process as
        per the needs of the clients and projects. This guarantees the best delivery and value for
        our clients.
      </p>
      <br />
      <Container>
        <Row>
          <div className='col-lg-6 col-md-12 col-sm-12'>
            <ProgressCircle />
          </div>
          <div className='col-lg-6 col-md-12 col-sm-12 pt-5'>
            <div className='container' style={{ marginLeft: '20px' }}>
              <div className='row'>
                <div className='col-lg-6'>
                  <div style={{ width: '70%' }}>
                    <CircularProgressbar
                      value={percentage1}
                      text={`${percentage1}%`}
                      background
                      backgroundPadding={6}
                      styles={buildStyles({
                        backgroundColor: '#3e98c7',
                        textColor: '#fff',
                        pathColor: '#fff',
                        trailColor: 'transparent',
                      })}
                    />
                  </div>
                  <br />
                  <h4 style={{ textAlign: 'center', marginRight: '50px' }}>Satisfied Clients</h4>
                </div>
                <div className='col-lg-6'>
                  <div style={{ width: '70%' }}>
                    <CircularProgressbar
                      value={percentage2}
                      text={`${percentage2}%`}
                      background
                      backgroundPadding={6}
                      styles={buildStyles({
                        backgroundColor: '#3e98c7',
                        textColor: '#fff',
                        pathColor: '#fff',
                        trailColor: 'transparent',
                      })}
                    />
                    <br />
                  </div>
                  <h4 style={{ marginTop: '20px', textAlign: 'center', marginRight: '50px' }}>
                    Projects
                  </h4>
                </div>
              </div>
              <div className='row pt-5 '>
                <div className='col-lg-6'>
                  <div style={{ width: '70%' }}>
                    <CircularProgressbar
                      value={percentage3}
                      text={`${percentage3}%`}
                      background
                      backgroundPadding={6}
                      styles={buildStyles({
                        backgroundColor: '#3e98c7',
                        textColor: '#fff',
                        pathColor: '#fff',
                        trailColor: 'transparent',
                      })}
                    />
                  </div>
                  <br />
                  <h4 style={{ textAlign: 'center', marginRight: '50px' }}>Team members</h4>
                </div>
                <div className='col-lg-6'>
                  <div style={{ width: '70%' }}>
                    <CircularProgressbar
                      value={percentage4}
                      text={`${percentage4}%`}
                      background
                      backgroundPadding={6}
                      styles={buildStyles({
                        backgroundColor: '#3e98c7',
                        textColor: '#fff',
                        pathColor: '#fff',
                        trailColor: 'transparent',
                      })}
                    />
                  </div>
                  <br />
                  <h4 style={{ textAlign: 'center', marginRight: '50px' }}>Core Expertise</h4>
                </div>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};
