import React from 'react'
import {Link} from 'react-router-dom'

import './Footer.css'
import Button from './Button'

const Footer = () => {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">Lorem ipsum dolor sit amet, consxctetur elit. Hic, assumenda?</p>
                <p className="footer-subscription-text">Lorem ipsum dolor sit amet consectetur.</p>
                <div className="input-areas">
                    <form>
                        <input type="email" name="email" placeholder="Your Email" className="footer-input" />
                        <Button buttonStyle="btn--outline">Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to="/sign-up">How It Works</Link>
                        <Link to="/">Testimonials</Link>
                        <Link to="/">Careers</Link>
                        <Link to="/">Investors</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Contact Us</h2>
                        <Link to="/sign-up">Contact</Link>
                        <Link to="/sign-up">Support</Link>
                        <Link to="/sign-up">Destinations</Link>
                        <Link to="/sign-up">Sponsorships</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Videos</h2>
                        <Link to="/">Submit Videos</Link>
                        <Link to="/">Ambassadors</Link>
                        <Link to="/">Agency</Link>
                        <Link to="/">Influencer</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Social Media</h2>
                        <Link to="/">Instagram</Link>
                        <Link to="/">Facebook</Link>
                        <Link to="/">Youtube</Link>
                        <Link to="/">Twitter</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to="/" className="social-logo">
                            TRVL <i className="fab fa-typo3"></i>
                        </Link>
                    </div>
                    <small className="website-rights">TRVL &copy; 2020</small>
                    <div className="social-icons">
                        <Link 
                            to="/" 
                            aria-label="Facebook"
                            target="_blank" 
                            className="social-icon-link facebook"
                        >
                            <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link 
                            to="/" 
                            aria-label="instagram"
                            target="_blank" 
                            className="social-icon-link instagram"
                        >
                            <i className="fab fa-instagram"></i>
                        </Link>
                        <Link 
                            to="/" 
                            aria-label="youtube"
                            target="_blank" 
                            className="social-icon-link youtube"
                        >
                            <i className="fab fa-youtube"></i>
                        </Link>
                        <Link 
                            to="/" 
                            aria-label="twitter"
                            target="_blank" 
                            className="social-icon-link twitter"
                        >
                            <i className="fab fa-twitter"></i>
                        </Link>
                        <Link 
                            to="/" 
                            aria-label="linkedin"
                            target="_blank" 
                            className="social-icon-link linkedin"
                        >
                            <i className="fab fa-linkedin"></i>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
