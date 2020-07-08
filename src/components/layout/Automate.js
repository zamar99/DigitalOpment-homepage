import React from 'react';
import { CardGroup, Card } from 'react-bootstrap';
import img from '../../assets/img/our-main-services.png';

export const Automate = () => {
  return (
    <div>
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
      </CardGroup>

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
      </CardGroup>
    </div>
  );
};
