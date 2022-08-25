import React from 'react'
import HomeBanner from './components/home__banner/HomeBanner'
import Slider from './components/slider/Slider'

import './home.css'

const Home = () => {
  return (
    <>
        <div className="home">
            <div className="home__container">
                <HomeBanner />
                <Slider />
            </div>
        </div>
    </>
  )
}

export default Home