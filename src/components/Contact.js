import React from 'react';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import './ContactStyles.css';

function Contact() {
  return (
    <div className='contact'>
        <div className='container'>
            <div className='col-1'>
                <div className='content'>
                    <div>
                        <h2>Get in touch</h2>
                        <p>Lorem hjkj koskld yyy jkjskdj jhkj
                           nlkldnks kjlkld jljklks jkoklk.
                        </p>
                    </div>
                    <div className='address'>
                        <p>No 5, Ojolobun</p>
                        <p>Gbera, Lagos</p>
                    </div>
                    <div className='icons'>
                        <FaPhone style={{marginRight: '1rem'}}/>
                        <p>+234 800 666 0000 </p>
                    </div>
                    <div className='icons'>
                        <FaEnvelope style={{marginRight: '1rem'}}/>
                        <p>support@example.com</p>
                    </div>
                    <div className='careers'>
                        <p>Looking for careers? <span>View all Job Openings.</span></p>
                    </div>
                </div>
            </div>
            <div className='col-2'>
                <form action=''>
                    <input type='text' placeholder='Full name' />
                    <input type='email' placeholder='Email' />
                    <input type='phone' placeholder='Phone' />
                    <textarea name='message' placeholder='message' cols='30' rows='10'></textarea>
                    <div className='checkbox'>
                        <input type='checkbox' />
                        <p>By checking this box, you agree to the <span>Privacy Policy </span> 
                        and <span>Cookie Policy</span>.</p>
                    </div>
                    <button>Submit</button>

                </form>
            </div>
        </div>

    </div>
  )
}

export default Contact