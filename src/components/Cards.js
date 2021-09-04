import React from 'react';
import Slider from 'react-slick'
import '../../node_modules/slick-carousel/slick/slick.css';
import '../../node_modules/slick-carousel/slick/slick-theme.css';
import './Cards.css';
import web_desing_img from '../Home_stuffs/Services/web-designing.png'
import web_development_img from '../Home_stuffs/Services/web-development.png'
import mobile_app_img from '../Home_stuffs/Services/mobile-app.png'
import networking_img from '../Home_stuffs/Services/networking.png'
import industrial4_img from '../Home_stuffs/Services/industrial4.png'
import digi_market_img from '../Home_stuffs/Services/digital-marketing.png'
import SEO_img from '../Home_stuffs/Services/seo.png'
import graph_desing_img from '../Home_stuffs/Services/graphic-design.png'
import soft_dev_img from '../Home_stuffs/Services/software-dev.png'
import CardItem from './CardItem';

function Cards() {
  let settings = {
    dot:true,
    infinite:false,
    speed:500,
    slidesToShow:4,
    slidesToScroll:1,
    cssEase: 'linear'
  }
  return (
    <div className='cards'>
      <div className='header-content'>
        <h1><span>OUR SERVICES</span></h1>
      </div>
      <div>
        <p>We are</p>
      </div>
      <Slider {...settings}>
          <div className='cards__wrapper'>
            <div className='card'>
              <div className='card-title'>
                <h2>WEB DESIGNING</h2>
              </div>
              <div className='card-image'>
                <img src={web_desing_img} />
              </div>
            </div>
          </div>
          <div className='cards__wrapper'>
            <div className='card'>
              <div className='card-title'>
                <h2>WEB DEVOLOPMENT</h2>
              </div>
              <div className='card-image'>
                <img src={web_development_img} />
              </div>
            </div>
          </div>
          <div className='cards__wrapper'>
            <div className='card'>
              <div className='card-title'>
                <h2>MOBILE APPLICATIONS</h2>
              </div>
              <div className='card-image'>
                <img src={mobile_app_img} />
              </div>
            </div>
          </div>
          <div className='cards__wrapper'>
            <div className='card'>
              <div className='card-title'>
                <h2>NETWORKING</h2>
              </div>
              <div className='card-image'>
                <img src={networking_img} />
              </div>
            </div>
          </div>
          <div className='cards__wrapper'>
            <div className='card'>
              <div className='card-title'>
                <h2>INDUSTRIAL 4.0</h2>
              </div>
              <div className='card-image'>
                <img src={industrial4_img} />
              </div>
            </div>
          </div>
          <div className='cards__wrapper'>
            <div className='card'>
              <div className='card-title'>
                <h2>DIGITAL MARKETING</h2>
              </div>
              <div className='card-image'>
                <img src={digi_market_img} />
              </div>
            </div>
          </div>
          <div className='cards__wrapper'>
            <div className='card'>
              <div className='card-title'>
                <h2>SEO</h2>
              </div>
              <div className='card-image'>
                <img src={SEO_img} />
              </div>
            </div>
          </div>
          <div className='cards__wrapper'>
            <div className='card'>
              <div className='card-title'>
                <h2>GRAPHIC DESIGNING</h2>
              </div>
              <div className='card-image'>
                <img src={graph_desing_img} />
              </div>
            </div>
          </div>
          <div className='cards__wrapper'>
            <div className='card'>
              <div className='card-title'>
                <h2>SOFTWARE DEVELOPMENT</h2>
              </div>
              <div className='card-image'>
                <img src={soft_dev_img} />
              </div>
            </div>
          </div>
      </Slider>
    </div>
  );
}

export default Cards;

{/* <ul className='cards__items'>
              <CardItem
                //src='images/img-9.jpg'
                text='Explore the hidden waterfall deep inside the Amazon Jungle'
                label='Adventure'
                path='/services'
              />
              <CardItem
                //src='images/img-2.jpg'
                text='Travel through the Islands of Bali in a Private Cruise'
                label='Luxury'
                path='/services'
              />
            </ul> */}
            {/* <ul className='cards__items'>
              <CardItem
                //src='images/img-3.jpg'
                text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                label='Mystery'
                path='/services'
              />
              <CardItem
                //src='images/img-4.jpg'
                text='Experience Football on Top of the Himilayan Mountains'
                label='Adventure'
                path='/products'
              />
              <CardItem
                //src='images/img-8.jpg'
                text='Ride through the Sahara Desert on a guided camel tour'
                label='Adrenaline'
                path='/sign-up'
              />
            </ul> */}