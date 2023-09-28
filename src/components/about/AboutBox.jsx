import React from 'react'

function AboutBox() {
  return (
    <div className="about__boxes grid">
        <div className="about__box">
            <i className="about__icon icon-fire"></i>

            <div>
                <h3 className="about__title">10</h3>
                <span className="about__subtitle">Project completed</span>
            </div>
        </div>

        <div className="about__box">
            <i className="about__icon icon-people"></i>

            <div>
                <h3 className="about__title">5</h3>
                <span className="about__subtitle">Collaborations Completed</span>
            </div>
        </div>

        <div className="about__box">
            <i className="about__icon icon-user"></i>

            <div>
                <h3 className="about__title">4</h3>
                <span className="about__subtitle">Satisfied client</span>
            </div>
        </div>

        <div className="about__box">
            <i className="about__icon icon-badge"></i>

            <div>
                <h3 className="about__title">3</h3>
                <span className="about__subtitle">Presentation winners at Aptech</span>
            </div>
        </div>
    </div>
  )
}

export default AboutBox