import React, { Fragment } from 'react';
import vid from '../../assets/video/Introducing Digitalopment The leading Digital Marketing Agency.mp4';
import { Audience } from '../layout/Audience';
import { Experience } from '../layout/Experience';
import { Specialities } from '../layout/Specialities';
import { Solutions } from '../layout/Solutions';
import { Sec3 } from '../layout/Sec3';
import ContactForm from '../layout/ContactForm';
import { Award } from '../layout/Award';
import { Tech } from '../layout/Tech';
import { Awards } from '../layout/Awards';
import ProjectForm from '../layout/ProjectForm';
import { Locations } from '../layout/Locations';
import { Footer } from '../layout/Footer';

export const Home = () => {
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
      <ContactForm />
      <hr />
      <Award />
      <hr />
      <Tech />
      <hr />
      <Awards />
      <hr />
      <ProjectForm />
      <hr />
      <br />
      <Locations />
      <hr />
      <Footer />
    </Fragment>
  );
};
