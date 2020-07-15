import React from 'react';
import './ProgressCircle.css';
import $ from 'jquery';

let i = 2;

$(document).ready(function () {
  var radius = 200;
  var fields = $('.itemDot');
  var container = $('.dotCircle');
  var width = container.width();
  radius = width / 2.5;

  var height = container.height();
  var angle = 0,
    step = (2 * Math.PI) / fields.length;
  fields.each(function () {
    var x = Math.round(width / 2 + radius * Math.cos(angle) - $(this).width() / 2);
    var y = Math.round(height / 2 + radius * Math.sin(angle) - $(this).height() / 2);
    if (window.console) {
      console.log($(this).text(), x, y);
    }

    $(this).css({
      left: x + 'px',
      top: y + 'px',
    });
    angle += step;
  });

  $('.itemDot').click(function () {
    var dataTab = $(this).data('tab');
    $('.itemDot').removeClass('active');
    $(this).addClass('active');
    $('.CirItem').removeClass('active');
    $('.CirItem' + dataTab).addClass('active');
    i = dataTab;

    $('.dotCircle').css({
      transform: 'rotate(' + (360 - (i - 1) * 36) + 'deg)',
      transition: '2s',
    });
    $('.itemDot').css({
      transform: 'rotate(' + (i - 1) * 36 + 'deg)',
      transition: '1s',
    });
  });

  setInterval(function () {
    var dataTab = $('.itemDot.active').data('tab');
    if (dataTab > 6 || i > 6) {
      dataTab = 1;
      i = 1;
    }
    $('.itemDot').removeClass('active');
    $('[data-tab="' + i + '"]').addClass('active');
    $('.CirItem').removeClass('active');
    $('.CirItem' + i).addClass('active');
    i++;

    $('.dotCircle').css({
      transform: 'rotate(' + (360 - (i - 2) * 36) + 'deg)',
      transition: '2s',
    });
    $('.itemDot').css({
      transform: 'rotate(' + (i - 2) * 36 + 'deg)',
      transition: '1s',
    });
  }, 5000);
});

export const ProgressCircle = () => {
  return (
    <div className='container-fluid'>
      <div className='holderCircle'>
        <div className='round' />
        <div className='dotCircle'>
          <span className='itemDot active itemDot1' data-tab={1}>
            <i className='fas fa-clock' />
            <span className='forActive' />
          </span>
          <span className='itemDot itemDot2' data-tab={2}>
            <i className='fa fa-comments' />
            <span className='forActive' />
          </span>
          <span className='itemDot itemDot3' data-tab={3}>
            <i className='fa fa-user' />
            <span className='forActive' />
          </span>
          <span className='itemDot itemDot4' data-tab={4}>
            <i className='fa fa-tags' />
            <span className='forActive' />
          </span>
          <span className='itemDot itemDot5' data-tab={5}>
            <i className='fa fa-upload' />
            <span className='forActive' />
          </span>
          <span className='itemDot itemDot6' data-tab={6}>
            <i className='fa fa-briefcase' />
            <span className='forActive' />
          </span>
        </div>
        <div className='contentCircle'>
          <div className='CirItem title-box active CirItem1'>
            <h2 className='title'>
              <span>Automate</span>
            </h2>
            <p>
              It is a long established fact that a reader will be distracted by the readable content
              of a page when looking at its layout.
            </p>
            <i className='fa fa-clock-o' />
          </div>
          <div className='CirItem title-box CirItem2'>
            <h2 className='title'>
              <span>Chat </span>
            </h2>
            <p>
              It is a long established fact that a reader will be distracted by the readable content
              of a page when looking at its layout.
            </p>
            <i className='fa fa-comments' />
          </div>
          <div className='CirItem title-box CirItem3'>
            <h2 className='title'>
              <span>Responses</span>
            </h2>
            <p>
              It is a long established fact that a reader will be distracted by the readable content
              of a page when looking at its layout.
            </p>
            <i className='fa fa-user' />
          </div>
          <div className='CirItem title-box CirItem4'>
            <h2 className='title'>
              <span>Tags</span>
            </h2>
            <p>
              It is a long established fact that a reader will be distracted by the readable content
              of a page when looking at its layout.
            </p>
            <i className='fa fa-tags' />
          </div>
          <div className='CirItem title-box CirItem5'>
            <h2 className='title'>
              <span>Sharing</span>
            </h2>
            <p>
              It is a long established fact that a reader will be distracted by the readable content
              of a page when looking at its layout.
            </p>
            <i className='fa fa-upload' />
          </div>
          <div className='CirItem title-box CirItem6'>
            <h2 className='title'>
              <span>Support</span>
            </h2>
            <p>
              It is a long established fact that a reader will be distracted by the readable content
              of a page when looking at its layout.
            </p>
            <i className='fa fa-briefcase' />
          </div>
        </div>
      </div>
    </div>
  );
};
