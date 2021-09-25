import React from 'react';
import '../App.css';
import './Media.css';
import { Link } from 'react-router-dom';
import phone from '../Home_stuffs/ContactUs/phone.png'
import facebook from '../Home_stuffs/ContactUs/facebook.png'
import insta from '../Home_stuffs/ContactUs/insta.png'
import whatsapp from '../Home_stuffs/ContactUs/whatsapp.png'
import twitter from '../Home_stuffs/ContactUs/twitter.png'
import linkedin from '../Home_stuffs/ContactUs/linkedin.png'
import youtube from '../Home_stuffs/ContactUs/youtube.png'
import gmail from '../Home_stuffs/ContactUs/gmail.png'

function Media(){
    return(
        <div className='media-container'>
            <div className='media-wrapper'>
                <div className='media-content'>
                    <div className='media-row1'>
                        <div className='media-box'>
                            <div className='media-card'>
                                <img className='media-image' src={phone} alt='99Slices' />
                            </div>
                            <h1>PHONE</h1>
                        </div>
                        <div className='media-box'>
                            <div className='media-card'>
                                <img className='media-image' src={facebook} alt='99Slices' />
                            </div>
                            <h1>FACEBOOK</h1>
                        </div>
                        <div className='media-box'>
                            <div className='media-card'>
                                <img className='media-image' src={insta} alt='99Slices' />
                            </div>
                            <h1>INSTAGRAM</h1>
                        </div>
                        <div className='media-box'>
                            <div className='media-card'>
                                <img className='media-image' src={whatsapp} alt='99Slices' />
                            </div>
                            <h1>WHATSAPP</h1>
                        </div>
                    </div>
                    <div className='media-row2'>
                        <div className='media-box'>
                            <div className='media-card'>
                                <img className='media-image' src={twitter} alt='99Slices' />
                            </div>
                            <h1>TWITTER</h1>
                        </div>
                        <div className='media-box'>
                            <div className='media-card'>
                                <img className='media-image' src={youtube} alt='99Slices' />
                            </div>
                            <h1>YOUTUBE</h1>
                        </div>
                        <div className='media-box'>
                            <div className='media-card'>
                                <img className='media-image' src={linkedin} alt='99Slices' />
                            </div>
                            <h1>LINKEDIN</h1>
                        </div>
                        <div className='media-box'>
                            <div className='media-card'>
                                <img className='media-image' src={gmail} alt='99Slices' />
                            </div>
                            <h1>GMAIL</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Media