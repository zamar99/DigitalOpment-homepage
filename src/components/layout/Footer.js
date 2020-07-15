import React, { Component } from 'react';
import AnimateHeight from 'react-animate-height';
import './footer.css';

class Footer extends Component {
  state = {
    height: 0,
  };

  toggle = () => {
    const { height } = this.state;

    this.setState({
      height: height === 0 ? 'auto' : 0,
    });
  };

  render() {
    const { height } = this.state;

    return (
      <div>
        <div style={{ textAlign: 'center' }}>
          <button className='reveal' onClick={this.toggle}>
            {height === 0 ? 'Show Site index ' : 'Hide Site index '}
            <i class='fa fa-arrow-down' aria-hidden='true' />
          </button>
        </div>

        <AnimateHeight
          duration={500}
          height={height} // see props documentation below
        >
          <div
            className='slider newfooter-padd'
            style={{ backgroundColor: 'black', color: '#525153' }}
          >
            <div className='container-fluid'>
              <div className='row'>
                <div className='col-lg-3 col-md-12 col-sm-12'>
                  <div className='footer-col-1'>
                    <ul
                      className='space_list'
                      style={{ paddingTop: '50px', listStyleType: 'none' }}
                    >
                      <li>
                        <a href='/'>
                          <h2 className='font-weight-bold'>Services</h2>
                        </a>
                      </li>
                      <li>
                        <a href='/'>Web Development</a>
                      </li>
                      <li>
                        <a href='/'>Mobile App Development</a>
                      </li>
                      <li>
                        <a href='/'>Software Development</a>
                      </li>
                      <li>
                        <a href='/'>Managed Cloud Hosting</a>
                      </li>
                      <li>
                        <a href='/'>Startups</a>
                      </li>
                      <li>
                        <a href='/'>Digital Marketing</a>
                      </li>
                      <li>
                        <a href='/'>Business Process Outsourcing</a>
                      </li>
                      <li>
                        <a href='/'>Business Intelligence</a>
                      </li>
                      <li>
                        <a href='/'>IT Management Services</a>
                      </li>
                      <li>
                        <a href='/'>Social Media Management</a>
                      </li>
                      <li>
                        <a href='/'>SEO Development</a>
                      </li>
                      <li>
                        <a href='/'>Content Writting</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='col-lg-3 col-md-12 col-sm-12'>
                  <div className='footer-col-2'>
                    <ul
                      className='space_list'
                      style={{ paddingTop: '50px', listStyleType: 'none' }}
                    >
                      <li>
                        <a href='/'>
                          <h2 className='font-weight-bold'>Home</h2>
                        </a>
                      </li>
                      <li>
                        <a href='/'>Carers</a>
                      </li>
                      <li>
                        <a href='/'>Blog</a>
                      </li>
                      <li>
                        <a href='/'>About Us</a>
                      </li>
                      <li>
                        <a href='/'>Contact Us</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='col-lg-3 col-md-12 col-sm-12'>
                  <div className='footer-col-3'>
                    <ul
                      className='space_list'
                      style={{ paddingTop: '50px', listStyleType: 'none' }}
                    >
                      <li>
                        <a href='/'>
                          <h2 className='font-weight-bold'>Quick Links</h2>
                        </a>
                      </li>
                      <li>
                        <a href='/'>Partnership </a>
                      </li>
                      <li>
                        <a href='/'>inquires</a>
                      </li>
                      <li>
                        <a href='/'>Client Portal</a>
                      </li>
                      <li>
                        <a href='/'>Privacy Policy</a>
                      </li>
                      <li>
                        <a href='/'>Terms & Condition</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='col-lg-3 col-md-12 col-sm-12'>
                  <div className='footer-col-3 pt-4'>
                    <div className='subscribe-text' style={{ marginTop: '55px' }}>
                      <span>JOIN OUR NEWSLETTER</span>
                      <h2 className='pb-3'>subscribe newsletter</h2>
                    </div>
                    <div className='subscribe-wrapper subscribe2-wrapper'>
                      <div className='subscribe-form'>
                        <form action='#'>
                          <input
                            className='mb-3'
                            placeholder='enter your email address'
                            type='email'
                          />
                          <button>
                            subscribe<i className='fas fa-long-arrow-alt-right'></i>
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimateHeight>
      </div>
    );
  }
}

export default Footer;
