import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Col, Button, Form } from 'react-bootstrap';
import { Automate } from './Automate';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function ContactForm() {
  const classes = useStyles();

  return (
    <div className='container'>
      <Card className={classes.root} variant='outlined'>
        <CardContent>
          <Form>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>First Name</Form.Label>
                <Form.Control type='text' placeholder='First Name' />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Last Name</Form.Label>
                <Form.Control type='text' placeholder='Last Name' />
              </Form.Group>
            </Form.Row>

            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control type='email' placeholder='Email' />
            </Form.Group>

            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control placeholder='password' type='password' />
            </Form.Group>

            <Button variant='primary' type='submit'>
              Sign in
            </Button>
          </Form>
        </CardContent>
      </Card>
      <hr />
      <h2 style={{ textAlign: 'center' }}>
        <b>We Love To Share Our Facts.</b>
      </h2>
      <p style={{ textAlign: 'center' }}>
        <b>
          The dilemma in the digital world is agencies mainly try to "Sell" what they have. We
          believe in customizing solutions, our services, our people, our processes and our thought
          process as per the needs of the clients and projects. This guarantees the best delivery
          and value for our clients.
        </b>
      </p>

      <br />
      <Automate />
    </div>
  );
}
