import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import img2 from '../../assets/img/03.png';
import img3 from '../../assets/img/about/07-1.png';
import img4 from '../../assets/img/about/07-2.png';
import img5 from '../../assets/img/about/05-2.png';
import img6 from '../../assets/img/about/05-1.png';
import img7 from '../../assets/img/about/06-2.png';

export default function SimpleCarousel() {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;

  return (
    <div style={{ padding: `0 ${chevronWidth}px` }}>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={3}
        gutter={12}
        showSlither={true}
        firstAndLastGutter={true}
        freeScrolling={true}
        leftChevron={<button>{'<'}</button>}
        rightChevron={<button>{'>'}</button>}
        outsideChevron
        chevronWidth={chevronWidth}
        activePosition={'center'}
        infiniteLoop={true}
      >
        <div
          style={{
            height: 200,
            backgroundImage: `url(${img2})`,
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <h3>Management.</h3>
        </div>
        <div
          style={{
            height: 200,
            backgroundImage: `url(${img3})`,
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <h3>Design.</h3>
        </div>
        <div
          style={{
            height: 200,
            backgroundImage: `url(${img4})`,
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <h3>Technical Delivery.</h3>
        </div>
        <div
          style={{
            height: 200,
            backgroundImage: `url(${img5})`,
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <h3>Development.</h3>
        </div>
        <div
          style={{
            height: 200,
            backgroundImage: `url(${img6})`,
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <h3>Creativity.</h3>
        </div>
        <div
          style={{
            height: 200,
            backgroundImage: `url(${img7})`,
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <h3>Strategy.</h3>
        </div>
      </ItemsCarousel>
    </div>
  );
}
