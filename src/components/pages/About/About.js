import React from 'react';
import './about.css';
import { Spring } from 'react-spring/renderprops';
import Clock from 'react-live-clock';
import img1 from '../../../assets/img/mouse.png';
import img9 from '../../../assets/img//about/09.png';
import img10 from '../../../assets/img/about/08.png';
import img14 from '../../../assets/img/unnamed.png';
import SimpleCarousel from '../../layout/SimpleCarousel';
import AlexCarousel from '../../layout/AlexCarousel';

export const About = () => {
  return (
    <div>
      <Spring from={{ opacity: 0, marginTop: -500 }} to={{ opacity: 1, marginTop: 0 }}>
        {(props) => (
          <div style={props}>
            <div className='about-hero-section'>
              <div className='video-container'>
                <h1 className='ml3'>We Activate Businesses & Brands for the Digital Change</h1>
                <a href='#mousenew' className='mouseeffectone'>
                  <img className='mouseimg-about hvr-wobble-vertical' src={img1} alt='img' />
                </a>
              </div>
              <div className='hero-section'>
                <div className='icon-bar'>
                  <a
                    target='_blank'
                    href='https://www.facebook.com/Digitalopment/?_rdc=1&_rdr'
                    className='fab fa-facebook facebook-i hvr-bob'
                  ></a>
                  <a
                    target='_blank'
                    href='https://twitter.com/digitalopment'
                    className='fab fa-twitter hvr-bob twitter-i'
                  ></a>
                  <a
                    target='_blank'
                    href='https://www.pinterest.com/digitalopment0434/'
                    className='fab fa-pinterest hvr-bob printerest-i'
                  ></a>
                  <a
                    target='_blank'
                    href='https://www.instagram.com/digitalopment/'
                    className='fab fa-instagram  hvr-bob instagram-i'
                  ></a>
                  <a
                    target='_blank'
                    href='https://www.linkedin.com/company/digitalopment/'
                    className='fab fa-linkedin hvr-bob linkedin-i'
                  ></a>
                </div>
              </div>
            </div>
          </div>
        )}
      </Spring>

      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} config={{ delay: 1000, duration: 1000 }}>
        {(props) => (
          <div style={props}>
            <div className='sec-one1 aboutback-image'>
              <div className='container'>
                <div className='row'>
                  <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12'>
                    <div className='sec-one-info1 text-left'>
                      <h1 className='ml15'>
                        <span className='word'>Concept.</span>
                        <br />
                        <span className='word'>Strategy.</span>
                        <br />
                        <span className='word'>Execute.</span>
                      </h1>
                      <p>We Pilot You to Take on the Digital Landscape</p>
                      <p>
                        At Digital Gravity, we have leading industry professionals and
                        state-of-the-art technology to ensure your business and brands lifts up on
                        the digital front. Our approach is highly strategic and carefully executed
                        to transform your business the way you want, guaranteeing incredible results
                        and maximum profit.
                      </p>
                    </div>
                  </div>
                  <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12'>
                    <div className='aboutsec-info'>
                      <div className='row'>
                        <div className='col-lg-5'>
                          <div className='cardimga-one'>
                            <h5 className='ml16'>Select</h5>
                            <p className='ml13'>
                              Our creative expertise and approach take-off from where others left
                              for greater outcome.
                            </p>
                          </div>
                        </div>
                        <div className='col-lg-5'>
                          <div className='cardimga-two'>
                            <h5 className='ml17'>Engage</h5>
                            <p className='ml14'>
                              We take your business as our own and give it just the makeover you
                              want for the digital world.
                            </p>
                          </div>
                        </div>
                        <div className='col-lg-2'>
                          <div className='cardimga-three'>
                            <h5 className='ml18'>Relax</h5>
                            <p className='ml19'>
                              We take your business as our own and give it just the makeover you
                              want for the digital world.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Spring>

      <br />
      <br />

      <div>
        <SimpleCarousel />
      </div>

      <br />
      <br />

      <section className='main-tech'>
        <div className='container-fluid'>
          <div className='techimage-padd'>
            <div className='row'>
              <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12'>
                <div className='technologyinfo'>
                  <h2>Technology.</h2>
                  <p className='innovative'>Futuristic Technology Unique to All Business Needs</p>
                  <p>
                    We are experts with highly innovative and cutting-edge digital technology, built
                    exclusively around your business vision
                  </p>
                </div>
              </div>
              <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 techimage-padd'>
                <div className='row'>
                  <div className='col-lg-6 techimage-padd1'>
                    <div className='techimage'>
                      <div id='carouselExampleFade' className='carousel slide' data-ride='carousel'>
                        <div className='carousel-inner' style={{ marginLeft: '15px' }}>
                          <div className='carousel-item active'>
                            <img src={img9} alt='First slide' />
                          </div>
                          <div className='carousel-item'>
                            <img10 src={img9} alt='Second slide' />
                          </div>
                          <div className='carousel-item'>
                            <img src={img10} alt='Third slide' />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-6 techimage1-padd'>
                    <div className='techimage1'>
                      <div id='carouselExampleFade' className='carousel slide' data-ride='carousel'>
                        <div className='carousel-inner'>
                          <div className='carousel-item active'>
                            <img src={img10} alt='First slide' />
                          </div>
                          <div className='carousel-item'>
                            <img src={img10} alt='Third slide' />
                          </div>
                          <div className='carousel-item'>
                            <img src={img9} alt='Second slide' />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='techno-col-main'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-lg-3 col-md-12 col-sm-12'>
                <div className='tech-col-1'>&nbsp;</div>
              </div>
              <div className='col-lg-3 col-md-12 col-sm-12'>
                <div className='tech-col-2'>
                  <h3>
                    Enterprise Content
                    <br />
                    Management
                  </h3>
                  <hr className='content-manag' />
                  <ul className='pt-3 text-white list-unstyled pl-2'>
                    <li>
                      <i className='fas fa-arrow-right'></i> Document Management
                    </li>
                    <li>
                      <i className='fas fa-arrow-right'></i> Web Content Management
                    </li>
                    <li>
                      <i className='fas fa-arrow-right'></i> Records Management
                    </li>
                    <li>
                      <i className='fas fa-arrow-right'></i> Digital Asset Management
                    </li>
                    <li>
                      <i className='fas fa-arrow-right'></i> Workflow management
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col-lg-3 col-md-12 col-sm-12'>
                <div className='tech-col-3'>
                  <h3>
                    Web <br /> Technology
                  </h3>
                  <hr className='content-manag' />
                  <ul className='pt-3 text-white list-unstyled pl-2'>
                    <li>
                      <i className='fas fa-arrow-right'></i> Document Management
                    </li>
                    <li>
                      <i className='fas fa-arrow-right'></i> Web Content Management
                    </li>
                    <li>
                      <i className='fas fa-arrow-right'></i> Records Management
                    </li>
                    <li>
                      <i className='fas fa-arrow-right'></i> Digital Asset Management
                    </li>
                    <li>
                      <i className='fas fa-arrow-right'></i> Workflow management
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col-lg-3 col-md-12 col-sm-12'>
                <div className='tech-col-4'>
                  <h3>
                    Mobile <br /> Technology
                  </h3>
                  <hr className='content-manag' />
                  <ul className='pt-3 text-white list-unstyled pl-2'>
                    <li>
                      <i className='fas fa-arrow-right'></i> Document Management
                    </li>
                    <li>
                      <i className='fas fa-arrow-right'></i> Web Content Management
                    </li>
                    <li>
                      <i className='fas fa-arrow-right'></i> Records Management
                    </li>
                    <li>
                      <i className='fas fa-arrow-right'></i> Digital Asset Management
                    </li>
                    <li>
                      <i className='fas fa-arrow-right'></i> Workflow management
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />

      <AlexCarousel />

      <section className='aboutus-gallery'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-6'>
              <h1 className='our-team-h'>Our Team</h1>
              <div className='scrollbar' id='style-1'>
                <div className='force-overflow'></div>
                <p>
                  Digital Gravity is a team of young and dynamic digital industry leaders. We drive
                  projects with enthusiasm and passion to create pure, truly inspirational digital
                  experience
                </p>
                <h3>The Design Team</h3>
                <p>
                  Our design team is exceptional and delivers stunning, user-friendly final product,
                  compatible across all digital platforms and bring promising, profitable results.
                  The design and digital team collaborate to maximise website performance and
                  support search engine optimisation.
                </p>
                <h3>The Development Team</h3>
                <p>
                  We have an awesome development team carrying hands-on industry experience in web
                  and ecommerce development, content management systems, mobile applications, data
                  integration, web design and support training. We never compromise on quality,
                  value and delivery.
                </p>
                <h3>The Digital Team</h3>
                <p>
                  Our digital marketing and media specialists can take your business sky-high,
                  increase online exposure, boost leads and conversions, drive traffic. We are
                  digital experts in PPC, SEO, Social Media and Content Marketing to provide
                  influential solutions.
                </p>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='row'>
                <div className='container'>
                  <div id='demo' className='carousel slide' data-ride='carousel'>
                    <ul className='carousel-indicators'>
                      <li data-target='#demo' data-slide-to='0' className='active'></li>
                      <li data-target='#demo' data-slide-to='1'></li>
                      <li data-target='#demo' data-slide-to='2'></li>
                    </ul>

                    <div className='carousel-inner'>
                      <div className='carousel-item active'>
                        <div className='row'>
                          <div className='col-sm-4'>
                            <img className='galleryslide' src={img14} alt='3 slide' />
                          </div>
                          <div className='col-sm-4'>
                            <img className='galleryslide' src={img14} alt='3 slide' />
                          </div>
                          <div className='col-sm-4'>
                            <img className='galleryslide' src={img14} alt='3 slide' />
                          </div>
                        </div>
                        <div className='row'>
                          <div className='col-sm-4'>
                            <img className='galleryslide' src={img14} alt='3 slide' />
                          </div>
                          <div className='col-sm-4'>
                            <img className='galleryslide' src={img14} alt='3 slide' />
                          </div>
                          <div className='col-sm-4'>
                            <img className='galleryslide' src={img14} alt='3 slide' />
                          </div>
                        </div>
                        <div className='row'>
                          <div className='col-sm-4'>
                            <img className='galleryslide' src={img14} alt='3 slide' />
                          </div>
                          <div className='col-sm-4'>
                            <img className='galleryslide' src={img14} alt='3 slide' />
                          </div>
                          <div className='col-sm-4'>
                            <img className='galleryslide' src={img14} alt='3 slide' />
                          </div>
                        </div>
                      </div>
                      <div className='carousel-item'>
                        <div className='row'>
                          <div className='col-sm-4'>
                            <img className='galleryslide' src={img14} alt='3 slide' />
                          </div>
                          <div className='col-sm-4'>
                            <img className='galleryslide' src={img14} alt='3 slide' />
                          </div>
                          <div className='col-sm-4'>
                            <img className='galleryslide' src={img14} alt='3 slide' />
                          </div>
                        </div>
                        <div className='row'>
                          <div className='col-sm-4'>
                            <img className='galleryslide' src={img14} alt='3 slide' />
                          </div>
                          <div className='col-sm-4'>
                            <img className='galleryslide' src={img14} alt='3 slide' />
                          </div>
                          <div className='col-sm-4'>
                            <img className='galleryslide' src={img14} alt='3 slide' />
                          </div>
                        </div>
                        <div className='row'>
                          <div className='col-sm-4'>
                            <img className='galleryslide' src={img14} alt='3 slide' />
                          </div>
                          <div className='col-sm-4'>
                            <img className='galleryslide' src={img14} alt='3 slide' />
                          </div>
                          <div className='col-sm-4'>
                            <img className='galleryslide' src={img14} alt='3 slide' />
                          </div>
                        </div>
                      </div>
                      <div className='carousel-item'>
                        <div className='row'>
                          <div className='col-sm-4'>
                            <img className='galleryslide' src={img14} alt='3 slide' />
                          </div>
                          <div className='col-sm-4'>
                            <img className='galleryslide' src={img14} alt='3 slide' />
                          </div>
                          <div className='col-sm-4'>
                            <img className='galleryslide' src={img14} alt='3 slide' />
                          </div>
                        </div>
                        <div className='row'>
                          <div className='col-sm-4'>
                            <img className='galleryslide' src={img14} alt='3 slide' />
                          </div>
                          <div className='col-sm-4'>
                            <img className='galleryslide' src={img14} alt='3 slide' />
                          </div>
                          <div className='col-sm-4'>
                            <img className='galleryslide' src={img14} alt='3 slide' />
                          </div>
                        </div>
                        <div className='row'>
                          <div className='col-sm-4'>
                            <img className='galleryslide' src={img14} alt='3 slide' />
                          </div>
                          <div className='col-sm-4'>
                            <img className='galleryslide' src={img14} alt='3 slide' />
                          </div>
                          <div className='col-sm-4'>
                            <img className='galleryslide' src={img14} alt='3 slide' />
                          </div>
                        </div>
                      </div>
                    </div>
                    <a className='carousel-control-prev' href='#demo' data-slide='prev'>
                      <span className='carousel-control-prev-icon'></span>
                    </a>
                    <a className='carousel-control-next' href='#demo' data-slide='next'>
                      <span className='carousel-control-next-icon'></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='get-quote'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='get-quotes'>
                <h4>Are you Interested for more,</h4>
                <h1>Let’s start</h1>
              </div>
            </div>
          </div>
        </div>
        <div className='get-quotes-info'>
          <div className='row'>
            <div className='col-lg-4 col-md-4 col-sm-12'>
              <a href='mailto:info@digitalopment.com'>
                <p className='digitalmail'>info@digitalopment.com</p>
              </a>
            </div>
            <div className='col-lg-4 col-md-4 col-sm-12 getbtn'>
              <button className='btn btn-primary hvr-grow'>GET A QUOTE</button>
            </div>
            <div className='col-lg-4 col-md-4 col-sm-12'>
              <a href='tel:+92 000 000 0000'>
                <p className='digitel'>+92 000 000 0000</p>
              </a>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            <div className='time'>
              <h3 className='card-title text-white text-center'>
                <div
                  className='d-flex flex-wrap justify-content-center mt-2'
                  style={{ fontWeight: 'bold' }}
                >
                  <Clock format={'HH:mm:ss'} ticking={true} timezone={'Asia/Karachi'} />
                </div>
              </h3>
            </div>
          </div>
        </div>
        <div className='row social-icons-pad'>
          <div className='col-md-12 text-center'>
            <ul className='social-network social-circle'>
              <li>
                <a href='#' className='icoFacebook' title='Facebook'>
                  <i className='fab fa-facebook' />
                </a>
              </li>
              <li>
                <a href='#' className='icoTwitter' title='Twitter'>
                  <i className='fab fa-twitter' />
                </a>
              </li>
              <li>
                <a href='#' className='icoRss' title='Rss'>
                  <i className='fab fa-youtube' />
                </a>
              </li>
              <li>
                <a href='#' className='icoLinkedin' title='Linkedin'>
                  <i className='fab fa-linkedin' />
                </a>
              </li>
              <li>
                <a href='#' className='icoGoogle' title='Google +'>
                  <i className='fab fa-instagram' />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <div></div>
    </div>
  );
};
