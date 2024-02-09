import React from 'react';

function AboutBox() {
    return (
        <div className="about__boxes grid">

            <div className="about__box">
                <i className="about__icon icon-fire"></i>

                <div>
                    <h3 className="about__title">198</h3>
                    <span className="about__subtitle">Project Complete</span>
                </div>
            </div>

            <div className="about__box">
                <i className="about__icon icon-cup"></i>

                <div>
                    <h3 className="about__title">5621</h3>
                    <span className="about__subtitle">Cup of coffee</span>
                </div>
            </div>

            <div className="about__box">
                <i className="about__icon icon-people"></i>

                <div>
                    <h3 className="about__title">427</h3>
                    <span className="about__subtitle">Satisfied clients</span>
                </div>
            </div>

            <div className="about__box">
                <i className="about__icon icon-badge"></i>

                <div>
                    <h3 className="about__title">35</h3>
                    <span className="about__subtitle">Nominees Winner</span>
                </div>
            </div>

        </div>
    )
}

export default AboutBox