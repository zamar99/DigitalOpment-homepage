import React from 'react';
import { CardGroup, Card } from 'react-bootstrap';
import img from '../../assets/img/14.png';

export const Locations = () => {
  return (
    <div className='container'>
      <h2 style={{ textAlign: 'center' }}>
        <b>OUR GLOBAL OFFICES</b>
      </h2>
      <br />
      <Card>
        <Card.Img variant='top' src={img} />
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the card's
            content.
          </Card.Text>
        </Card.Body>
      </Card>
      <CardGroup>
        <Card className='text-center'>
          <Card.Body>
            <Card.Title>EUROPE</Card.Title>
            <Card.Text>
              <p>U.K</p>
              <p>Upper Willsley House, Angley Road,</p>
              <p>Cranbrook, Kent, TN17 2LF.</p>
              <p>PHONE : +1 (100) 000-1000</p>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className='text-center'>
          <Card.Body>
            <Card.Title>EUROPE</Card.Title>
            <Card.Text>
              <p>U.K</p>
              <p>Upper Willsley House, Angley Road,</p>
              <p>Cranbrook, Kent, TN17 2LF.</p>
              <p>PHONE : +1 (100) 000-1000</p>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className='text-center'>
          <Card.Body>
            <Card.Title>AMERICA</Card.Title>
            <Card.Text>
              <p>U.K</p>
              <p>Upper Willsley House, Angley Road,</p>
              <p>Cranbrook, Kent, TN17 2LF.</p>
              <p>PHONE : +1 (100) 000-1000</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>

      <br />

      <CardGroup>
        <Card className='text-center'>
          <Card.Body>
            <Card.Title>ASIA</Card.Title>
            <Card.Text>
              <p>U.K</p>
              <p>Upper Willsley House, Angley Road,</p>
              <p>Cranbrook, Kent, TN17 2LF.</p>
              <p>PHONE : +1 (100) 000-1000</p>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className='text-center'>
          <Card.Body>
            <Card.Title>EUROPE</Card.Title>
            <Card.Text>
              <p>U.K</p>
              <p>Upper Willsley House, Angley Road,</p>
              <p>Cranbrook, Kent, TN17 2LF.</p>
              <p>PHONE : +1 (100) 000-1000</p>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className='text-center'>
          <Card.Body>
            <Card.Title>EUROPE</Card.Title>
            <Card.Text>
              <p>U.K</p>
              <p>Upper Willsley House, Angley Road,</p>
              <p>Cranbrook, Kent, TN17 2LF.</p>
              <p>PHONE : +1 (100) 000-1000</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
};
