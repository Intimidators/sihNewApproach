import React, { useContext } from 'react'
import { gData } from '../../App'

import './mainRendering.css'

import Vvgnli from '../../portals/vvgnli/Vvgnli'
import SocialMedia from '../../portals/social_media/SocialMedia'
import Webinars from '../../portals/webinars/Webinars'
import ThemeLanguageSwitcher from '../theme_language_switcher/ThemeLanguageSwitcher'
import PortalsMenu from '../portals_menu/PortalsMenu'
import ResearchWork from '../../portals/research_work/ResearchWork'
import Dashboard from '../../pages/dashboard/Dashboard'


const MainRendering = () => {
  let myData = useContext(gData)
  return (
    <>
        <div className="main__rendering">
            <div className="main__rendering__container">
            {/* <ThemeLanguageSwitcher />
            <PortalsMenu /> */}
                {myData.state===1?<Vvgnli />:null}
                {myData.state===2?<SocialMedia />:null}
                {myData.state===3?<Webinars />:null}
                {myData.state===4? <ResearchWork />:null}
                {myData.state===7? <Dashboard />:null}
            </div>
        </div>
    </>
  )
}

export default MainRendering