import React, { useState } from 'react';
import { Form, Col, Button } from 'react-bootstrap';

export default () => {
  return (
    <Form>
      <Form.Row>
        <Form.Group as={Col} controlId='formGridEmail'>
          <Form.Control type='email' placeholder='Enter email' />
        </Form.Group>

        <Form.Group as={Col} controlId='formGridPassword'>
          <Form.Control type='password' placeholder='Password' />
        </Form.Group>
      </Form.Row>

      <Form.Group controlId='formGridAddress1'>
        <Form.Control placeholder='Address' />
      </Form.Group>

      <Form.Group controlId='formGridAddress2'>
        <Form.Control placeholder='Address 2' />
      </Form.Group>

      <Form.Row>
        <Form.Group as={Col} controlId='formGridState'>
          <Form.Control as='select' defaultValue='Choose...'>
            <option>State</option>
            <option>...</option>
          </Form.Control>
        </Form.Group>

        <Form.Group as={Col} controlId='formGridZip'>
          <Form.Control />
        </Form.Group>
      </Form.Row>

      <Form.Group id='formGridCheckbox'>
        <Form.Check type='checkbox' label='Check me out' />
      </Form.Group>
    </Form>
  );
};
