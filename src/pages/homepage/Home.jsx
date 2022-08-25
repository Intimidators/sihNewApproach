import React from 'react'
import NavbarComponent from '../../component/Navbar'
import VvgnliHomePageSideNavbar from '../../component/VvgnliHomePageSideNavbar'



const Home = () => {
  return (
    <>
        <div className="home">
            <div className="home__container">
                <NavbarComponent />
                <div className="home__page__main__content">
                  <div className="home__page__main__content__container">
                    <div className="home__page__side__navbar">
                      <VvgnliHomePageSideNavbar />
                    </div>
                    <div className="home__page__rendering__container">

                    </div>
                  </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home