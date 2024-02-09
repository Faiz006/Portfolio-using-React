import React from 'react';
import "./resume.css";
import Data from "./Data";
import Card from "./Card";

const Resume = () => {
  const educationData = Data.filter((item) => item.category === "education");
  const experienceData = Data.filter((item) => item.category === "experience");

  return (
    <section className="resume container section" id="resume">
      <h2 className="section__title">Resume</h2>

      <div className="resume__container grid">
        
        <div className="timeline grid">
          {educationData.map((item) => (
            <Card
              key={item.id}
              icon={item.icon}
              title={item.title}
              year={item.year}
              desc={item.desc}
            />
          ))}
        </div>

        <div className="timeline grid">
          {experienceData.map((item) => (
            <Card
              key={item.id}
              icon={item.icon}
              title={item.title}
              year={item.year}
              desc={item.desc}
            />
          ))}
        </div>

      </div>

    </section>
  );
}

export default Resume;
