import React from 'react'
import "./Footer.css";
import footer_logo from "../../assets/footer_logo.svg";
import Logoo from '../../assets/Logoo.svg'
import user_icon from "../../assets/user_icon.svg";

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
            <img src={Logoo} alt="" />
            <p>Architecting robust backend systems and high-performance frontends by transforming complex requirements into secure, market-ready digital solutions.</p>
        </div>
        <div className="footer-top-right">
            <div className="footer-email-input">
                <img src={user_icon} alt="" />
                <input type="email" placeholder='Enter your email' />
            </div>
            <div className="footer-subscribe">
                Subscribe
            </div>
        </div>
      </div>
      <hr />
      {/* <div className="footer-bottom">
            <p className="footer-bottom-left">&copy; 2025 Anshul Pandey. All rights reserved.</p>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
      </div> */}
      <div className="footer-bottom">
          <div className="footer-bottom-left">
              <p>© 2025 Anshul Pandey. All rights reserved.</p>
          </div>
          <div className="footer-bottom-right">
              <p>Term of Services</p>
              <p>Privacy Policy</p>
              <a href="#contact" style={{textDecoration: 'none', color: 'inherit'}}>
                  <p>Connect with me</p>
              </a>
          </div>
      </div>
    </div>
  )
}

export default Footer
