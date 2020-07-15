import React from 'react';
import { Row, Card } from 'react-bootstrap';
import img from '../../assets/img/img (73).jpg';

export const All = () => {
  return (
    <div>
      <Row style={{ marginLeft: '20px', marginTop: '20px' }}>
        <div>
          <Card className='bg-dark text-white'>
            <Card.Img src={img} alt='Card image' style={{ width: '350px' }} />
            <Card.ImgOverlay>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to additional
                content. This content is a little bit longer.
              </Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
          </Card>
        </div>
        <div style={{ marginLeft: '20px' }}>
          <Card className='bg-dark text-white'>
            <Card.Img src={img} alt='Card image' style={{ width: '350px' }} />
            <Card.ImgOverlay>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to additional
                content. This content is a little bit longer.
              </Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
          </Card>
        </div>
        <div style={{ marginLeft: '20px' }}>
          <Card className='bg-dark text-white'>
            <Card.Img src={img} alt='Card image' style={{ width: '350px' }} />
            <Card.ImgOverlay>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to additional
                content. This content is a little bit longer.
              </Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
          </Card>
        </div>
      </Row>
      <br />
      <Row style={{ marginLeft: '20px' }}>
        <div>
          <Card className='bg-dark text-white'>
            <Card.Img src={img} alt='Card image' style={{ width: '350px' }} />
            <Card.ImgOverlay>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to additional
                content. This content is a little bit longer.
              </Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
          </Card>
        </div>
        <div style={{ marginLeft: '20px' }}>
          <Card className='bg-dark text-white'>
            <Card.Img src={img} alt='Card image' style={{ width: '350px' }} />
            <Card.ImgOverlay>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to additional
                content. This content is a little bit longer.
              </Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
          </Card>
        </div>
        <div style={{ marginLeft: '20px' }}>
          <Card className='bg-dark text-white'>
            <Card.Img src={img} alt='Card image' style={{ width: '350px' }} />
            <Card.ImgOverlay>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to additional
                content. This content is a little bit longer.
              </Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
          </Card>
        </div>
      </Row>
    </div>
  );
};
