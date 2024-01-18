import React from 'react';
import { FaDatabase, FaAsterisk, FaAccusoft, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"
import './HeroSyles.css';

function Hero() {
    return (
        <div className='hero'>
            <div className='container'>
                <div className='content'>
                    <div className='col-1'>
                        <h1>Data to enrich your</h1>
                        <h1><span className='primary-color'>online business</span></h1>
                        <p>
                        We intend to provide our customers with the best
                        experience from beginning to end, 
                        with quality delivery.
                        </p>
                        <div className='used-by'>
                            <p>USED BY</p>
                            <div className='icons'>
                                <i><FaDatabase />Worship</i>
                                <i><FaAsterisk />Prayer</i>
                                <i><FaAccusoft />Word</i>
                            </div>
                        </div>
                    </div>
                    <div className='col-2'>
                        <div className='form-layout'>
                            <div className='form-container'>
                                <p className='sign-in-text'>Sign in with</p>
                                <div className='social-login'>
                                    <i><FaFacebook size={20}/></i>
                                    <i><FaTwitter size={20}/></i>
                                    <i><FaInstagram size={20}/></i>
                                </div>
                                <div className='divider'>
                                    <p><span>Or</span></p>
                                </div>
                                <form action=''>
                                    <input type='text' placeholder='Name'/>
                                    <input type='email' placeholder='Email'/>
                                    <input type='password' placeholder='Password'/>
                                    <button>Create your account</button>
                                </form>
                            </div>
                            <div className='form-footer'>
                                <p>By singning in, you agree to our
                                    <spam className='primary-color'>Terms, data policy </spam> add
                                    <spam className='primary-color'>Cookies policy </spam>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;