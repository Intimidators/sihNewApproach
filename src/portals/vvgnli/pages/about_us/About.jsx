import React from 'react'
import SubContentRendering from '../../sub__content__rendering/SubContentRendering'

import './about.css'
import AboutUsSubmenu from './components/about__us__submenu/AboutUsSubmenu'

const About = () => {
  return (
    <>
        <div className="about">
            <div className="about__container">
                <AboutUsSubmenu />
                <SubContentRendering />
            </div>
        </div>
    </>
  )
}

export default About