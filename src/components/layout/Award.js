import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { BespokeDevelopment } from './BespokeDevelopment';
import './Award.css';
import { All } from './All';
import { Magneto } from './Magneto';
import { OpenCart } from './OpenCart';
import { WooCommerce } from './WooCommerce';
import { Spring } from 'react-spring/renderprops';

class Award extends Component {
  state = {
    showAward: 'All',
  };

  render() {
    const DisplayAward = this.state.showAward;

    return (
      <div className='container'>
        <Row>
          <Col>
            <h3>
              <strong>AWARD WINNING PROJECTS</strong>
            </h3>
          </Col>
          <button
            className='my-button'
            onClick={() => {
              this.setState({ showAward: 'All' });
            }}
          >
            All
          </button>
          <button
            className='my-button'
            onClick={() => {
              this.setState({ showAward: 'Bespoke' });
            }}
          >
            BESPOKE-DEVELOPMENT
          </button>
          <button
            className='my-button'
            onClick={() => {
              this.setState({ showAward: 'Magneto' });
            }}
          >
            MAGNETO
          </button>
          <button
            className='my-button'
            onClick={() => {
              this.setState({ showAward: 'OpenCart' });
            }}
          >
            OPEN-CART
          </button>
          <button
            className='my-button'
            onClick={() => {
              this.setState({ showAward: 'WooCommerce' });
            }}
          >
            WOOCOMMERCE
          </button>
        </Row>

        <br />
        {DisplayAward === 'All' && (
          <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} config={{ delay: 200, duration: 200 }}>
            {(props) => (
              <div style={props}>
                <All />
              </div>
            )}
          </Spring>
        )}
        {DisplayAward === 'Bespoke' && (
          <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} config={{ delay: 200, duration: 200 }}>
            {(props) => (
              <div style={props}>
                <BespokeDevelopment />
              </div>
            )}
          </Spring>
        )}
        {DisplayAward === 'Magneto' && (
          <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} config={{ delay: 200, duration: 200 }}>
            {(props) => (
              <div style={props}>
                <Magneto />
              </div>
            )}
          </Spring>
        )}
        {DisplayAward === 'OpenCart' && (
          <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} config={{ delay: 200, duration: 200 }}>
            {(props) => (
              <div style={props}>
                <OpenCart />
              </div>
            )}
          </Spring>
        )}
        {DisplayAward === 'WooCommerce' && (
          <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} config={{ delay: 200, duration: 200 }}>
            {(props) => (
              <div style={props}>
                <WooCommerce />
              </div>
            )}
          </Spring>
        )}
        <br />
      </div>
    );
  }
}

export default Award;
