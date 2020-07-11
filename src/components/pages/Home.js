import React, { Fragment } from 'react';
import vid from '../../assets/video/Introducing Digitalopment The leading Digital Marketing Agency.mp4';
import Audience from '../layout/Audience';
import Experience from '../layout/Experience';
import { Specialities } from '../layout/Specialities';
import { Solutions } from '../layout/Solutions';
import { Sec3 } from '../layout/Sec3';
import ContactForm from '../layout/ContactForm';
import { Award } from '../layout/Award';
import { Tech } from '../layout/Tech';
import { Awards } from '../layout/Awards';
import ProjectForm from '../layout/ProjectForm';
import { Locations } from '../layout/Locations';
import { Spring } from 'react-spring/renderprops';

export default function Home() {
  return (
    <Fragment>
      <video
        autoPlay
        loop
        muted
        style={{
          width: '100%',
          left: '50%',
          top: '50%',
          height: '100%',
          objectFit: 'cover',
        }}
      >
        <source src={vid} type='video/mp4' />
      </video>
      <br />
      <br />
      <Audience />
      <br />
      <br />
      <hr />
      <Experience />
      <br />
      <br />
      <hr />
      <Specialities />
      <br />
      <br />
      <Solutions />
      <br />
      <hr />
      <Sec3 />
      <hr />
      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} config={{ delay: 1000, duration: 1000 }}>
        {(props) => (
          <div style={props}>
            <ContactForm />
          </div>
        )}
      </Spring>

      <hr />
      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} config={{ delay: 2000, duration: 2000 }}>
        {(props) => (
          <div style={props}>
            <Award />
          </div>
        )}
      </Spring>

      <hr />
      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} config={{ delay: 3000, duration: 3000 }}>
        {(props) => (
          <div style={props}>
            <Tech />
          </div>
        )}
      </Spring>

      <hr />
      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} config={{ delay: 4000, duration: 4000 }}>
        {(props) => (
          <div style={props}>
            <Awards />
          </div>
        )}
      </Spring>

      <hr />
      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} config={{ delay: 5000, duration: 5000 }}>
        {(props) => (
          <div style={props}>
            <ProjectForm />
          </div>
        )}
      </Spring>

      <hr />
      <br />
      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} config={{ delay: 6000, duration: 6000 }}>
        {(props) => (
          <div style={props}>
            <Locations />
          </div>
        )}
      </Spring>

      <hr />
    </Fragment>
  );
}
