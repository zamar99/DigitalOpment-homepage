import React from 'react';
import '../../style/about.styles.css';
import { Carousel } from 'react-bootstrap';
import img1 from '../../assets/img/mouse.png';
import img2 from '../../assets/img/about/03.png';
import img3 from '../../assets/img/about/07-1.png';
import img4 from '../../assets/img/about/07-2.png';
import img5 from '../../assets/img/about/05-2.png';
import img6 from '../../assets/img/about/05-1.png';
import img7 from '../../assets/img/about/06-2.png';
import img8 from '../../assets/img/about/06-1.png';

export const About = () => {
  return (
    <div>
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

      <div id='mousenew' className='sec-one1 aboutback-image'>
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
                  At Digital Gravity, we have leading industry professionals and state-of-the-art
                  technology to ensure your business and brands lifts up on the digital front. Our
                  approach is highly strategic and carefully executed to transform your business the
                  way you want, guaranteeing incredible results and maximum profit.
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
                        Our creative expertise and approach take-off from where others left for
                        greater outcome.
                      </p>
                    </div>
                  </div>
                  <div className='col-lg-5'>
                    <div className='cardimga-two'>
                      <h5 className='ml17'>Engage</h5>
                      <p className='ml14'>
                        We take your business as our own and give it just the makeover you want for
                        the digital world.
                      </p>
                    </div>
                  </div>
                  <div className='col-lg-2'>
                    <div className='cardimga-three'>
                      <h5 className='ml18'>Relax</h5>
                      <p className='ml19'>
                        We take your business as our own and give it just the makeover you want for
                        the digital world.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container-fluid p-0 m-0'>
        <section className='customer-logos pt-5'>
          <div className='item slide imgslideone'>
            <img src={img2} alt='img' />
            <div className='activity-cap-filter1'>
              <h3>Management.</h3>
            </div>
          </div>
          <div className='slide onetwo'>
            <div className='item imgslidefive'>
              <img src={img3} alt='img' />
              <div className='activity-cap-filter2'>
                <h3>Design.</h3>
              </div>
            </div>
            <div className='item imgslidesix'>
              <img src={img4} alt='img' />
              <div className='activity-cap-filter3'>
                <h3>Technical Delivery.</h3>
              </div>
            </div>
          </div>
          <div className='slide'>
            <div className='item imgslideten'>
              <img src={img5} alt='img' />
              <div className='activity-cap-filter4'>
                <h3>Development.</h3>
              </div>
            </div>
            <div className='item imgslideeleven'>
              <img src={img6} alt='img' />
              <div className='activity-cap-filter5'>
                <h3>Strategy.</h3>
              </div>
            </div>
          </div>
          <div className='slide'>
            <div className='item imgslidetwo'>
              <img src={img7} alt='img' />
              <div className='activity-cap-filter6'>
                <h3>Technical Delivery.</h3>
              </div>
            </div>
            <div className='item imgslidethree'>
              <img src={img8} alt='img' />
              <div className='activity-cap-filter7'>
                <h3>Creativity.</h3>
              </div>
            </div>
          </div>
          <div className='item slide imgslideone'>
            <img src={img2} alt='img' />
            <div className='activity-cap-filter8'>
              <h3>Management.</h3>
            </div>
          </div>
          <div className='slide onetwo'>
            <div className='item imgslidefive'>
              <img src={img3} alt='img' />
              <div className='activity-cap-filter9'>
                <h3>Design.</h3>
              </div>
            </div>
            <div className='item imgslidesix'>
              <img src={img4} alt='img' />
              <div className='activity-cap-filter10'>
                <h3>Technical Delivery.</h3>
              </div>
            </div>
          </div>
          <div className='slide'>
            <div className='item imgslideten'>
              <img src={img5} alt='img' />
              <div className='activity-cap-filter11'>
                <h3>Development.</h3>
              </div>
            </div>
            <div className='item imgslideeleven'>
              <img src={img6} alt='img' />
              <div className='activity-cap-filter12'>
                <h3>Strategy.</h3>
              </div>
            </div>
          </div>
          <div className='slide'>
            <div className='item imgslidetwo'>
              <img src={img7} alt='img' />
              <div className='activity-cap-filter13'>
                <h3>Technical Delivery.</h3>
              </div>
            </div>
            <div className='item imgslidethree'>
              <img src={img8} alt='img' />
              <div className='activity-cap-filter14'>
                <h3>Creativity.</h3>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Carousel>
        <Carousel.Item>
          <img className='d-block w-100' src={img2} alt='First slide' />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src={img3} alt='Third slide' />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src={img4} alt='Third slide' />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
