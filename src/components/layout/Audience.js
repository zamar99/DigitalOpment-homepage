import React, { Component } from 'react';
import './audience.css';
import img1 from '../../assets/img/ramadan.jpg';
import img2 from '../../assets/img/dining.jpg';
import img3 from '../../assets/img/tripadvisor.jpg';
import img4 from '../../assets/img/breathviews.jpg';
import img5 from '../../assets/img/fairytale.jpg';
import img6 from '../../assets/img/cakedecoration.jpg';
import img7 from '../../assets/img/fixedartwork.jpg';
import img8 from '../../assets/img/yoga.jpg';
import { Spring } from 'react-spring/renderprops';

class Audience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fade: false,
      active1: false,
      active2: false,
      active3: false,
      active4: false,
      active5: false,
      active6: false,
      active7: false,
    };
  }
  render() {
    const fade = this.state.fade;
    const active1 = this.state.active1;
    const active2 = this.state.active2;
    const active3 = this.state.active3;
    const active4 = this.state.active4;
    const active5 = this.state.active5;
    const active6 = this.state.active6;
    const active7 = this.state.active7;

    return (
      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} config={{ delay: 1000, duration: 1000 }}>
        {(props) => (
          <div style={props}>
            <div className='tabbable boxed parentTabs digitalop-tabs'>
              <div className='tabbable-padding-bottom'>
                <div className='container'>
                  <div className='row'>
                    <div className='col-lg-6'>
                      <h1 className='title'>ACTIVITIES,SPECIAL EVENTS</h1>
                      <span className='family-border-digi'>&nbsp;</span>
                      <h2 className='more-h2'>
                        FAMILY FUN <span className='MUCH-color'>&amp;MUCH MORE</span>
                      </h2>
                      <p className='exhibits-p font-italic'>
                        EXHIBITS, INTERACTIVE DISPLAYS, ARTEFACTS
                      </p>
                    </div>
                    <div className='col-lg-6'>
                      <ul className='nav nav-tabs digitalop-tabs-a'>
                        <li>
                          <i className='fas fa-users newnav-link' />
                          <a href='#set1' className='nav-link active'>
                            By Audience
                          </a>
                        </li>
                        <li>
                          <i className='fas fa-users newnav-link' />
                          <a href='#set2' className='nav-link'>
                            By Audience
                          </a>
                        </li>
                        <li>
                          <i className='fas fa-users newnav-link' />
                          <a href='#set3' className='nav-link'>
                            By Audience
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* Sub Tabs */}
              <div className='container-fluid'>
                <div className='sub-main-content'>
                  <div className='tab-content'>
                    <div className='tab-pane active show' id='set1'>
                      <div className='tabbable'>
                        <div className='row'>
                          <div className='col-lg-6 visit-unoque-one'>
                            <div className='tab-content'>
                              <div className='tab-pane active show' id='sub1'>
                                <div className='row'>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div
                                      onAnimationEnd={() => this.setState({ fade: false })}
                                      className={`item filterimg1 scale-in-hor-left ${
                                        fade ? 'scale-in-br' : ''
                                      }`}
                                    >
                                      <div className='caption'>
                                        <p className='Noor-title'>
                                          "Noor Island is a gem of Sharjah"
                                        </p>
                                        <a href='/' target='f_self' className='card__anchor'>
                                          read all 61 reviews
                                        </a>
                                      </div>
                                      {/* <img class="" src="../../assets/img/filter1.jpg"> */}
                                    </div>
                                  </div>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div
                                      onAnimationEnd={() => this.setState({ fade: false })}
                                      className={`item filterimg2 scale-in-hor-left ${
                                        fade ? 'fadeH2L' : ''
                                      }`}
                                    >
                                      <img className src={img1} alt='img' />
                                      <div className='activity-cap-filter'>
                                        <p className='ramadan-title'>Ramadan Special</p>
                                        <p className='ramadan-para'>Enjoy a specially designe...</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='col-lg-4 p-0 m-0'>
                                    <div
                                      onAnimationEnd={() => this.setState({ fade: false })}
                                      className={`item filterimg3 scale-in-hor-left ${
                                        fade ? 'scale-in-bl' : ''
                                      }`}
                                    >
                                      <img className src={img2} alt='img' />
                                      <div className='activity-cap-filter-1'>
                                        <p className='ramadan-title'>Ramadan Special</p>
                                        <p className='ramadan-para'>Enjoy a specially designe...</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className='row'>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div
                                      onAnimationEnd={() => this.setState({ fade: false })}
                                      className={`item filterimg4 scale-in-hor-left ${
                                        fade ? 'scale-in-bl' : ''
                                      }`}
                                    >
                                      <img className src={img3} alt='img' />
                                    </div>
                                  </div>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div
                                      onAnimationEnd={() => this.setState({ fade: false })}
                                      className={`item filterimg5 scale-in-hor-left ${
                                        fade ? 'fadeV2B' : ''
                                      }`}
                                    >
                                      <img className src={img4} alt='img' />
                                      <div className='activity-cap-filter-2'>
                                        <p className='ramadan-title'>Breathtaking Views</p>
                                        <p className='ramadan-para'>Immerse yourself in the b...</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div
                                      onAnimationEnd={() => this.setState({ fade: false })}
                                      className={`item filterimg6 scale-in-hor-left ${
                                        fade ? 'fadeH2R' : ''
                                      }`}
                                    >
                                      <img className src={img5} alt='img' />
                                      <div className='activity-cap-filter-3'>
                                        <p className='ramadan-title'>Breathtaking Views</p>
                                        <p className='ramadan-para'>Immerse yourself in the b...</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div
                                      onAnimationEnd={() => this.setState({ fade: false })}
                                      className={`item filterimg10 scale-in-hor-left ${
                                        fade ? 'fadeH2L' : ''
                                      }`}
                                    >
                                      <img className src={img6} alt='img' />
                                      <div className='activity-cap-filter-4'>
                                        <p className='ramadan-title'>Cupcake Decoration... </p>
                                        <p className='ramadan-para'>Workshopat Al Noor Island...</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className='row'>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg7'>&nbsp;</div>
                                  </div>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div
                                      onAnimationEnd={() => this.setState({ fade: false })}
                                      className={`item filterimg8 scale-in-hor-left ${
                                        fade ? 'scale-in-tr' : ''
                                      }`}
                                    >
                                      <img className src={img7} alt='img' />
                                    </div>
                                  </div>
                                  <div className='col-lg-4 p-0 m-0'>
                                    <div
                                      onAnimationEnd={() => this.setState({ fade: false })}
                                      className={`item filterimg9 scale-in-hor-left ${
                                        fade ? 'fadeU2D' : ''
                                      }`}
                                    >
                                      <img className src={img8} alt='img' />
                                      <div className='activity-cap-filter-5'>
                                        <p className='ramadan-title'>Yoga At Sunshine</p>
                                        <p className='ramadan-para'>Workshopat Al Noor Island...</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className='tab-pane' id='sub2'>
                                <div className='row'>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg1 scale-in-br'>
                                      <div className='caption'>
                                        <p className='Noor-title'>
                                          "Noor Island is a gem of Sharjah"
                                        </p>
                                        <a href='/' target='_self' className='card__anchor'>
                                          read all 61 reviews
                                        </a>
                                      </div>
                                      {/* <img class="" src="../../assets/img/filter1.jpg"> */}
                                    </div>
                                  </div>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg2 scale-in-hor-left'>
                                      <img className src={img1} alt='img' />
                                      <div className='activity-cap-filter'>
                                        <p className='ramadan-title'>Ramadan Special</p>
                                        <p className='ramadan-para'>Enjoy a specially designe...</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='col-lg-4 p-0 m-0'>
                                    <div className='item filterimg3 scale-in-ver-top'>
                                      <img className src={img2} alt='img' />
                                      <div className='activity-cap-filter-1'>
                                        <p className='ramadan-title'>Ramadan Special</p>
                                        <p className='ramadan-para'>Enjoy a specially designe...</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className='row'>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg4 scale-in-bl'>
                                      <img className src={img3} alt='img' />
                                    </div>
                                  </div>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg5 scale-in-hor-right'>
                                      <img className src={img4} alt='img' />
                                      <div className='activity-cap-filter-2'>
                                        <p className='ramadan-title'>Breathtaking Views</p>
                                        <p className='ramadan-para'>Immerse yourself in the b...</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg6 scale-in-ver-bottom'>
                                      <img className src={img5} alt='img' />
                                      <div className='activity-cap-filter-3'>
                                        <p className='ramadan-title'>Breathtaking Views</p>
                                        <p className='ramadan-para'>Immerse yourself in the b...</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg10 scale-in-hor-left'>
                                      <img className src={img6} alt='img' />
                                      <div className='activity-cap-filter-4'>
                                        <p className='ramadan-title'>Cupcake Decoration... </p>
                                        <p className='ramadan-para'>Workshopat Al Noor Island...</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className='row'>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg7'>&nbsp;</div>
                                  </div>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg8 scale-in-tr'>
                                      <img className src={img7} alt='img' />
                                    </div>
                                  </div>
                                  <div className='col-lg-4 p-0 m-0'>
                                    <div className='item filterimg9 scale-in-ver-top'>
                                      <img className src={img8} alt='img' />
                                      <div className='activity-cap-filter-5'>
                                        <p className='ramadan-title'>Yoga At Sunshine</p>
                                        <p className='ramadan-para'>Workshopat Al Noor Island...</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className='tab-pane' id='sub3'>
                                <div className='row'>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg1 scale-in-br'>
                                      <div className='caption'>
                                        <p className='Noor-title'>
                                          "Noor Island is a gem of Sharjah"
                                        </p>
                                        <a href='/' target='_self' className='card__anchor'>
                                          read all 61 reviews
                                        </a>
                                      </div>
                                      {/* <img class="" src="../../assets/img/filter1.jpg"> */}
                                    </div>
                                  </div>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg2 scale-in-hor-left'>
                                      <img className src={img1} alt='img' />
                                      <div className='activity-cap-filter'>
                                        <p className='ramadan-title'>Ramadan Special</p>
                                        <p className='ramadan-para'>Enjoy a specially designe...</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='col-lg-4 p-0 m-0'>
                                    <div className='item filterimg3 scale-in-ver-top'>
                                      <img className src={img2} alt='img' />
                                      <div className='activity-cap-filter-1'>
                                        <p className='ramadan-title'>Ramadan Special</p>
                                        <p className='ramadan-para'>Enjoy a specially designe...</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className='row'>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg4 scale-in-bl'>
                                      <img className src={img3} alt='img' />
                                    </div>
                                  </div>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg5 scale-in-hor-right'>
                                      <img className src={img4} alt='img' />
                                      <div className='activity-cap-filter-2'>
                                        <p className='ramadan-title'>Breathtaking Views</p>
                                        <p className='ramadan-para'>Immerse yourself in the b...</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg6 scale-in-ver-bottom'>
                                      <img className src={img5} alt='img' />
                                      <div className='activity-cap-filter-3'>
                                        <p className='ramadan-title'>Breathtaking Views</p>
                                        <p className='ramadan-para'>Immerse yourself in the b...</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg10 scale-in-hor-left'>
                                      <img className src={img6} alt='img' />
                                      <div className='activity-cap-filter-4'>
                                        <p className='ramadan-title'>Cupcake Decoration... </p>
                                        <p className='ramadan-para'>Workshopat Al Noor Island...</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className='row'>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg7'>&nbsp;</div>
                                  </div>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg8 scale-in-tr'>
                                      <img className src={img7} alt='img' />
                                    </div>
                                  </div>
                                  <div className='col-lg-4 p-0 m-0'>
                                    <div className='item filterimg9 scale-in-ver-top'>
                                      <img className src={img8} alt='img' />
                                      <div className='activity-cap-filter-5'>
                                        <p className='ramadan-title'>Yoga At Sunshine</p>
                                        <p className='ramadan-para'>Workshopat Al Noor Island...</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className='tab-pane' id='sub4'>
                                <div className='row'>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg1 scale-in-br'>
                                      <div className='caption'>
                                        <p className='Noor-title'>
                                          "Noor Island is a gem of Sharjah"
                                        </p>
                                        <a href='/' target='_self' className='card__anchor'>
                                          read all 61 reviews
                                        </a>
                                      </div>
                                      {/* <img class="" src="../../assets/img/filter1.jpg"> */}
                                    </div>
                                  </div>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg2 scale-in-hor-left'>
                                      <img className src={img1} alt='img' />
                                      <div className='activity-cap-filter'>
                                        <p className='ramadan-title'>Ramadan Special</p>
                                        <p className='ramadan-para'>Enjoy a specially designe...</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='col-lg-4 p-0 m-0'>
                                    <div className='item filterimg3 scale-in-ver-top'>
                                      <img className src={img2} alt='img' />
                                      <div className='activity-cap-filter-1'>
                                        <p className='ramadan-title'>Ramadan Special</p>
                                        <p className='ramadan-para'>Enjoy a specially designe...</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className='row'>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg4 scale-in-bl'>
                                      <img className src={img3} alt='img' />
                                    </div>
                                  </div>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg5 scale-in-hor-right'>
                                      <img className src={img4} alt='img' />
                                      <div className='activity-cap-filter-2'>
                                        <p className='ramadan-title'>Breathtaking Views</p>
                                        <p className='ramadan-para'>Immerse yourself in the b...</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg6 scale-in-ver-bottom'>
                                      <img className src={img5} alt='img' />
                                      <div className='activity-cap-filter-3'>
                                        <p className='ramadan-title'>Breathtaking Views</p>
                                        <p className='ramadan-para'>Immerse yourself in the b...</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg10 scale-in-hor-left'>
                                      <img className src={img6} alt='img' />
                                      <div className='activity-cap-filter-4'>
                                        <p className='ramadan-title'>Cupcake Decoration... </p>
                                        <p className='ramadan-para'>Workshopat Al Noor Island...</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className='row'>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg7'>&nbsp;</div>
                                  </div>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg8 scale-in-tr'>
                                      <img className src={img7} alt='img' />
                                    </div>
                                  </div>
                                  <div className='col-lg-4 p-0 m-0'>
                                    <div className='item filterimg9 scale-in-ver-top'>
                                      <img className src={img8} alt='img' />
                                      <div className='activity-cap-filter-5'>
                                        <p className='ramadan-title'>Yoga At Sunshine</p>
                                        <p className='ramadan-para'>Workshopat Al Noor Island...</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className='tab-pane' id='sub5'>
                                <div className='row'>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg1 scale-in-br'>
                                      <div className='caption'>
                                        <p className='Noor-title'>
                                          "Noor Island is a gem of Sharjah"
                                        </p>
                                        <a href='/' target='_self' className='card__anchor'>
                                          read all 61 reviews
                                        </a>
                                      </div>
                                      {/* <img class="" src="../../assets/img/filter1.jpg"> */}
                                    </div>
                                  </div>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg2 scale-in-hor-left'>
                                      <img className src={img1} alt='img' />
                                      <div className='activity-cap-filter'>
                                        <p className='ramadan-title'>Ramadan Special</p>
                                        <p className='ramadan-para'>Enjoy a specially designe...</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='col-lg-4 p-0 m-0'>
                                    <div className='item filterimg3 scale-in-ver-top'>
                                      <img className src={img2} alt='img' />
                                      <div className='activity-cap-filter-1'>
                                        <p className='ramadan-title'>Ramadan Special</p>
                                        <p className='ramadan-para'>Enjoy a specially designe...</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className='row'>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg4 scale-in-bl'>
                                      <img className src={img3} alt='img' />
                                    </div>
                                  </div>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg5 scale-in-hor-right'>
                                      <img className src={img4} alt='img' />
                                      <div className='activity-cap-filter-2'>
                                        <p className='ramadan-title'>Breathtaking Views</p>
                                        <p className='ramadan-para'>Immerse yourself in the b...</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg6 scale-in-ver-bottom'>
                                      <img className src={img5} alt='img' />
                                      <div className='activity-cap-filter-3'>
                                        <p className='ramadan-title'>Breathtaking Views</p>
                                        <p className='ramadan-para'>Immerse yourself in the b...</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg10 scale-in-hor-left'>
                                      <img className src={img6} alt='img' />
                                      <div className='activity-cap-filter-4'>
                                        <p className='ramadan-title'>Cupcake Decoration... </p>
                                        <p className='ramadan-para'>Workshopat Al Noor Island...</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className='row'>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg7'>&nbsp;</div>
                                  </div>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg8 scale-in-tr'>
                                      <img className src={img7} alt='img' />
                                    </div>
                                  </div>
                                  <div className='col-lg-4 p-0 m-0'>
                                    <div className='item filterimg9 scale-in-ver-top'>
                                      <img className src={img8} alt='img' />
                                      <div className='activity-cap-filter-5'>
                                        <p className='ramadan-title'>Yoga At Sunshine</p>
                                        <p className='ramadan-para'>Workshopat Al Noor Island...</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className='tab-pane' id='sub6'>
                                <div className='row'>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg1 scale-in-br'>
                                      <div className='caption'>
                                        <p className='Noor-title'>
                                          "Noor Island is a gem of Sharjah"
                                        </p>
                                        <a href='/' target='_self' className='card__anchor'>
                                          read all 61 reviews
                                        </a>
                                      </div>
                                      {/* <img class="" src="../../assets/img/filter1.jpg"> */}
                                    </div>
                                  </div>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg2 scale-in-hor-left'>
                                      <img className src={img1} alt='img' />
                                      <div className='activity-cap-filter'>
                                        <p className='ramadan-title'>Ramadan Special</p>
                                        <p className='ramadan-para'>Enjoy a specially designe...</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='col-lg-4 p-0 m-0'>
                                    <div className='item filterimg3 scale-in-ver-top'>
                                      <img className src={img2} alt='img' />
                                      <div className='activity-cap-filter-1'>
                                        <p className='ramadan-title'>Ramadan Special</p>
                                        <p className='ramadan-para'>Enjoy a specially designe...</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className='row'>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg4 scale-in-bl'>
                                      <img className src={img3} alt='img' />
                                    </div>
                                  </div>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg5 scale-in-hor-right'>
                                      <img className src={img4} alt='img' />
                                      <div className='activity-cap-filter-2'>
                                        <p className='ramadan-title'>Breathtaking Views</p>
                                        <p className='ramadan-para'>Immerse yourself in the b...</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg6 scale-in-ver-bottom'>
                                      <img className src={img5} alt='img' />
                                      <div className='activity-cap-filter-3'>
                                        <p className='ramadan-title'>Breathtaking Views</p>
                                        <p className='ramadan-para'>Immerse yourself in the b...</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg10 scale-in-hor-left'>
                                      <img className src={img6} alt='img' />
                                      <div className='activity-cap-filter-4'>
                                        <p className='ramadan-title'>Cupcake Decoration... </p>
                                        <p className='ramadan-para'>Workshopat Al Noor Island...</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className='row'>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg7'>&nbsp;</div>
                                  </div>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg8 scale-in-tr'>
                                      <img className src={img7} alt='img' />
                                    </div>
                                  </div>
                                  <div className='col-lg-4 p-0 m-0'>
                                    <div className='item filterimg9 scale-in-ver-top'>
                                      <img className src={img8} alt='img' />
                                      <div className='activity-cap-filter-5'>
                                        <p className='ramadan-title'>Yoga At Sunshine</p>
                                        <p className='ramadan-para'>Workshopat Al Noor Island...</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className='tab-pane' id='sub7'>
                                <div className='row'>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg1 scale-in-br'>
                                      <div className='caption'>
                                        <p className='Noor-title'>
                                          "Noor Island is a gem of Sharjah"
                                        </p>
                                        <a href='/' target='_self' className='card__anchor'>
                                          read all 61 reviews
                                        </a>
                                      </div>
                                      {/* <img class="" src="../../assets/img/filter1.jpg"> */}
                                    </div>
                                  </div>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg2 scale-in-hor-left'>
                                      <img className src={img1} alt='img' />
                                      <div className='activity-cap-filter'>
                                        <p className='ramadan-title'>Ramadan Special</p>
                                        <p className='ramadan-para'>Enjoy a specially designe...</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='col-lg-4 p-0 m-0'>
                                    <div className='item filterimg3 scale-in-ver-top'>
                                      <img className src={img2} alt='img' />
                                      <div className='activity-cap-filter-1'>
                                        <p className='ramadan-title'>Ramadan Special</p>
                                        <p className='ramadan-para'>Enjoy a specially designe...</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className='row'>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg4 scale-in-bl'>
                                      <img className src={img3} alt='img' />
                                    </div>
                                  </div>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg5 scale-in-hor-right'>
                                      <img className src={img4} alt='img' />
                                      <div className='activity-cap-filter-2'>
                                        <p className='ramadan-title'>Breathtaking Views</p>
                                        <p className='ramadan-para'>Immerse yourself in the b...</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg6 scale-in-ver-bottom'>
                                      <img className src={img5} alt='img' />
                                      <div className='activity-cap-filter-3'>
                                        <p className='ramadan-title'>Breathtaking Views</p>
                                        <p className='ramadan-para'>Immerse yourself in the b...</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg10 scale-in-hor-left'>
                                      <img className src={img6} alt='img' />
                                      <div className='activity-cap-filter-4'>
                                        <p className='ramadan-title'>Cupcake Decoration... </p>
                                        <p className='ramadan-para'>Workshopat Al Noor Island...</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className='row'>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg7'>&nbsp;</div>
                                  </div>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg8 scale-in-tr'>
                                      <img className src={img7} alt='img' />
                                    </div>
                                  </div>
                                  <div className='col-lg-4 p-0 m-0'>
                                    <div className='item filterimg9 scale-in-ver-top'>
                                      <img className src={img8} alt='img' />
                                      <div className='activity-cap-filter-5'>
                                        <p className='ramadan-title'>Yoga At Sunshine</p>
                                        <p className='ramadan-para'>Workshopat Al Noor Island...</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='col-lg-6'>
                            <ul className='nav nav-tabs digitalop-tabs-a back-ul-color'>
                              <li style={{ marginLeft: '160px' }}>
                                <i className='fas fa-users' />
                                <a
                                  onClick={() =>
                                    this.setState({
                                      fade: true,
                                      active1: true,
                                      active2: false,
                                      active3: false,
                                      active4: false,
                                      active5: false,
                                      active6: false,
                                      active7: false,
                                    })
                                  }
                                  onAnimationEnd={() => this.setState({ fade: false })}
                                  className={`nav-link ${active1 ? 'active' : ''}`}
                                >
                                  Test Tabs
                                </a>
                              </li>
                              <li>
                                <i className='fas fa-users' />
                                <a
                                  onClick={() =>
                                    this.setState({
                                      fade: true,
                                      active1: false,
                                      active2: true,
                                      active3: false,
                                      active4: false,
                                      active5: false,
                                      active6: false,
                                      active7: false,
                                    })
                                  }
                                  onAnimationEnd={() => this.setState({ fade: false })}
                                  className={`nav-link ${active2 ? 'active' : ''}`}
                                >
                                  Test Tabs
                                </a>
                              </li>
                              <li>
                                <i className='fas fa-users' />
                                <a
                                  onClick={() =>
                                    this.setState({
                                      fade: true,
                                      active1: false,
                                      active2: false,
                                      active3: true,
                                      active4: false,
                                      active5: false,
                                      active6: false,
                                      active7: false,
                                    })
                                  }
                                  onAnimationEnd={() => this.setState({ fade: false })}
                                  className={`nav-link ${active3 ? 'active' : ''}`}
                                >
                                  Test Tabs
                                </a>
                              </li>
                              <li>
                                <i className='fas fa-users' />
                                <a
                                  onClick={() =>
                                    this.setState({
                                      fade: true,
                                      active1: false,
                                      active2: false,
                                      active3: false,
                                      active4: true,
                                      active5: false,
                                      active6: false,
                                      active7: false,
                                    })
                                  }
                                  onAnimationEnd={() => this.setState({ fade: false })}
                                  className={`nav-link ${active4 ? 'active' : ''}`}
                                >
                                  Test Tabs
                                </a>
                              </li>
                              <li>
                                <i className='fas fa-users' />
                                <a
                                  onClick={() =>
                                    this.setState({
                                      fade: true,
                                      active1: false,
                                      active2: false,
                                      active3: false,
                                      active4: false,
                                      active5: true,
                                      active6: false,
                                      active7: false,
                                    })
                                  }
                                  onAnimationEnd={() => this.setState({ fade: false })}
                                  className={`nav-link ${active5 ? 'active' : ''}`}
                                >
                                  Test Tabs
                                </a>
                              </li>
                              <li>
                                <i className='fas fa-users' />
                                <a
                                  onClick={() =>
                                    this.setState({
                                      fade: true,
                                      active1: false,
                                      active2: false,
                                      active3: false,
                                      active4: false,
                                      active5: false,
                                      active6: true,
                                      active7: false,
                                    })
                                  }
                                  onAnimationEnd={() => this.setState({ fade: false })}
                                  className={`nav-link ${active6 ? 'active' : ''}`}
                                >
                                  Test Tabs
                                </a>
                              </li>
                              <li>
                                <i className='fas fa-users' />
                                <a
                                  onClick={() =>
                                    this.setState({
                                      fade: true,
                                      active1: false,
                                      active2: false,
                                      active3: false,
                                      active4: false,
                                      active5: false,
                                      active6: false,
                                      active7: true,
                                    })
                                  }
                                  onAnimationEnd={() => this.setState({ fade: false })}
                                  className={`nav-link ${active7 ? 'active' : ''}`}
                                >
                                  Test Tabs
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*Set 1  */}
                    {/* Set 2 */}
                    <div className={`tab-pane ${fade ? 'fade' : ''}`} id='set2'>
                      <div className='tabbable'>
                        <div className='row'>
                          <div className='col-lg-6 visit-unoque-one'>
                            <div className='tab-content'>
                              <div className='tab-pane active show' id='set2sub1'>
                                <div className='row'>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg1 scale-in-br'>
                                      <div className='caption'>
                                        <p className='Noor-title'>
                                          "Noor Island is a gem of Sharjah"
                                        </p>
                                        <a href='/' target='_self' className='card__anchor'>
                                          read all 61 reviews
                                        </a>
                                      </div>
                                      {/* <img class="" src="../../assets/img/filter1.jpg"> */}
                                    </div>
                                  </div>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg2 scale-in-hor-left'>
                                      <img className src={img1} alt='img' />
                                      <div className='activity-cap-filter'>
                                        <p className='ramadan-title'>Ramadan Special</p>
                                        <p className='ramadan-para'>Enjoy a specially designe...</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='col-lg-4 p-0 m-0'>
                                    <div className='item filterimg3 scale-in-ver-top'>
                                      <img className src={img2} alt='img' />
                                      <div className='activity-cap-filter-1'>
                                        <p className='ramadan-title'>Ramadan Special</p>
                                        <p className='ramadan-para'>Enjoy a specially designe...</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className='row'>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg4 scale-in-bl'>
                                      <img className src={img3} alt='img' />
                                    </div>
                                  </div>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg5 scale-in-hor-right'>
                                      <img className src={img4} alt='img' />
                                      <div className='activity-cap-filter-2'>
                                        <p className='ramadan-title'>Breathtaking Views</p>
                                        <p className='ramadan-para'>Immerse yourself in the b...</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg6 scale-in-ver-bottom'>
                                      <img className src={img5} alt='img' />
                                      <div className='activity-cap-filter-3'>
                                        <p className='ramadan-title'>Breathtaking Views</p>
                                        <p className='ramadan-para'>Immerse yourself in the b...</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg10 scale-in-hor-left'>
                                      <img className src={img6} alt='img' />
                                      <div className='activity-cap-filter-4'>
                                        <p className='ramadan-title'>Cupcake Decoration... </p>
                                        <p className='ramadan-para'>Workshopat Al Noor Island...</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className='row'>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg7'>&nbsp;</div>
                                  </div>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg8 scale-in-tr'>
                                      <img className src={img7} alt='img' />
                                    </div>
                                  </div>
                                  <div className='col-lg-4 p-0 m-0'>
                                    <div className='item filterimg9 scale-in-ver-top'>
                                      <img className src={img8} alt='img' />
                                      <div className='activity-cap-filter-5'>
                                        <p className='ramadan-title'>Yoga At Sunshine</p>
                                        <p className='ramadan-para'>Workshopat Al Noor Island...</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className='tab-pane' id='set2sub2'>
                                <div className='row'>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg1 scale-in-br'>
                                      <div className='caption'>
                                        <p className='Noor-title'>
                                          "Noor Island is a gem of Sharjah"
                                        </p>
                                        <a href='/' target='_self' className='card__anchor'>
                                          read all 61 reviews
                                        </a>
                                      </div>
                                      {/* <img class="" src="../../assets/img/filter1.jpg"> */}
                                    </div>
                                  </div>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg2 scale-in-hor-left'>
                                      <img className src={img1} alt='img' />
                                      <div className='activity-cap-filter'>
                                        <p className='ramadan-title'>Ramadan Special</p>
                                        <p className='ramadan-para'>Enjoy a specially designe...</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='col-lg-4 p-0 m-0'>
                                    <div className='item filterimg3 scale-in-ver-top'>
                                      <img className src={img2} alt='img' />
                                      <div className='activity-cap-filter-1'>
                                        <p className='ramadan-title'>Ramadan Special</p>
                                        <p className='ramadan-para'>Enjoy a specially designe...</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className='row'>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg4 scale-in-bl'>
                                      <img className src={img3} alt='img' />
                                    </div>
                                  </div>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg5 scale-in-hor-right'>
                                      <img className src={img4} alt='img' />
                                      <div className='activity-cap-filter-2'>
                                        <p className='ramadan-title'>Breathtaking Views</p>
                                        <p className='ramadan-para'>Immerse yourself in the b...</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg6 scale-in-ver-bottom'>
                                      <img className src={img5} alt='img' />
                                      <div className='activity-cap-filter-3'>
                                        <p className='ramadan-title'>Breathtaking Views</p>
                                        <p className='ramadan-para'>Immerse yourself in the b...</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg10 scale-in-hor-left'>
                                      <img className src={img6} alt='img' />
                                      <div className='activity-cap-filter-4'>
                                        <p className='ramadan-title'>Cupcake Decoration... </p>
                                        <p className='ramadan-para'>Workshopat Al Noor Island...</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className='row'>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg7'>&nbsp;</div>
                                  </div>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg8 scale-in-tr'>
                                      <img className src={img7} alt='img' />
                                    </div>
                                  </div>
                                  <div className='col-lg-4 p-0 m-0'>
                                    <div className='item filterimg9 scale-in-ver-top'>
                                      <img className src={img8} alt='img' />
                                      <div className='activity-cap-filter-5'>
                                        <p className='ramadan-title'>Yoga At Sunshine</p>
                                        <p className='ramadan-para'>Workshopat Al Noor Island...</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className='tab-pane' id='set2sub3'>
                                <div className='row'>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg1 scale-in-br'>
                                      <div className='caption'>
                                        <p className='Noor-title'>
                                          "Noor Island is a gem of Sharjah"
                                        </p>
                                        <a href='/' target='_self' className='card__anchor'>
                                          read all 61 reviews
                                        </a>
                                      </div>
                                      {/* <img class="" src="../../assets/img/filter1.jpg"> */}
                                    </div>
                                  </div>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg2 scale-in-hor-left'>
                                      <img className src={img1} alt='img' />
                                      <div className='activity-cap-filter'>
                                        <p className='ramadan-title'>Ramadan Special</p>
                                        <p className='ramadan-para'>Enjoy a specially designe...</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='col-lg-4 p-0 m-0'>
                                    <div className='item filterimg3 scale-in-ver-top'>
                                      <img className src={img2} alt='img' />
                                      <div className='activity-cap-filter-1'>
                                        <p className='ramadan-title'>Ramadan Special</p>
                                        <p className='ramadan-para'>Enjoy a specially designe...</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className='row'>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg4 scale-in-bl'>
                                      <img className src={img3} alt='img' />
                                    </div>
                                  </div>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg5 scale-in-hor-right'>
                                      <img className src={img4} alt='img' />
                                      <div className='activity-cap-filter-2'>
                                        <p className='ramadan-title'>Breathtaking Views</p>
                                        <p className='ramadan-para'>Immerse yourself in the b...</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg6 scale-in-ver-bottom'>
                                      <img className src={img5} alt='img' />
                                      <div className='activity-cap-filter-3'>
                                        <p className='ramadan-title'>Breathtaking Views</p>
                                        <p className='ramadan-para'>Immerse yourself in the b...</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg10 scale-in-hor-left'>
                                      <img className src={img6} alt='img' />
                                      <div className='activity-cap-filter-4'>
                                        <p className='ramadan-title'>Cupcake Decoration... </p>
                                        <p className='ramadan-para'>Workshopat Al Noor Island...</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className='row'>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg7'>&nbsp;</div>
                                  </div>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg8 scale-in-tr'>
                                      <img className src={img7} alt='img' />
                                    </div>
                                  </div>
                                  <div className='col-lg-4 p-0 m-0'>
                                    <div className='item filterimg9 scale-in-ver-top'>
                                      <img className src={img8} alt='img' />
                                      <div className='activity-cap-filter-5'>
                                        <p className='ramadan-title'>Yoga At Sunshine</p>
                                        <p className='ramadan-para'>Workshopat Al Noor Island...</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className='tab-pane' id='set2sub4'>
                                <div className='row'>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg1 scale-in-br'>
                                      <div className='caption'>
                                        <p className='Noor-title'>
                                          "Noor Island is a gem of Sharjah"
                                        </p>
                                        <a href='/' target='_self' className='card__anchor'>
                                          read all 61 reviews
                                        </a>
                                      </div>
                                      {/* <img class="" src="../../assets/img/filter1.jpg"> */}
                                    </div>
                                  </div>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg2 scale-in-hor-left'>
                                      <img className src={img1} alt='img' />
                                      <div className='activity-cap-filter'>
                                        <p className='ramadan-title'>Ramadan Special</p>
                                        <p className='ramadan-para'>Enjoy a specially designe...</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='col-lg-4 p-0 m-0'>
                                    <div className='item filterimg3 scale-in-ver-top'>
                                      <img className src={img2} alt='img' />
                                      <div className='activity-cap-filter-1'>
                                        <p className='ramadan-title'>Ramadan Special</p>
                                        <p className='ramadan-para'>Enjoy a specially designe...</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className='row'>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg4 scale-in-bl'>
                                      <img className src={img3} alt='img' />
                                    </div>
                                  </div>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg5 scale-in-hor-right'>
                                      <img className src={img4} alt='img' />
                                      <div className='activity-cap-filter-2'>
                                        <p className='ramadan-title'>Breathtaking Views</p>
                                        <p className='ramadan-para'>Immerse yourself in the b...</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg6 scale-in-ver-bottom'>
                                      <img className src={img5} alt='img' />
                                      <div className='activity-cap-filter-3'>
                                        <p className='ramadan-title'>Breathtaking Views</p>
                                        <p className='ramadan-para'>Immerse yourself in the b...</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg10 scale-in-hor-left'>
                                      <img className src={img6} alt='img' />
                                      <div className='activity-cap-filter-4'>
                                        <p className='ramadan-title'>Cupcake Decoration... </p>
                                        <p className='ramadan-para'>Workshopat Al Noor Island...</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className='row'>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg7'>&nbsp;</div>
                                  </div>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg8 scale-in-tr'>
                                      <img className src={img7} alt='img' />
                                    </div>
                                  </div>
                                  <div className='col-lg-4 p-0 m-0'>
                                    <div className='item filterimg9 scale-in-ver-top'>
                                      <img className src={img8} alt='img' />
                                      <div className='activity-cap-filter-5'>
                                        <p className='ramadan-title'>Yoga At Sunshine</p>
                                        <p className='ramadan-para'>Workshopat Al Noor Island...</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className='tab-pane' id='set2sub5'>
                                <div className='row'>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg1 scale-in-br'>
                                      <div className='caption'>
                                        <p className='Noor-title'>
                                          "Noor Island is a gem of Sharjah"
                                        </p>
                                        <a href='/' target='_self' className='card__anchor'>
                                          read all 61 reviews
                                        </a>
                                      </div>
                                      {/* <img class="" src="../../assets/img/filter1.jpg"> */}
                                    </div>
                                  </div>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg2 scale-in-hor-left'>
                                      <img className src={img1} alt='img' />
                                      <div className='activity-cap-filter'>
                                        <p className='ramadan-title'>Ramadan Special</p>
                                        <p className='ramadan-para'>Enjoy a specially designe...</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='col-lg-4 p-0 m-0'>
                                    <div className='item filterimg3 scale-in-ver-top'>
                                      <img className src={img2} alt='img' />
                                      <div className='activity-cap-filter-1'>
                                        <p className='ramadan-title'>Ramadan Special</p>
                                        <p className='ramadan-para'>Enjoy a specially designe...</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className='row'>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg4 scale-in-bl'>
                                      <img className src={img3} alt='img' />
                                    </div>
                                  </div>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg5 scale-in-hor-right'>
                                      <img className src={img4} alt='img' />
                                      <div className='activity-cap-filter-2'>
                                        <p className='ramadan-title'>Breathtaking Views</p>
                                        <p className='ramadan-para'>Immerse yourself in the b...</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg6 scale-in-ver-bottom'>
                                      <img className src={img5} alt='img' />
                                      <div className='activity-cap-filter-3'>
                                        <p className='ramadan-title'>Breathtaking Views</p>
                                        <p className='ramadan-para'>Immerse yourself in the b...</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg10 scale-in-hor-left'>
                                      <img className src={img6} alt='img' />
                                      <div className='activity-cap-filter-4'>
                                        <p className='ramadan-title'>Cupcake Decoration... </p>
                                        <p className='ramadan-para'>Workshopat Al Noor Island...</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className='row'>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg7'>&nbsp;</div>
                                  </div>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg8 scale-in-tr'>
                                      <img className src={img7} alt='img' />
                                    </div>
                                  </div>
                                  <div className='col-lg-4 p-0 m-0'>
                                    <div className='item filterimg9 scale-in-ver-top'>
                                      <img className src={img8} alt='img' />
                                      <div className='activity-cap-filter-5'>
                                        <p className='ramadan-title'>Yoga At Sunshine</p>
                                        <p className='ramadan-para'>Workshopat Al Noor Island...</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className='tab-pane' id='set2sub6'>
                                <div className='row'>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg1 scale-in-br'>
                                      <div className='caption'>
                                        <p className='Noor-title'>
                                          "Noor Island is a gem of Sharjah"
                                        </p>
                                        <a href='/' target='_self' className='card__anchor'>
                                          read all 61 reviews
                                        </a>
                                      </div>
                                      {/* <img class="" src="../../assets/img/filter1.jpg"> */}
                                    </div>
                                  </div>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg2 scale-in-hor-left'>
                                      <img className src={img1} alt='img' />
                                      <div className='activity-cap-filter'>
                                        <p className='ramadan-title'>Ramadan Special</p>
                                        <p className='ramadan-para'>Enjoy a specially designe...</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='col-lg-4 p-0 m-0'>
                                    <div className='item filterimg3 scale-in-ver-top'>
                                      <img className src={img2} alt='img' />
                                      <div className='activity-cap-filter-1'>
                                        <p className='ramadan-title'>Ramadan Special</p>
                                        <p className='ramadan-para'>Enjoy a specially designe...</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className='row'>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg4 scale-in-bl'>
                                      <img className src={img3} alt='img' />
                                    </div>
                                  </div>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg5 scale-in-hor-right'>
                                      <img className src={img4} alt='img' />
                                      <div className='activity-cap-filter-2'>
                                        <p className='ramadan-title'>Breathtaking Views</p>
                                        <p className='ramadan-para'>Immerse yourself in the b...</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg6 scale-in-ver-bottom'>
                                      <img className src={img5} alt='img' />
                                      <div className='activity-cap-filter-3'>
                                        <p className='ramadan-title'>Breathtaking Views</p>
                                        <p className='ramadan-para'>Immerse yourself in the b...</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg10 scale-in-hor-left'>
                                      <img className src={img6} alt='img' />
                                      <div className='activity-cap-filter-4'>
                                        <p className='ramadan-title'>Cupcake Decoration... </p>
                                        <p className='ramadan-para'>Workshopat Al Noor Island...</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className='row'>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg7'>&nbsp;</div>
                                  </div>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg8 scale-in-tr'>
                                      <img className src={img7} alt='img' />
                                    </div>
                                  </div>
                                  <div className='col-lg-4 p-0 m-0'>
                                    <div className='item filterimg9 scale-in-ver-top'>
                                      <img className src={img8} alt='img' />
                                      <div className='activity-cap-filter-5'>
                                        <p className='ramadan-title'>Yoga At Sunshine</p>
                                        <p className='ramadan-para'>Workshopat Al Noor Island...</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className='tab-pane' id='set2sub7'>
                                <div className='row'>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg1 scale-in-br'>
                                      <div className='caption'>
                                        <p className='Noor-title'>
                                          "Noor Island is a gem of Sharjah"
                                        </p>
                                        <a href='/' target='_self' className='card__anchor'>
                                          read all 61 reviews
                                        </a>
                                      </div>
                                      {/* <img class="" src="../../assets/img/filter1.jpg"> */}
                                    </div>
                                  </div>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg2 scale-in-hor-left'>
                                      <img className src={img1} alt='img' />
                                      <div className='activity-cap-filter'>
                                        <p className='ramadan-title'>Ramadan Special</p>
                                        <p className='ramadan-para'>Enjoy a specially designe...</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='col-lg-4 p-0 m-0'>
                                    <div className='item filterimg3 scale-in-ver-top'>
                                      <img className src={img2} alt='img' />
                                      <div className='activity-cap-filter-1'>
                                        <p className='ramadan-title'>Ramadan Special</p>
                                        <p className='ramadan-para'>Enjoy a specially designe...</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className='row'>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg4 scale-in-bl'>
                                      <img className src={img3} alt='img' />
                                    </div>
                                  </div>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg5 scale-in-hor-right'>
                                      <img className src={img4} alt='img' />
                                      <div className='activity-cap-filter-2'>
                                        <p className='ramadan-title'>Breathtaking Views</p>
                                        <p className='ramadan-para'>Immerse yourself in the b...</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg6 scale-in-ver-bottom'>
                                      <img className src={img5} alt='img' />
                                      <div className='activity-cap-filter-3'>
                                        <p className='ramadan-title'>Breathtaking Views</p>
                                        <p className='ramadan-para'>Immerse yourself in the b...</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg10 scale-in-hor-left'>
                                      <img className src={img6} alt='img' />
                                      <div className='activity-cap-filter-4'>
                                        <p className='ramadan-title'>Cupcake Decoration... </p>
                                        <p className='ramadan-para'>Workshopat Al Noor Island...</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className='row'>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg7'>&nbsp;</div>
                                  </div>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg8 scale-in-tr'>
                                      <img className src={img7} alt='img' />
                                    </div>
                                  </div>
                                  <div className='col-lg-4 p-0 m-0'>
                                    <div className='item filterimg9 scale-in-ver-top'>
                                      <img className src={img8} alt='img' />
                                      <div className='activity-cap-filter-5'>
                                        <p className='ramadan-title'>Yoga At Sunshine</p>
                                        <p className='ramadan-para'>Workshopat Al Noor Island...</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='col-lg-6'>
                            <ul className='nav nav-tabs digitalop-tabs-a back-ul-color' style={{}}>
                              <li className='active'>
                                <i className='fas fa-users' />
                                <a href='#set2sub1' className='nav-link active'>
                                  Test Tabs
                                </a>
                              </li>
                              <li>
                                <i className='fas fa-users' />
                                <a href='#set2sub2' className='nav-link'>
                                  Test Tabs
                                </a>
                              </li>
                              <li>
                                <i className='fas fa-users' />
                                <a href='#set2sub3' className='nav-link'>
                                  Test Tabs
                                </a>
                              </li>
                              <li>
                                <i className='fas fa-users' />
                                <a href='#set2sub4' className='nav-link'>
                                  Test Tabs
                                </a>
                              </li>
                              <li>
                                <i className='fas fa-users' />
                                <a href='#set2sub5' className='nav-link'>
                                  Test Tabs
                                </a>
                              </li>
                              <li>
                                <i className='fas fa-users' />
                                <a href='#set2sub6' className='nav-link'>
                                  Test Tabs
                                </a>
                              </li>
                              <li>
                                <i className='fas fa-users' />
                                <a href='#set2sub7' className='nav-link'>
                                  Test Tabs
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Set 2 */}
                    {/* Set 3 */}
                    <div className='tab-pane' id='set3'>
                      <div className='tabbable'>
                        <div className='row'>
                          <div className='col-lg-6 visit-unoque-one'>
                            <div className='tab-content'>
                              <div className='tab-pane active show' id='set3sub1'>
                                <div className='row'>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg1 scale-in-br'>
                                      <div className='caption'>
                                        <p className='Noor-title'>
                                          "Noor Island is a gem of Sharjah"
                                        </p>
                                        <a href='/' target='_self' className='card__anchor'>
                                          read all 61 reviews
                                        </a>
                                      </div>
                                      {/* <img class="" src="../../assets/img/filter1.jpg"> */}
                                    </div>
                                  </div>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg2 scale-in-hor-left'>
                                      <img className src={img1} alt='img' />
                                      <div className='activity-cap-filter'>
                                        <p className='ramadan-title'>Ramadan Special</p>
                                        <p className='ramadan-para'>Enjoy a specially designe...</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='col-lg-4 p-0 m-0'>
                                    <div className='item filterimg3 scale-in-ver-top'>
                                      <img className src={img2} alt='img' />
                                      <div className='activity-cap-filter-1'>
                                        <p className='ramadan-title'>Ramadan Special</p>
                                        <p className='ramadan-para'>Enjoy a specially designe...</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className='row'>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg4 scale-in-bl'>
                                      <img className src={img3} alt='img' />
                                    </div>
                                  </div>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg5 scale-in-hor-right'>
                                      <img className src={img4} alt='img' />
                                      <div className='activity-cap-filter-2'>
                                        <p className='ramadan-title'>Breathtaking Views</p>
                                        <p className='ramadan-para'>Immerse yourself in the b...</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg6 scale-in-ver-bottom'>
                                      <img className src={img5} alt='img' />
                                      <div className='activity-cap-filter-3'>
                                        <p className='ramadan-title'>Breathtaking Views</p>
                                        <p className='ramadan-para'>Immerse yourself in the b...</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg10 scale-in-hor-left'>
                                      <img className src={img6} alt='img' />
                                      <div className='activity-cap-filter-4'>
                                        <p className='ramadan-title'>Cupcake Decoration... </p>
                                        <p className='ramadan-para'>Workshopat Al Noor Island...</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className='row'>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg7'>&nbsp;</div>
                                  </div>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg8 scale-in-tr'>
                                      <img className src={img7} alt='img' />
                                    </div>
                                  </div>
                                  <div className='col-lg-4 p-0 m-0'>
                                    <div className='item filterimg9 scale-in-ver-top'>
                                      <img className src={img8} alt='img' />
                                      <div className='activity-cap-filter-5'>
                                        <p className='ramadan-title'>Yoga At Sunshine</p>
                                        <p className='ramadan-para'>Workshopat Al Noor Island...</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className='tab-pane' id='set3sub2'>
                                <div className='row'>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg1 scale-in-br'>
                                      <div className='caption'>
                                        <p className='Noor-title'>
                                          "Noor Island is a gem of Sharjah"
                                        </p>
                                        <a href='/' target='_self' className='card__anchor'>
                                          read all 61 reviews
                                        </a>
                                      </div>
                                      {/* <img class="" src="../../assets/img/filter1.jpg"> */}
                                    </div>
                                  </div>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg2 scale-in-hor-left'>
                                      <img className src={img1} alt='img' />
                                      <div className='activity-cap-filter'>
                                        <p className='ramadan-title'>Ramadan Special</p>
                                        <p className='ramadan-para'>Enjoy a specially designe...</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='col-lg-4 p-0 m-0'>
                                    <div className='item filterimg3 scale-in-ver-top'>
                                      <img className src={img2} alt='img' />
                                      <div className='activity-cap-filter-1'>
                                        <p className='ramadan-title'>Ramadan Special</p>
                                        <p className='ramadan-para'>Enjoy a specially designe...</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className='row'>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg4 scale-in-bl'>
                                      <img className src={img3} alt='img' />
                                    </div>
                                  </div>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg5 scale-in-hor-right'>
                                      <img className src={img4} alt='img' />
                                      <div className='activity-cap-filter-2'>
                                        <p className='ramadan-title'>Breathtaking Views</p>
                                        <p className='ramadan-para'>Immerse yourself in the b...</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg6 scale-in-ver-bottom'>
                                      <img className src={img5} alt='img' />
                                      <div className='activity-cap-filter-3'>
                                        <p className='ramadan-title'>Breathtaking Views</p>
                                        <p className='ramadan-para'>Immerse yourself in the b...</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg10 scale-in-hor-left'>
                                      <img className src={img6} alt='img' />
                                      <div className='activity-cap-filter-4'>
                                        <p className='ramadan-title'>Cupcake Decoration... </p>
                                        <p className='ramadan-para'>Workshopat Al Noor Island...</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className='row'>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg7'>&nbsp;</div>
                                  </div>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg8 scale-in-tr'>
                                      <img className src={img7} alt='img' />
                                    </div>
                                  </div>
                                  <div className='col-lg-4 p-0 m-0'>
                                    <div className='item filterimg9 scale-in-ver-top'>
                                      <img className src={img8} alt='img' />
                                      <div className='activity-cap-filter-5'>
                                        <p className='ramadan-title'>Yoga At Sunshine</p>
                                        <p className='ramadan-para'>Workshopat Al Noor Island...</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className='tab-pane' id='set3sub3'>
                                <div className='row'>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg1 scale-in-br'>
                                      <div className='caption'>
                                        <p className='Noor-title'>
                                          "Noor Island is a gem of Sharjah"
                                        </p>
                                        <a href='/' target='_self' className='card__anchor'>
                                          read all 61 reviews
                                        </a>
                                      </div>
                                      {/* <img class="" src="../../assets/img/filter1.jpg"> */}
                                    </div>
                                  </div>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg2 scale-in-hor-left'>
                                      <img className src={img1} alt='img' />
                                      <div className='activity-cap-filter'>
                                        <p className='ramadan-title'>Ramadan Special</p>
                                        <p className='ramadan-para'>Enjoy a specially designe...</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='col-lg-4 p-0 m-0'>
                                    <div className='item filterimg3 scale-in-ver-top'>
                                      <img className src={img2} alt='img' />
                                      <div className='activity-cap-filter-1'>
                                        <p className='ramadan-title'>Ramadan Special</p>
                                        <p className='ramadan-para'>Enjoy a specially designe...</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className='row'>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg4 scale-in-bl'>
                                      <img className src={img3} alt='img' />
                                    </div>
                                  </div>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg5 scale-in-hor-right'>
                                      <img className src={img4} alt='img' />
                                      <div className='activity-cap-filter-2'>
                                        <p className='ramadan-title'>Breathtaking Views</p>
                                        <p className='ramadan-para'>Immerse yourself in the b...</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg6 scale-in-ver-bottom'>
                                      <img className src={img5} alt='img' />
                                      <div className='activity-cap-filter-3'>
                                        <p className='ramadan-title'>Breathtaking Views</p>
                                        <p className='ramadan-para'>Immerse yourself in the b...</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg10 scale-in-hor-left'>
                                      <img className src={img6} alt='img' />
                                      <div className='activity-cap-filter-4'>
                                        <p className='ramadan-title'>Cupcake Decoration... </p>
                                        <p className='ramadan-para'>Workshopat Al Noor Island...</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className='row'>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg7'>&nbsp;</div>
                                  </div>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg8 scale-in-tr'>
                                      <img className src={img7} alt='img' />
                                    </div>
                                  </div>
                                  <div className='col-lg-4 p-0 m-0'>
                                    <div className='item filterimg9 scale-in-ver-top'>
                                      <img className src={img8} alt='img' />
                                      <div className='activity-cap-filter-5'>
                                        <p className='ramadan-title'>Yoga At Sunshine</p>
                                        <p className='ramadan-para'>Workshopat Al Noor Island...</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className='tab-pane' id='set3sub4'>
                                <div className='row'>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg1 scale-in-br'>
                                      <div className='caption'>
                                        <p className='Noor-title'>
                                          "Noor Island is a gem of Sharjah"
                                        </p>
                                        <a href='/' target='_self' className='card__anchor'>
                                          read all 61 reviews
                                        </a>
                                      </div>
                                      {/* <img class="" src="../../assets/img/filter1.jpg"> */}
                                    </div>
                                  </div>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg2 scale-in-hor-left'>
                                      <img className src={img1} alt='img' />
                                      <div className='activity-cap-filter'>
                                        <p className='ramadan-title'>Ramadan Special</p>
                                        <p className='ramadan-para'>Enjoy a specially designe...</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='col-lg-4 p-0 m-0'>
                                    <div className='item filterimg3 scale-in-ver-top'>
                                      <img className src={img2} alt='img' />
                                      <div className='activity-cap-filter-1'>
                                        <p className='ramadan-title'>Ramadan Special</p>
                                        <p className='ramadan-para'>Enjoy a specially designe...</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className='row'>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg4 scale-in-bl'>
                                      <img className src={img3} alt='img' />
                                    </div>
                                  </div>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg5 scale-in-hor-right'>
                                      <img className src={img4} alt='img' />
                                      <div className='activity-cap-filter-2'>
                                        <p className='ramadan-title'>Breathtaking Views</p>
                                        <p className='ramadan-para'>Immerse yourself in the b...</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg6 scale-in-ver-bottom'>
                                      <img className src={img5} alt='img' />
                                      <div className='activity-cap-filter-3'>
                                        <p className='ramadan-title'>Breathtaking Views</p>
                                        <p className='ramadan-para'>Immerse yourself in the b...</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg10 scale-in-hor-left'>
                                      <img className src={img6} alt='img' />
                                      <div className='activity-cap-filter-4'>
                                        <p className='ramadan-title'>Cupcake Decoration... </p>
                                        <p className='ramadan-para'>Workshopat Al Noor Island...</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className='row'>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg7'>&nbsp;</div>
                                  </div>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg8 scale-in-tr'>
                                      <img className src={img7} alt='img' />
                                    </div>
                                  </div>
                                  <div className='col-lg-4 p-0 m-0'>
                                    <div className='item filterimg9 scale-in-ver-top'>
                                      <img className src={img8} alt='img' />
                                      <div className='activity-cap-filter-5'>
                                        <p className='ramadan-title'>Yoga At Sunshine</p>
                                        <p className='ramadan-para'>Workshopat Al Noor Island...</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className='tab-pane' id='set3sub5'>
                                <div className='row'>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg1 scale-in-br'>
                                      <div className='caption'>
                                        <p className='Noor-title'>
                                          "Noor Island is a gem of Sharjah"
                                        </p>
                                        <a href='/' target='_self' className='card__anchor'>
                                          read all 61 reviews
                                        </a>
                                      </div>
                                      {/* <img class="" src="../../assets/img/filter1.jpg"> */}
                                    </div>
                                  </div>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg2 scale-in-hor-left'>
                                      <img className src={img1} alt='img' />
                                      <div className='activity-cap-filter'>
                                        <p className='ramadan-title'>Ramadan Special</p>
                                        <p className='ramadan-para'>Enjoy a specially designe...</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='col-lg-4 p-0 m-0'>
                                    <div className='item filterimg3 scale-in-ver-top'>
                                      <img className src={img2} alt='img' />
                                      <div className='activity-cap-filter-1'>
                                        <p className='ramadan-title'>Ramadan Special</p>
                                        <p className='ramadan-para'>Enjoy a specially designe...</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className='row'>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg4 scale-in-bl'>
                                      <img className src={img3} alt='img' />
                                    </div>
                                  </div>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg5 scale-in-hor-right'>
                                      <img className src={img4} alt='img' />
                                      <div className='activity-cap-filter-2'>
                                        <p className='ramadan-title'>Breathtaking Views</p>
                                        <p className='ramadan-para'>Immerse yourself in the b...</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg6 scale-in-ver-bottom'>
                                      <img className src={img5} alt='img' />
                                      <div className='activity-cap-filter-3'>
                                        <p className='ramadan-title'>Breathtaking Views</p>
                                        <p className='ramadan-para'>Immerse yourself in the b...</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg10 scale-in-hor-left'>
                                      <img className src={img6} alt='img' />
                                      <div className='activity-cap-filter-4'>
                                        <p className='ramadan-title'>Cupcake Decoration... </p>
                                        <p className='ramadan-para'>Workshopat Al Noor Island...</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className='row'>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg7'>&nbsp;</div>
                                  </div>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg8 scale-in-tr'>
                                      <img className src={img7} alt='img' />
                                    </div>
                                  </div>
                                  <div className='col-lg-4 p-0 m-0'>
                                    <div className='item filterimg9 scale-in-ver-top'>
                                      <img className src={img8} alt='img' />
                                      <div className='activity-cap-filter-5'>
                                        <p className='ramadan-title'>Yoga At Sunshine</p>
                                        <p className='ramadan-para'>Workshopat Al Noor Island...</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className='tab-pane' id='set3sub6'>
                                <div className='row'>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg1 scale-in-br'>
                                      <div className='caption'>
                                        <p className='Noor-title'>
                                          "Noor Island is a gem of Sharjah"
                                        </p>
                                        <a href='/' target='_self' className='card__anchor'>
                                          read all 61 reviews
                                        </a>
                                      </div>
                                      {/* <img class="" src="../../assets/img/filter1.jpg"> */}
                                    </div>
                                  </div>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg2 scale-in-hor-left'>
                                      <img className src={img1} alt='img' />
                                      <div className='activity-cap-filter'>
                                        <p className='ramadan-title'>Ramadan Special</p>
                                        <p className='ramadan-para'>Enjoy a specially designe...</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='col-lg-4 p-0 m-0'>
                                    <div className='item filterimg3 scale-in-ver-top'>
                                      <img className src={img2} alt='img' />
                                      <div className='activity-cap-filter-1'>
                                        <p className='ramadan-title'>Ramadan Special</p>
                                        <p className='ramadan-para'>Enjoy a specially designe...</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className='row'>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg4 scale-in-bl'>
                                      <img className src={img3} alt='img' />
                                    </div>
                                  </div>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg5 scale-in-hor-right'>
                                      <img className src={img4} alt='img' />
                                      <div className='activity-cap-filter-2'>
                                        <p className='ramadan-title'>Breathtaking Views</p>
                                        <p className='ramadan-para'>Immerse yourself in the b...</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg6 scale-in-ver-bottom'>
                                      <img className src={img5} alt='img' />
                                      <div className='activity-cap-filter-3'>
                                        <p className='ramadan-title'>Breathtaking Views</p>
                                        <p className='ramadan-para'>Immerse yourself in the b...</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg10 scale-in-hor-left'>
                                      <img className src={img6} alt='img' />
                                      <div className='activity-cap-filter-4'>
                                        <p className='ramadan-title'>Cupcake Decoration... </p>
                                        <p className='ramadan-para'>Workshopat Al Noor Island...</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className='row'>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg7'>&nbsp;</div>
                                  </div>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg8 scale-in-tr'>
                                      <img className src={img7} alt='img' />
                                    </div>
                                  </div>
                                  <div className='col-lg-4 p-0 m-0'>
                                    <div className='item filterimg9 scale-in-ver-top'>
                                      <img className src={img8} alt='img' />
                                      <div className='activity-cap-filter-5'>
                                        <p className='ramadan-title'>Yoga At Sunshine</p>
                                        <p className='ramadan-para'>Workshopat Al Noor Island...</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className='tab-pane' id='set3sub7'>
                                <div className='row'>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg1 scale-in-br'>
                                      <div className='caption'>
                                        <p className='Noor-title'>
                                          "Noor Island is a gem of Sharjah"
                                        </p>
                                        <a href='/' target='_self' className='card__anchor'>
                                          read all 61 reviews
                                        </a>
                                      </div>
                                      {/* <img class="" src="../../assets/img/filter1.jpg"> */}
                                    </div>
                                  </div>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg2 scale-in-hor-left'>
                                      <img className src={img1} alt='img' />
                                      <div className='activity-cap-filter'>
                                        <p className='ramadan-title'>Ramadan Special</p>
                                        <p className='ramadan-para'>Enjoy a specially designe...</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='col-lg-4 p-0 m-0'>
                                    <div className='item filterimg3 scale-in-ver-top'>
                                      <img className src={img2} alt='img' />
                                      <div className='activity-cap-filter-1'>
                                        <p className='ramadan-title'>Ramadan Special</p>
                                        <p className='ramadan-para'>Enjoy a specially designe...</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className='row'>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg4 scale-in-bl'>
                                      <img className src={img3} alt='img' />
                                    </div>
                                  </div>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg5 scale-in-hor-right'>
                                      <img className src={img4} alt='img' />
                                      <div className='activity-cap-filter-2'>
                                        <p className='ramadan-title'>Breathtaking Views</p>
                                        <p className='ramadan-para'>Immerse yourself in the b...</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg6 scale-in-ver-bottom'>
                                      <img className src={img5} alt='img' />
                                      <div className='activity-cap-filter-3'>
                                        <p className='ramadan-title'>Breathtaking Views</p>
                                        <p className='ramadan-para'>Immerse yourself in the b...</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg10 scale-in-hor-left'>
                                      <img className src={img6} alt='img' />
                                      <div className='activity-cap-filter-4'>
                                        <p className='ramadan-title'>Cupcake Decoration... </p>
                                        <p className='ramadan-para'>Workshopat Al Noor Island...</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className='row'>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg7'>&nbsp;</div>
                                  </div>
                                  <div className='col-lg-3 p-0 m-0'>
                                    <div className='item filterimg8 scale-in-tr'>
                                      <img className src={img7} alt='img' />
                                    </div>
                                  </div>
                                  <div className='col-lg-4 p-0 m-0'>
                                    <div className='item filterimg9 scale-in-ver-top'>
                                      <img className src={img8} alt='img' />
                                      <div className='activity-cap-filter-5'>
                                        <p className='ramadan-title'>Yoga At Sunshine</p>
                                        <p className='ramadan-para'>Workshopat Al Noor Island...</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='col-lg-6'>
                            <ul className='nav nav-tabs digitalop-tabs-a back-ul-color' style={{}}>
                              <li className>
                                <i className='fas fa-users' />
                                <a href='#set3sub1' className='nav-link active'>
                                  Test Tabs{' '}
                                </a>
                              </li>
                              <li>
                                <i className='fas fa-users' />
                                <a href='#set3sub2' className='nav-link'>
                                  Test Tabs
                                </a>
                              </li>
                              <li>
                                <i className='fas fa-users' />
                                <a href='#set3sub3' className='nav-link'>
                                  Test Tabs
                                </a>
                              </li>
                              <li>
                                <i className='fas fa-users' />
                                <a href='#set3sub4' className='nav-link'>
                                  Test Tabs
                                </a>
                              </li>
                              <li>
                                <i className='fas fa-users' />
                                <a href='#set3sub5' className='nav-link'>
                                  Test Tabs
                                </a>
                              </li>
                              <li>
                                <i className='fas fa-users' />
                                <a href='#set3sub6' className='nav-link'>
                                  Test Tabs
                                </a>
                              </li>
                              <li>
                                <i className='fas fa-users' />
                                <a href='#set3sub7' className='nav-link'>
                                  Test Tabs
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Set 3 */}
                    <div className='container-fluid'>
                      <div className='row'>
                        <div className='col-lg-6'>&nbsp;</div>
                        <div className='col-lg-6'>
                          <h1 className='make-your-visit'>
                            Make your visit
                            <br /> a unique
                            <br /> experience{' '}
                          </h1>
                          <hr className='make-your-visit-hr' />
                          <p className='make-your-visit-p'>
                            We ensure that once we take a project on-board, we provide 360 degree
                            solutions. As Arpatech is a technological hub, we give your project the
                            ultimate platform it needs to be scalable and successful.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Sub Tabs */}
                </div>
              </div>
            </div>
          </div>
        )}
      </Spring>
    );
  }
}

export default Audience;
