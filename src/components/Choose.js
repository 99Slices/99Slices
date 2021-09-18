import React from 'react';
import '../App.css';
import './Choose.css';
import time_delivery_img from '../Home_stuffs/WhyChooseUs/on-time-delivery.png'
import customer_satisfaction_img from '../Home_stuffs/WhyChooseUs/customer-satisfaction.png'
import service_quality_img from '../Home_stuffs/WhyChooseUs/service-quality.png'
import cost_effective_img from '../Home_stuffs/WhyChooseUs/cost-effective.png'

function Choose() {
    return (
        <div className='choose-container'>
            <div className='choose-header'>
                <h1><span>WHY CHOOSE US</span></h1>
            </div>
            <div className='choose-description'>
                <p>
                    We want to see successfull and satisfied customers who are happy to recommend us to their friends or business partners.<br/>
                    We as a company will provide you the platform to your success. Furthermore, we provide the services that help you to drive prospective cutomers to the platform and four IT-related fields.
                </p>
            </div>
            <div className='choose-body'>
                <div className='choose-image-box1'>
                    <div className='choose-image-container'>
                        <img src={time_delivery_img} alt='' />
                    </div>
                    <div className='choose-image-title'>
                        <h1>ON TIME DELIVERY</h1>
                    </div>
                </div>
                <div className='choose-image-box2'>
                    <div className='choose-image-container'>
                        <img src={customer_satisfaction_img} alt='' />
                    </div>
                    <div className='choose-image-title'>
                        <h1>CUSTOMER<br/>SATISFACTION</h1>
                    </div>
                </div>
                <div className='choose-image-box3'>
                    <div className='choose-image-container'>
                        <img src={service_quality_img} alt='' />
                    </div>
                    <div className='choose-image-title'>
                        <h1>SERVICE QUALITY</h1>
                    </div>
                </div>
                <div className='choose-image-box4'>
                    <div className='choose-image-container'>
                        <img src={cost_effective_img} alt='' />
                    </div>
                    <div className='choose-image-title'>
                        <h1>COST EFFECTIVE</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Choose;