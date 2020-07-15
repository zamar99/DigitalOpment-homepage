import React from 'react';
import { Form, Col, Button } from 'react-bootstrap';

export default () => {
  return (
    <Form>
      <Form.Row>
        <Form.Group as={Col} controlId='formGridPassword'>
          <Form.Control
            style={{
              width: '80%',
              backgroundColor: 'transparent',
              border: '0px solid #ced4da',
              borderBottom: '1px solid #fff',
              padding: '30px',
              fontSize: '1rem',
              fontWeight: '400',
              color: 'white',
            }}
            placeholder='First Name'
          />
        </Form.Group>

        <Form.Group as={Col} controlId='formGridPassword'>
          <Form.Control
            style={{
              width: '80%',
              backgroundColor: 'transparent',
              border: '0px solid #ced4da',
              borderBottom: '1px solid #fff',
              padding: '30px',
              fontSize: '1rem',
              fontWeight: '400',
              color: 'white',
            }}
            placeholder='Last Name'
          />
        </Form.Group>
      </Form.Row>

      <Form.Group controlId='formGridAddress1'>
        <Form.Control
          style={{
            width: '90%',
            backgroundColor: 'transparent',
            border: '0px solid #ced4da',
            borderBottom: '1px solid #fff',
            padding: '30px',
            fontSize: '1rem',
            fontWeight: '400',
            color: 'white',
          }}
          placeholder='Email'
        />
      </Form.Group>

      <Form.Group controlId='formGridAddress2'>
        <Form.Control
          style={{
            width: '90%',
            backgroundColor: 'transparent',
            border: '0px solid #ced4da',
            borderBottom: '1px solid #fff',
            padding: '30px',
            fontSize: '1rem',
            fontWeight: '400',
            color: 'white',
          }}
          placeholder='Password'
          type='password'
        />
      </Form.Group>

      <Form.Group controlId='formGridAddress1'>
        <Form.Control
          style={{
            width: '90%',
            backgroundColor: 'transparent',
            border: '0px solid #ced4da',
            borderBottom: '1px solid #fff',
            padding: '30px',
            fontSize: '1rem',
            fontWeight: '400',
            color: 'white',
          }}
          placeholder='Phone Number'
          type='number'
        />
      </Form.Group>
      <br />
      <div style={{ width: '90%' }}>
        <Button className='btn-primary' size='sm' block>
          Sign In
        </Button>
      </div>
      <br />
    </Form>
  );
};
