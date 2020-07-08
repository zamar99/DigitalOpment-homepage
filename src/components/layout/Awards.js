import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

export const Awards = () => {
  return (
    <div className='container'>
      <h1 style={{ textAlign: 'center' }}>
        <b>Awards</b>
      </h1>
      <br />
      <CardGroup>
        <Card className='text-center'>
          <Card.Img variant='top' src='/' />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to additional
              content. This content is a little bit longer.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className='text-center'>
          <Card.Img variant='top' src='/' />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to additional content.{' '}
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className='text-center'>
          <Card.Img variant='top' src='/' />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to additional content.{' '}
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className='text-center'>
          <Card.Img variant='top' src='/' />
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
