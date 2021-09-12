import React from 'react';
import '../App.css';
import './Progress.css';

function Progress() {
    return(
        <div className='progress-container'>
            <div className='container-box'>
                <div className='project-box'>
                    <h1>12<span>+</span></h1>
                    <h2>PROJECTS</h2>
                </div>
                <div className='customer-box'>
                    <h1>10<span>+</span></h1>
                    <h2>CUSTOMER<br/>FEEDBACKS</h2>
                </div>
                <div className='acheivement-box'>
                    <h1>4<span>+</span></h1>
                    <h2>ACHIEVEMENT</h2>
                </div>
                <div className='experience-box'>
                    <h1>2<span>+</span></h1>
                    <h2>YEARS<br/>EXPERIENCE</h2>
                </div>
            </div>
        </div>
    );
}

export default Progress