import React from 'react'
import "./Hero.css";
// import profile_img from "../../assets/profile_img.svg";
// import myPic from "../../assets/myPic.jpeg";
import myPicRed from "../../assets/myPicRed.jpg";
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={myPicRed} alt="" />
      <h1><span>I'm Anshul Pandey,</span> a Full-Stack Web Developer. </h1>
      <p>I build scalable MERN and Java applications, bridging robust backend logic—APIs, JWT, and Stripe—with user-centric frontends. I transform complex algorithmic logic into intuitive, market-ready digital products.</p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">Connect with me</AnchorLink>
        </div>
        <a href="/Anshul_Pandey_Resume.pdf" target="_blank" rel="noreferrer">
          <div className="hero-resume">My resume</div>
        </a>
      </div>
    </div>
  )
}

export default Hero
