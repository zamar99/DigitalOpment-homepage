import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import img from '../../assets/img/Uber_App_Icon.svg.svg';

export const Tech = () => {
  return (
    <div className='container'>
      <h1 style={{ textAlign: 'center' }}>TECHNOLOGY & BUSINESS</h1>
      <h2 style={{ textAlign: 'center' }}>PARTNERS AROUND THE WORLD</h2>
      <br />

      <CardGroup>
        <Card className='text-center'>
          <Card.Img variant='top' src={img} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to additional
              content. This content is a little bit longer.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className='text-center'>
          <Card.Img variant='top' src={img} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to additional content.{' '}
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className='text-center'>
          <Card.Img variant='top' src={img} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to additional content.{' '}
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className='text-center'>
          <Card.Img variant='top' src={img} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to additional content.{' '}
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>

      <br />

      <CardGroup>
        <Card className='text-center'>
          <Card.Img variant='top' src={img} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to additional
              content. This content is a little bit longer.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className='text-center'>
          <Card.Img variant='top' src={img} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to additional content.{' '}
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className='text-center'>
          <Card.Img variant='top' src={img} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to additional content.{' '}
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className='text-center'>
          <Card.Img variant='top' src={img} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to additional content.{' '}
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
};
