import React from 'react'

import './homeBanner.css'

import logo from '../../assets/logo.png'
import logo2 from '../../assets/logo2.png'
import e_sharam from '../../assets/e-shram.png'
import azadi from '../../assets/azadi.jpg'

const HomeBanner = () => {
  return (
    <>
      <div className="home__banner">
        <div className="home__banner__container">
          <div className="banner__left__part">
            <img src={logo} alt="" />
            <img className='home__banner__logo2' src={logo2} alt="" />
            <div className="heading">
              <div className="hindi__heading">
                <h2>वी. वी. गिरि राष्ट्रीय श्रम संस्थान</h2>
                
              </div>
              <div className="english__heading">
                <h2>V. V. Giri National Labour Institute</h2>
              </div>
              <p>(An Autonomous Body of Ministry of Labour & Employment, Government of India)</p>
            </div>
          </div>
          <div className="banner__right__part">
            <img src={azadi} alt="" />
            <img src={e_sharam} alt="" />
          </div>

        </div>
      </div>
    </>
  )
}

export default HomeBanner