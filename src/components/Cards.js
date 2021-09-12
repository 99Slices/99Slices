import React from 'react';
import '../App.css';
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
  
  return (
    <div className='cards-container'>
      <div className='cards-header'>
        <h1><span>OUR SERVICES</span></h1>
      </div>
      <div className='cards-description'>
        <p>We are a company that provide IT solutions in JAVA, Web, Android/IOS, and all other IT related concerns.<br/>We offer a broad array of solutions to our client</p>
      </div>
      <div className='cards-cards'>
        <div className='cards-row1'>
          {/* first card */}
          <div className='CardItem-container'>
            <div className='card-flip'>
              <div className='card-front'>
                <div className='card-title'>
                  <h1>WEB DESIGNING</h1>
                </div>
                <div className='image-container'>
                  <img src={web_desing_img} alt='' />
                </div>
              </div>
              <div className='card-back'>
                <div className='card-title'>
                  <h1>WEB DESIGNING</h1>
                </div>
                <div className='card-body'>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac nulla vestibulum, pellentesque odio eget, tincidunt urna. Pellentesque et ipsum placerat justo finibus consectetur. Mauris elementum, neque at semper accumsan, lacus elit viverra turpis, a pulvinar purus turpis a sapien</p>
                </div>
              </div>
            </div>
          </div>
          {/* end of first card */}
          {/* second card */}
          <div className='CardItem-container'>
            <div className='card-flip'>
              <div className='card-front'>
                <div className='card-title'>
                  <h1>WEB DEVELOPMENT</h1>
                </div>
                <div className='image-container'>
                  <img src={web_development_img} alt='' />
                </div>
              </div>
              <div className='card-back'>
                <div className='card-title'>
                  <h1>WEB DEVELOPMENT</h1>
                </div>
                <div className='card-body'>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac nulla vestibulum, pellentesque odio eget, tincidunt urna. Pellentesque et ipsum placerat justo finibus consectetur. Mauris elementum, neque at semper accumsan, lacus elit viverra turpis, a pulvinar purus turpis a sapien</p>
                </div>
              </div>
            </div>
          </div>
          {/* end of second card */}
          {/* third card */}
          <div className='CardItem-container'>
            <div className='card-flip'>
              <div className='card-front'>
                <div className='card-title'>
                  <h1>MOBILE APPLICATIONS</h1>
                </div>
                <div className='image-container'>
                  <img src={mobile_app_img} alt='' />
                </div>
              </div>
              <div className='card-back'>
                <div className='card-title'>
                  <h1>MOBILE APPLICATIONS</h1>
                </div>
                <div className='card-body'>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac nulla vestibulum, pellentesque odio eget, tincidunt urna. Pellentesque et ipsum placerat justo finibus consectetur. Mauris elementum, neque at semper accumsan, lacus elit viverra turpis, a pulvinar purus turpis a sapien</p>
                </div>
              </div>
            </div>
          </div>
          {/* end of third card */}
        </div>
        <div className='cards-row2'>
          {/* forth card */}
          <div className='CardItem-container'>
            <div className='card-flip'>
              <div className='card-front'>
                <div className='card-title'>
                  <h1>NETWOKING</h1>
                </div>
                <div className='image-container'>
                  <img src={networking_img} alt='' />
                </div>
              </div>
              <div className='card-back'>
                <div className='card-title'>
                  <h1>NETWOKING</h1>
                </div>
                <div className='card-body'>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac nulla vestibulum, pellentesque odio eget, tincidunt urna. Pellentesque et ipsum placerat justo finibus consectetur. Mauris elementum, neque at semper accumsan, lacus elit viverra turpis, a pulvinar purus turpis a sapien</p>
                </div>
              </div>
            </div>
          </div>
          {/* end of forth card */}
          {/* fifth card */}
          <div className='CardItem-container'>
            <div className='card-flip'>
              <div className='card-front'>
                <div className='card-title'>
                  <h1>INDUSTRIAL 4.0</h1>
                </div>
                <div className='image-container'>
                  <img src={industrial4_img} alt='' />
                </div>
              </div>
              <div className='card-back'>
                <div className='card-title'>
                  <h1>INDUSTRIAL 4.0</h1>
                </div>
                <div className='card-body'>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac nulla vestibulum, pellentesque odio eget, tincidunt urna. Pellentesque et ipsum placerat justo finibus consectetur. Mauris elementum, neque at semper accumsan, lacus elit viverra turpis, a pulvinar purus turpis a sapien</p>
                </div>
              </div>
            </div>
          </div>
          {/* end of fifth card */}
          {/* sixth card */}
          <div className='CardItem-container'>
            <div className='card-flip'>
              <div className='card-front'>
                <div className='card-title'>
                  <h1>DIGITAL MARKETING</h1>
                </div>
                <div className='image-container'>
                  <img src={digi_market_img} alt='' />
                </div>
              </div>
              <div className='card-back'>
                <div className='card-title'>
                  <h1>DIGITAL MARKETING</h1>
                </div>
                <div className='card-body'>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac nulla vestibulum, pellentesque odio eget, tincidunt urna. Pellentesque et ipsum placerat justo finibus consectetur. Mauris elementum, neque at semper accumsan, lacus elit viverra turpis, a pulvinar purus turpis a sapien</p>
                </div>
              </div>
            </div>
          </div>
          {/* end of sixth card */}
        </div>
        <div className='cards-row3'>
          {/* 7TH card */}
          <div className='CardItem-container'>
            <div className='card-flip'>
              <div className='card-front'>
                <div className='card-title'>
                  <h1>SEO</h1>
                </div>
                <div className='image-container'>
                  <img src={SEO_img} alt='' />
                </div>
              </div>
              <div className='card-back'>
                <div className='card-title'>
                  <h1>SEO</h1>
                </div>
                <div className='card-body'>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac nulla vestibulum, pellentesque odio eget, tincidunt urna. Pellentesque et ipsum placerat justo finibus consectetur. Mauris elementum, neque at semper accumsan, lacus elit viverra turpis, a pulvinar purus turpis a sapien</p>
                </div>
              </div>
            </div>
          </div>
          {/* end of 7TH card */}
          {/* 8th card */}
          <div className='CardItem-container'>
            <div className='card-flip'>
              <div className='card-front'>
                <div className='card-title'>
                  <h1>GRAPHIC DESIGNING</h1>
                </div>
                <div className='image-container'>
                  <img src={graph_desing_img} alt='' />
                </div>
              </div>
              <div className='card-back'>
                <div className='card-title'>
                  <h1>GRAPHIC DESIGNING</h1>
                </div>
                <div className='card-body'>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac nulla vestibulum, pellentesque odio eget, tincidunt urna. Pellentesque et ipsum placerat justo finibus consectetur. Mauris elementum, neque at semper accumsan, lacus elit viverra turpis, a pulvinar purus turpis a sapien</p>
                </div>
              </div>
            </div>
          </div>
          {/* end of 8th card */}
          {/* 9th card */}
          <div className='CardItem-container'>
            <div className='card-flip'>
              <div className='card-front'>
                <div className='card-title'>
                  <h1>SOFTWARE DEVELOPMENT</h1>
                </div>
                <div className='image-container'>
                  <img src={soft_dev_img} alt='' />
                </div>
              </div>
              <div className='card-back'>
                <div className='card-title'>
                  <h1>SOFTWARE DEVELOPMENT</h1>
                </div>
                <div className='card-body'>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac nulla vestibulum, pellentesque odio eget, tincidunt urna. Pellentesque et ipsum placerat justo finibus consectetur. Mauris elementum, neque at semper accumsan, lacus elit viverra turpis, a pulvinar purus turpis a sapien</p>
                </div>
              </div>
            </div>
          </div>
          {/* end of 9th card */}
        </div>
      </div>
    </div>
  );
}

export default Cards;