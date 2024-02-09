import React from 'react';
import "./about.css";
import Image from "../../assets/avatar-1.svg";
import AboutBox from "./AboutBox";

const FILE = 'http://localhost:3000/CV.pdf'
const About = () => {
  const downloadFileAtURL =(url)=>{
    const fileName = url.split('/').pop('CV.pdf')
    const aTag = document.createElement('a')
    aTag.href = url
    aTag.setAttribute('download', FILE)
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  }
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">Currently pursuing a Bachelor's degree in Computer Engineering at ITER, I am deeply passionate about exploring the fascinating world of technology. Proficient in languages such as Java, HTML, CSS, and Vanilla JavaScript, I have honed my skills in various programming domains. My journey in learning extends beyond the academic realm, as I am currently diving into the realm of Unity Game Engine to delve into the exciting field of Game Development. Simultaneously, I am eager to expand my knowledge by mastering React. With a drive for continuous growth and innovation.</p>
            <a href="" className="btn" onClick={()=>{downloadFileAtURL(FILE)}}>Download CV</a>
          </div>
        </div>
      </div>
      

      {/* <AboutBox /> */}
    </section>
  )
}

export default About