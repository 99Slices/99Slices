import React from 'react';
import '../App.css';
import './Form.css';

function Form(){
    return (
        <div className='form-container'>
            <div className='wrapper'>
                <div className='form-wrapper'>
                    <h1>NEED A RELIABLE<br/>TECHNOLOGY PARTNER??</h1>
                    <p>Tell us your one slice of requirement &<br/>We will complete the remaining <span>99Slices</span> for you!</p>
                    <form noValidate>
                        <div className='name'>
                            <label htmlFor='name'>Name</label>
                            <input type='text' className='' placeholder='Enter Your Name' name='name' noValidate />
                        </div>
                        <div className='email'>
                            <label htmlFor='email'>Email</label>
                            <input type='text' className='' placeholder='Enter Your Email Address' name='email' noValidate />
                        </div>
                        <div className='contactNum'>
                            <label htmlFor='contactNum'>Contact Number</label>
                            <input type='text' className='' placeholder='Enter Your Contact Number' name='contactNum' noValidate />
                        </div>
                        <div className='category'>
                            <label htmlFor='category'>Service Category</label>
                            <input type='text' className='' placeholder='Enter Your Requirment Category' name='category' noValidate />
                        </div>
                        <div className='companyName'>
                            <label htmlFor='companyName'>Company Name</label>
                            <input type='text' className='' placeholder='Enter Your Company Name' name='companyName' noValidate />
                        </div>
                        <div className='discription'>
                            <label htmlFor='discription'>Description</label>
                            <textarea type='text' className='' placeholder='Breifly Describe Your Requirement' name='discription' noValidate />
                        </div>
                        <div className='submit'>
                            <button type='button'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Form