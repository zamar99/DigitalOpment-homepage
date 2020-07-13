import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const ProgressBar = () => {
  const percentage1 = 90;
  const percentage2 = 75;
  const percentage3 = 90;
  const percentage4 = 75;

  return (
    <div className='container'>
      <h1 style={{ fontWeight: '700px', textAlign: 'center', fontSize: '2em', margin: '.67em' }}>
        We Love To Share Our Facts.
      </h1>
      <p style={{ textAlign: 'center' }}>
        <b>
          The dilemma in the digital world is agencies mainly try to "Sell" what they have. We
          believe in customizing solutions, our services, our people, our processes and our thought
          process as per the needs of the clients and projects. This guarantees the best delivery
          and value for our clients.
        </b>
      </p>
      <br />
      <Row style={{ marginLeft: '10%' }}>
        <Col>
          <div style={{ width: '40%' }}>
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
            <br />
            <h4 style={{ marginTop: '10px', textAlign: 'center' }}>Satisfied Clients</h4>
          </div>
        </Col>
        <Col>
          <div style={{ width: '40%' }}>
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
            <h4 style={{ marginTop: '10px', textAlign: 'center' }}>Projects</h4>
          </div>
        </Col>
        <Col>
          <div style={{ width: '40%' }}>
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
            <br />
            <h4 style={{ marginTop: '10px', textAlign: 'center' }}>Team members</h4>
          </div>
        </Col>
        <Col>
          <div style={{ width: '40%' }}>
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
            <br />
            <h4 style={{ marginTop: '10px', textAlign: 'center' }}>Core Expertise</h4>
          </div>
        </Col>
      </Row>
    </div>
  );
};
