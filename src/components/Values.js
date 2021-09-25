import React from 'react';
import '../App.css';
import './Values.css';
import values_logo from '../Home_stuffs/Banner/Logo_banner.png'

function Values() {
    return(
        <div className='values-container'>
            <div className='values-header'>
                <div className='values-image-box'>
                    <img src={values_logo} />
                </div>
            </div>
            <div className='values-box'>
                <div className='values-description-box'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className='values-row1'>
                    <div className='vission-box'>
                        <div className='values-header-type1'>
                            <h1>OUR VISSION</h1>
                        </div>
                        <div className='values-description-type1'>
                            <p>
                                We aim to remain as professional and positive as possible, to introduce our services to our customers and to
                                recognize their requirements. We do a detailed review of the requirements of the customers. Moreover, we approach and
                                discuss wiht them to bring about a solution as needed.
                            </p>
                        </div>
                    </div>
                    <div className='border-middle-top'></div>
                    <div className='mission-box'>
                        <div className='values-header-type2'>
                            <h1>OUR MISSION</h1>
                        </div>
                        <div className='values-description-type2'>
                            <p>
                                We aim to remain as professional and positive as possible, to introduce our services to our customers and to
                                recognize their requirements. We do a detailed review of the requirements of the customers. Moreover, we approach and
                                discuss wiht them to bring about a solution as needed.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='values-row2'>
                    <div className='goals-box'>
                        <div className='values-header-type1'>
                            <h1>OUR GOALS</h1>
                        </div>
                        <div className='values-description-type1'>
                            <p>
                                We aim to remain as professional and positive as possible, to introduce our services to our customers and to
                                recognize their requirements. We do a detailed review of the requirements of the customers. Moreover, we approach and
                                discuss wiht them to bring about a solution as needed.
                            </p>
                        </div>
                    </div>
                    <div className='border-middle-bottom'></div>
                    <div className='process-box'>
                        <div className='values-header-type2'>
                            <h1>OUR PROCESS</h1>
                        </div>
                        <div className='values-description-type2'>
                            <p>
                                We aim to remain as professional and positive as possible, to introduce our services to our customers and to
                                recognize their requirements. We do a detailed review of the requirements of the customers. Moreover, we approach and
                                discuss wiht them to bring about a solution as needed.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Values