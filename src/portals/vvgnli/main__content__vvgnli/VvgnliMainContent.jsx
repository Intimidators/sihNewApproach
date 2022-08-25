import React, { useContext } from 'react'
import { gData } from '../../../App'

import About from '../pages/about_us/About'
import Home from '../pages/home/Home'
import Research from '../pages/research/Research'
import Training from '../pages/training/Training'
import Publication from '../pages/publication/Publication'
import Library from '../pages/library/Library'
import People from '../pages/people/People'
import OnlineTraining from '../pages/online_training/OnlineTraining'
import EResources from '../pages/e_resources/EResource'
import Mou from '../pages/mou/Mou'

import './vvgnliMainContent.css'


const VvgnliMainContent = () => {

  const myGlobalDataVvgnliMainContent = useContext(gData)

  return (
    <>
            <div className="vvgnli__main__content">
                <div className="vvgnli__main__content__container">
                  {myGlobalDataVvgnliMainContent.vvgnli_main_menu_state === 'home'?<Home />:''}
                  {myGlobalDataVvgnliMainContent.vvgnli_main_menu_state === 'about_us'?<About />:''}
                  {myGlobalDataVvgnliMainContent.vvgnli_main_menu_state === 'research'?<Research />:''}
                  {myGlobalDataVvgnliMainContent.vvgnli_main_menu_state === 'training'?<Training />:''}
                  {myGlobalDataVvgnliMainContent.vvgnli_main_menu_state === 'publication'?<Publication />:''}
                  {myGlobalDataVvgnliMainContent.vvgnli_main_menu_state === 'library'?<Library />:''}
                  {myGlobalDataVvgnliMainContent.vvgnli_main_menu_state === 'people'?<People />:''}
                  {myGlobalDataVvgnliMainContent.vvgnli_main_menu_state === 'online_training'?<OnlineTraining />:''}
                  {myGlobalDataVvgnliMainContent.vvgnli_main_menu_state === 'e_resources'?<EResources />:''}
                  {myGlobalDataVvgnliMainContent.vvgnli_main_menu_state === 'mou'?<Mou />:''}
                </div>
            </div>
        </>
  )
}

export default VvgnliMainContent