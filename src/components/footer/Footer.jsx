import React from 'react'
import { SiDatabricks } from 'react-icons/si'
import { BsFillArrowUpCircleFill } from 'react-icons/bs'
import { FiMail, FiInstagram, FiFacebook, FiLinkedin, FiTwitter, FiGithub } from 'react-icons/fi'
import './FooterStyles.css';
import footerBg from "../../assets/footer-bg.jpg";

import { Link } from 'react-scroll'

const Footer = () => {
  return (
    <div className='footer' style={{backgroundImage: `url("${footerBg}")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover'}}>
        <div className="container">
            <div className="top">
                <div className="logo-footer">
                    <SiDatabricks className='icon' />
                    <h2>Secured.</h2>
                </div>
                
                <Link activeClass="active" to="top" spy={true} duration={500} >
                    <BsFillArrowUpCircleFill className='icon' />
                </Link> 
            </div>
            <div className="col-container">
                <div className="col">
                    <h3>Navigation</h3>
                    <p>Home</p>
                    <p>Data</p>
                    <p>Cloud</p>
                    <p>Contact</p>
                </div>
                <div className="col">
                    <h3>My Account</h3>
                    <p>Home</p>
                    <p>Data</p>
                    <p>Cloud</p>
                    <p>Contact</p>
                </div>
                <div className="col">
                    <h3>Information</h3>
                    <p>Home</p>
                    <p>Data</p>
                    <p>Cloud</p>
                    <p>Contact</p>
                </div>
                <div className="col">
                    <h3>Legal</h3>
                    <p>Home</p>
                    <p>Data</p>
                    <p>Cloud</p>
                    <p>Contact</p>
                </div>
                <form>
                    <h3>Join Our Team</h3>
                    <input type="email" placeholder='Enter your email'/>
                    <FiMail className='mail-icon' />
                    <div className="social-group">
                    <FiInstagram className="social-icon" />
                    <FiTwitter className="social-icon" />
                    <FiFacebook className="social-icon" />
                    <FiLinkedin className="social-icon" />
                    <FiGithub className="social-icon" />
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Footer;