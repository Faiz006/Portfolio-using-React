import React from 'react';
import './skills.css';

function Skills() {
  return (
    <section className="skill container section" id="skills">
      <h2 className="section__title">Skills</h2>

      <div className="skills grid">
        <div className="skills-container">
          {/* HTML */}
          <div className="skill__date">
            <div className="skills__titles">
              <h3 className="skills__name"><i class="fa-brands fa-html5"></i> HTML</h3>
              <span className="skills__number">85%</span>
            </div>
            <div className="skills__bar">
              <span className="skills__percentage html"></span>
            </div>
          </div>

          {/* CSS */}
          <div className="skill__date">
            <div className="skills__titles">
              <h3 className="skills__name"><i class="fa-brands fa-css3-alt"></i> CSS</h3>
              <span className="skills__number">75%</span>
            </div>
            <div className="skills__bar">
              <span className="skills__percentage css"></span>
            </div>
          </div>

          {/* JavaScript */}
          <div className="skill__date">
            <div className="skills__titles">
              <h3 className="skills__name"><i class="fa-brands fa-square-js"></i> JavaScript</h3>
              <span className="skills__number">50%</span>
            </div>
            <div className="skills__bar">
              <span className="skills__percentage js"></span>
            </div>
          </div>
        </div>

        <div className="skills-container">
          {/* React */}
          <div className="skill__date">
            <div className="skills__titles">
              <h3 className="skills__name"><i class="fa-brands fa-react"></i> React</h3>
              <span className="skills__number">30%</span>
            </div>
            <div className="skills__bar">
              <span className="skills__percentage react"></span>
            </div>
          </div>

          {/* Java */}
          <div className="skill__date">
            <div className="skills__titles">
              <h3 className="skills__name"><i class="fa-brands fa-java"></i> Java</h3>
              <span className="skills__number">70%</span>
            </div>
            <div className="skills__bar">
              <span className="skills__percentage java"></span>
            </div>
          </div>

          {/* Unity */}
          <div className="skill__date">
            <div className="skills__titles">
              <h3 className="skills__name"><i class="fa-brands fa-unity"></i> Unity</h3>
              <span className="skills__number">20%</span>
            </div>
            <div className="skills__bar">
              <span className="skills__percentage unity"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
