import React from 'react';

export const Footer = () => {
  return (
    <footer id='sticky-footer'>
      <div>
        <a className='reveal more' href='/'>
          {' '}
          <i className='fa fa-arrow-down' aria-hidden='true'></i>
        </a>
      </div>
      <div className='slider newfooter-padd'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-3 col-md-12 col-sm-12'>
              <div className='footer-col-1'>
                <ul>
                  <li>
                    <a href='#'>
                      <h2 className='font-weight-bold'>Services</h2>
                    </a>
                  </li>
                  <li>
                    <a href='#'>Web Development</a>
                  </li>
                  <li>
                    <a href='#'>Mobile App Development</a>
                  </li>
                  <li>
                    <a href='#'>Software Development</a>
                  </li>
                  <li>
                    <a href='#'>Managed Cloud Hosting</a>
                  </li>
                  <li>
                    <a href='#'>Startups</a>
                  </li>
                  <li>
                    <a href='#'>Digital Marketing</a>
                  </li>
                  <li>
                    <a href='#'>Business Process Outsourcing</a>
                  </li>
                  <li>
                    <a href='#'>Business Intelligence</a>
                  </li>
                  <li>
                    <a href='#'>IT Management Services</a>
                  </li>
                  <li>
                    <a href='#'>Social Media Management</a>
                  </li>
                  <li>
                    <a href='#'>SEO Development</a>
                  </li>
                  <li>
                    <a href='#'>Content Writting</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-lg-3 col-md-12 col-sm-12'>
              <div className='footer-col-2'>
                <ul>
                  <li>
                    <a href='#'>
                      <h2 className='font-weight-bold'>Home</h2>
                    </a>
                  </li>
                  <li>
                    <a href='#'>Carers</a>
                  </li>
                  <li>
                    <a href='#'>Blog</a>
                  </li>
                  <li>
                    <a href='#'>About Us</a>
                  </li>
                  <li>
                    <a href='#'>Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-lg-3 col-md-12 col-sm-12'>
              <div className='footer-col-3'>
                <ul>
                  <li>
                    <a href='#'>
                      <h2 className='font-weight-bold'>Quick Links</h2>
                    </a>
                  </li>
                  <li>
                    <a href='#'>Partnership </a>
                  </li>
                  <li>
                    <a href='#'>inquires</a>
                  </li>
                  <li>
                    <a href='#'>Client Portal</a>
                  </li>
                  <li>
                    <a href='#'>Privacy Policy</a>
                  </li>
                  <li>
                    <a href='#'>Terms & Condition</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-lg-3 col-md-12 col-sm-12'>
              <div className='footer-col-3 pt-4'>
                <div className='subscribe-text'>
                  <span>JOIN OUR NEWSLETTER</span>
                  <h2 className='pb-3'>subscribe newsletter</h2>
                </div>
                <div className='subscribe-wrapper subscribe2-wrapper'>
                  <div className='subscribe-form'>
                    <form action='#'>
                      <input className='mb-3' placeholder='enter your email address' type='email' />
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
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='footerlogo text-center m-auto d-block w-100'>
              <img src='assets/img/Whitefooter.png' />
            </div>
            <div className='copyrights text-center m-auto d-block w-100'>
              <p>&copy; All Rights Reserved By Digitalopment.Com</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
