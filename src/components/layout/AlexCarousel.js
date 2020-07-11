import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/scss/alice-carousel.scss';
import 'react-alice-carousel/lib/alice-carousel.css';
import 'react-alice-carousel/lib/alice-carousel.css';

import img11 from '../../assets/img/filter1.jpg';
import img12 from '../../assets/img/filter2.jpg';
import img13 from '../../assets/img/filter3.jpg';

export default class AlexCarousel extends React.Component {
  onSlideChange(e) {
    console.log('Item`s position during a change: ', e.item);
    console.log('Slide`s position during a change: ', e.slide);
  }

  onSlideChanged(e) {
    console.log('Item`s position after changes: ', e.item);
    console.log('Slide`s position after changes: ', e.slide);
  }

  render() {
    const responsive = {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1024: {
        items: 3,
      },
    };

    return (
      <AliceCarousel
        duration={400}
        autoPlay={true}
        startIndex={1}
        fadeOutAnimation={true}
        mouseDragEnabled={true}
        responsive={responsive}
        autoPlayInterval={2000}
        autoPlayDirection='rtl'
        autoPlayActionDisabled={true}
        onSlideChange={this.onSlideChange}
        onSlideChanged={this.onSlideChanged}
      >
        <div
          className='yours-custom-class'
          style={{
            height: 500,
            backgroundImage: `url(${img11})`,
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <h2>1</h2>
        </div>
        <div
          className='yours-custom-class'
          style={{
            height: 500,
            backgroundImage: `url(${img12})`,
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <h2>2</h2>
        </div>
        <div
          className='yours-custom-class'
          style={{
            height: 500,
            backgroundImage: `url(${img13})`,
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <h2>3</h2>
        </div>
        <div
          className='yours-custom-class'
          style={{
            height: 500,
            backgroundImage: `url(${img11})`,
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <h2>4</h2>
        </div>
        <div
          className='yours-custom-class'
          style={{
            height: 500,
            backgroundImage: `url(${img12})`,
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <h2>5</h2>
        </div>
      </AliceCarousel>
    );
  }
}
