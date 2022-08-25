import React from 'react'
import ResearchRendering from './components/research__rendering/ResearchRendering'
import ResearchSubmenu from './components/reserach__submenu/ResearchSubmenu'

import SubContentRendering from '../../sub__content__rendering/SubContentRendering'

import './research.css'

const Research = () => {
  return (
    <>
        <div className="research">
            <div className="research__container">
                <ResearchSubmenu />
                <ResearchRendering />
            </div>
        </div>
    </>
  )
}

export default Research