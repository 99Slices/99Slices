import React from 'react';
import '../App.css';
import './Team.css';
import { Link } from 'react-router-dom';
import teamImage from '../Home_stuffs/AboutUs/man.png'

function Team(){
    return(
        <div className='team-container'>
            <div className='team-header'>
                <h1>MEET OUR TEAM</h1>
            </div>
            <div className='team-body'>
                <div className='team-card'>
                    <img className='team-image' src={teamImage} alt='99Slices' />
                    <h1>Harshana Miyuranga</h1>
                    <p>Co-Founder, Director</p>
                    <div className='team-social'>
                        <Link
                            class='social-icon-link facebook'
                            to='/'
                            target='_blank'
                            aria-label='Facebook'
                        >
                            <i class='fab fa-facebook-f' />
                        </Link>
                        <Link
                            class='social-icon-link twitter'
                            to='/'
                            target='_blank'
                            aria-label='Twitter'
                        >
                            <i class='fab fa-twitter' />
                        </Link>
                        <Link
                            class='social-icon-link twitter'
                            to='/'
                            target='_blank'
                            aria-label='LinkedIn'
                        >
                            <i class='fab fa-linkedin' />
                        </Link>
                    </div>
                    <div className='team-contact'>
                        <p><button>Contact</button></p>
                    </div>
                </div>
                <div className='team-card'>
                    <img className='team-image' src={teamImage} alt='99Slices' />
                    <h1>Vimantha Perera</h1>
                    <p>Co-Founder, Director</p>
                    <div className='team-social'>
                        <Link
                            class='social-icon-link facebook'
                            to='/'
                            target='_blank'
                            aria-label='Facebook'
                        >
                            <i class='fab fa-facebook-f' />
                        </Link>
                        <Link
                            class='social-icon-link twitter'
                            to='/'
                            target='_blank'
                            aria-label='Twitter'
                        >
                            <i class='fab fa-twitter' />
                        </Link>
                        <Link
                            class='social-icon-link twitter'
                            to='/'
                            target='_blank'
                            aria-label='LinkedIn'
                        >
                            <i class='fab fa-linkedin' />
                        </Link>
                    </div>
                    <div className='team-contact'>
                        <p><button>Contact</button></p>
                    </div>
                </div>
                <div className='team-card'>
                    <img className='team-image' src={teamImage} alt='99Slices' />
                    <h1>Rashmika Thisaru</h1>
                    <p>Co-Founder, Director</p>
                    <div className='team-social'>
                        <Link
                            class='social-icon-link facebook'
                            to='/'
                            target='_blank'
                            aria-label='Facebook'
                        >
                            <i class='fab fa-facebook-f' />
                        </Link>
                        <Link
                            class='social-icon-link twitter'
                            to='/'
                            target='_blank'
                            aria-label='Twitter'
                        >
                            <i class='fab fa-twitter' />
                        </Link>
                        <Link
                            class='social-icon-link twitter'
                            to='/'
                            target='_blank'
                            aria-label='LinkedIn'
                        >
                            <i class='fab fa-linkedin' />
                        </Link>
                    </div>
                    <div className='team-contact'>
                        <p><button>Contact</button></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Team