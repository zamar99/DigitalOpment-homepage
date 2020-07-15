import React from 'react';
import { CardGroup, Card } from 'react-bootstrap';
import img from '../../assets/img/14.png';

export const Locations = () => {
  return (
    <div>
      <h2 style={{ textAlign: 'center', fontWeight: 'bold' }}>OUR GLOBAL OFFICES</h2>
      <br />
      <Card>
        <Card.Img variant='top' src={img} />
      </Card>
      <CardGroup>
        <Card className='text-left'>
          <Card.Body>
            <Card.Title style={{ fontWeight: 'bold', color: '#2D6C9F' }}>EUROPE</Card.Title>
            <Card.Text>
              <p style={{ fontWeight: 'bold' }}>U.K</p>
              <p style={{ fontWeight: 'bold' }}>Upper Willsley House, Angley Road,</p>
              <p style={{ fontWeight: 'bold' }}>Cranbrook, Kent, TN17 2LF.</p>
              <p style={{ fontWeight: 'bold' }}>PHONE : +1 (100) 000-1000</p>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className='text-center'>
          <Card.Body>
            <Card.Title style={{ fontWeight: 'bold', color: '#2D6C9F' }}>EUROPE</Card.Title>
            <Card.Text>
              <p style={{ fontWeight: 'bold' }}>U.K</p>
              <p style={{ fontWeight: 'bold' }}>Upper Willsley House, Angley Road,</p>
              <p style={{ fontWeight: 'bold' }}>Cranbrook, Kent, TN17 2LF.</p>
              <p style={{ fontWeight: 'bold' }}>PHONE : +1 (100) 000-1000</p>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className='text-right'>
          <Card.Body>
            <Card.Title style={{ fontWeight: 'bold', color: '#2D6C9F' }}>AMERICA</Card.Title>
            <Card.Text>
              <p style={{ fontWeight: 'bold' }}>U.K</p>
              <p style={{ fontWeight: 'bold' }}>Upper Willsley House, Angley Road,</p>
              <p style={{ fontWeight: 'bold' }}>Cranbrook, Kent, TN17 2LF.</p>
              <p style={{ fontWeight: 'bold' }}>PHONE : +1 (100) 000-1000</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>

      <CardGroup>
        <Card className='text-left'>
          <Card.Body>
            <Card.Title style={{ fontWeight: 'bold', color: '#2D6C9F' }}>ASIA</Card.Title>
            <Card.Text>
              <p style={{ fontWeight: 'bold' }}>U.K</p>
              <p style={{ fontWeight: 'bold' }}>Upper Willsley House, Angley Road,</p>
              <p style={{ fontWeight: 'bold' }}>Cranbrook, Kent, TN17 2LF.</p>
              <p style={{ fontWeight: 'bold' }}>PHONE : +1 (100) 000-1000</p>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className='text-center'>
          <Card.Body>
            <Card.Title style={{ fontWeight: 'bold', color: '#2D6C9F' }}>EUROPE</Card.Title>
            <Card.Text>
              <p style={{ fontWeight: 'bold' }}>U.K</p>
              <p style={{ fontWeight: 'bold' }}>Upper Willsley House, Angley Road,</p>
              <p style={{ fontWeight: 'bold' }}>Cranbrook, Kent, TN17 2LF.</p>
              <p style={{ fontWeight: 'bold' }}>PHONE : +1 (100) 000-1000</p>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className='text-right'>
          <Card.Body>
            <Card.Title style={{ fontWeight: 'bold', color: '#2D6C9F' }}>EUROPE</Card.Title>
            <Card.Text>
              <p style={{ fontWeight: 'bold' }}>U.K</p>
              <p style={{ fontWeight: 'bold' }}>Upper Willsley House, Angley Road,</p>
              <p style={{ fontWeight: 'bold' }}>Cranbrook, Kent, TN17 2LF.</p>
              <p style={{ fontWeight: 'bold' }}>PHONE : +1 (100) 000-1000</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
};
