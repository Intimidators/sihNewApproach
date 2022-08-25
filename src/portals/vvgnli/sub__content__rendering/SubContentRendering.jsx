import React, { useContext } from 'react'

import { gData } from '../../../App'


import DirectorGeneralDesk from '../pages/about_us/components/director__general__desk/DirectorGeneralDesk'
import GoverningBodies from '../pages/about_us/components/governing__bodies/GoverningBodies'
import History from '../pages/about_us/components/history/History'
import Infrastructure from '../pages/about_us/components/infrastructure/Infrastructure'
import MainContentAboutUs from '../pages/about_us/components/main__content__about__us/MainContentAboutUs'
import Networking from '../pages/about_us/components/networking/Networking'
import VisionAndMission from '../pages/about_us/components/vision__and__mission/VisionAndMission'
import WhosWho from '../pages/about_us/components/whos__who/WhosWho'
import Research from '../pages/research/Research'



import './subContentRendering.css'



const SubContentRendering = () => {

    let my__data__from__vvgnli__about_us__submenu = useContext(gData)


    return (
        <>
            <div className="sub__content__rendering">
                <div className="sub__content__rendering__container">
                    {my__data__from__vvgnli__about_us__submenu.vvgnli_about_submenu_state === "about_us" ? <MainContentAboutUs /> : null}
                    {my__data__from__vvgnli__about_us__submenu.vvgnli_about_submenu_state === "director_general" ? <DirectorGeneralDesk /> : null}
                    {my__data__from__vvgnli__about_us__submenu.vvgnli_about_submenu_state === "vision_and_mission" ? <VisionAndMission /> : null}
                    {my__data__from__vvgnli__about_us__submenu.vvgnli_about_submenu_state === "history" ? <History /> : null}
                    {my__data__from__vvgnli__about_us__submenu.vvgnli_about_submenu_state === "governing_bodies" ? <GoverningBodies /> : null}
                    {my__data__from__vvgnli__about_us__submenu.vvgnli_about_submenu_state === "infrastructure" ? <Infrastructure /> : null}
                    {my__data__from__vvgnli__about_us__submenu.vvgnli_about_submenu_state === "networking" ? <Networking /> : null}
                    {my__data__from__vvgnli__about_us__submenu.vvgnli_about_submenu_state === "whos_who" ? <WhosWho /> : null}
                </div>
            </div>
        </>
    )
}

export default SubContentRendering