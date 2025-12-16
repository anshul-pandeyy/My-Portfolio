import React from 'react'
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/about_profile.svg";

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
            <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>Dedicated Software Developer experienced in building high-performance web solutions using React, JavaScript, and modern front-end tools.</p>
                <p> I excel at translating complex requirements into elegant, scalable user interfaces while focusing on application speed and maintainability.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill">
                    <p>HTML & CSS</p>
                    <hr style={{width: "50%"}} />
                </div>
                <div className="about-skill">
                    <p>JavaScript</p>
                    <hr style={{width: "70%"}} />
                </div>
                <div className="about-skill">
                    <p>React JS</p>
                    <hr style={{width: "75%"}} />
                </div>
                <div className="about-skill">
                    <p>Next JS</p>
                    <hr style={{width: "50%"}} />
                </div>
                <div className="about-skill">
                    <p>Node JS</p>
                    <hr style={{width: "60%"}} />
                </div>
            </div>
        </div>
      </div>
      <div className="about-achievments">
        <div className="about-achievment">
            <h1>10+</h1>
            <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievment">
            <h1>90+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievment">
            <h1>15+</h1>
            <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  )
}

export default About
