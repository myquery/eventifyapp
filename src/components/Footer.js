import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './FooterStyles.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='container'>
            <div className='col-solutions'>
                <h6>Solutions</h6>
                <ul>
                    <li><Link to='/' className='link'>Marketing</Link></li>
                    <li><Link to='/' className='link'>Commerce</Link></li>
                    <li><Link to='/' className='link'>Analytics</Link></li>
                    <li><Link to='/' className='link'>Insights</Link></li>
                </ul>
            </div>
            <div className='col-support'>
                <h6>Support</h6>
                <ul>
                    <li><Link to='/' className='link'>Pricing</Link></li>
                    <li><Link to='/' className='link'>Documentation</Link></li>
                    <li><Link to='/' className='link'>Guides</Link></li>
                    <li><Link to='/' className='link'>Api Status</Link></li>
                </ul>
            </div>
            <div className='col-company'>
                <h6>Company</h6>
                <ul>
                    <li><Link to='/' className='link'>About</Link></li>
                    <li><Link to='/' className='link'>Blog</Link></li>
                    <li><Link to='/' className='link'>Job</Link></li>
                    <li><Link to='/' className='link'>Press</Link></li>
                </ul>
            </div>
            <div className='col-legal'>
                <h6>Legal</h6>
                <ul>
                    <li><Link to='/' className='link'>Claim</Link></li>
                    <li><Link to='/' className='link'>Privacy</Link></li>
                    <li><Link to='/' className='link'>Cookies</Link></li>
                    <li><Link to='/' className='link'>Terms</Link></li>
                </ul>
            </div>
            <div className='col-subscribe'>
                <h6>subscribe to our newsletter</h6>
                <p>The latest news, aeticles, and resources sent to your inbox weekly</p>
                <div className='subscribe'>
                    <input type='email' placeholder='Enter your email' />
                    <button>subscribe</button>
                </div>
            </div>
        </div>
        <div className='footer-bottom'>
            <div className='content'>
                <div className='rights'>
                    <p>&copy; Workflow, inc. All rights reserved.</p>
                </div>
                <div>
                    <FaFacebook size={20} style={{color:'#d3d3d3', marginRight: '10px'}}/>
                    <FaInstagram size={20} style={{color:'#d3d3d3', marginRight: '10px'}}/>
                    <FaTwitter size={20} style={{color:'#d3d3d3', marginRight: '10px'}}/>
                    <FaLinkedin size={20} style={{color:'#d3d3d3', marginRight: '10px'}}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer