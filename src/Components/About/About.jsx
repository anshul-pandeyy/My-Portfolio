import React from 'react'
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
// import profile_img from "../../assets/about_profile.svg";
// import myPic from "../../assets/myPic.jpeg";
import myPicRed from "../../assets/myPicRed.jpg";

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
            <img src={myPicRed} alt="" className="about-profile-img" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I recently graduate in B.Tech CSE from VIT Bhopal, specializing in MERN and Java. I engineer scalable web architectures.</p>
                <p> Driven by analytical rigor—honed through 180+ DSA challenges—and entrepreneurial insight from launching D2C platforms, I transform complex requirements into scalable, market-ready digital products. I don’t just write code; I architect secure, user-centric experiences.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill">
                    <p>MERN</p>
                    <hr style={{width: "40%"}} />
                </div>
                <div className="about-skill">
                    <p>Java & Logic</p>
                    <hr style={{width: "60%"}} />
                </div>
                <div className="about-skill">
                    <p>MySQL</p>
                    <hr style={{width: "75%"}} />
                </div>
                <div className="about-skill">
                    <p>Shopify</p>
                    <hr style={{width: "40%"}} />
                </div>
            </div>
        </div>
      </div>
      <div className="about-achievments">
        <div className="about-achievment">
            <h1>180+</h1>
            <p>DSA Challenges Solved</p>
        </div>
        <hr />
        <div className="about-achievment">
            <h1>11+</h1>
            <p>Core Technologies Mastered</p>
        </div>
        <hr />
        <div className="about-achievment">
            <h1>15+</h1>
            <p>Projects Completed</p>
        </div>
      </div>
    </div>
  )
}

export default About
