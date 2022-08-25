import React from 'react'

import './footerVvgnli.css'

import logo1 from './asstes/data-gov.png'
import logo2 from './asstes/digital_india_logo_0.png'
import logo3 from './asstes/e-gazette.png'
import logo4 from './asstes/eci_0.png'
import logo5 from './asstes/epfo_2.png'
import logo6 from './asstes/esic.png'
import logo7 from './asstes/GOI.png'
import logo8 from './asstes/incredible-india.png'
import logo9 from './asstes/india-gov.png'
// import logo10 from './asstes/india-gov_0.png'
// import logo11 from './asstes/lion.png'
// import logo12 from './asstes/mygov.png'
// import logo13 from './asstes/myvisit-logo.png'
// import logo14 from './asstes/pg-portal.png'
// import logo15 from './asstes/pmnrf.png'
import photogallery from './asstes/photogallery.png'
import circulas from './asstes/circulas.png'
import tenders from './asstes/tenders.png'
import cmf from './asstes/cmf-logo.png'


const FooterVvgnli = () => {
    return (
        <>
            <div className="footer__vvgnli">
                <div className="footer__vvgnli__container">

                    <div className="quick__links">
                        <h3>QUICK LINKS</h3>
                        <div className="logos">
                            <div className="photo__gallery">
                                <img src={photogallery} alt="" srcset="" />
                                <h4>Photo Gallery</h4>
                            </div>
                            <div className="circulas">
                                <img src={circulas} alt="" />
                                <h4>Circulas</h4>
                            </div>
                            <div className="tenders">
                                <img src={tenders} alt="" />
                                <h4>Tenders</h4>
                            </div>
                        </div>
                    </div>

                    <div class="footer__slider">
                        <ul>
                            <li>
                                <img src={ logo1 } alt="" />
                            </li>
                            <li>
                                <img src={ logo2 } alt="" />
                            </li>
                            <li>
                                <img src={ logo3 } alt="" />
                            </li>
                            <li>
                                <img src={ logo4 } alt="" />
                            </li>
                            <li>
                                <img src={ logo5 } alt="" />
                            </li>
                            <li>
                                <img src={ logo6 } alt="" />
                            </li>
                            <li>
                                <img src={ logo7 } alt="" />
                            </li>
                            <li>
                                <img src={ logo8 } alt="" />
                            </li>
                            <li>
                                <img src={ logo9 } alt="" />
                            </li>
                        </ul>
                    </div>

                    <div className="footer__menu__links">
                        <ul>
                            <li>Disclaimer</li>
                            <li>Terms and conditions</li>
                            <li>Website policy</li>
                            <li>Help</li>
                            <li>Feedback</li>
                            <li>Contact Us</li>
                            <li>Web information </li>
                            <li>FAQ</li>
                            <li>RTI</li>
                            <li>Citizens Charter</li>
                        </ul>
                    </div>

                    <div className="copyright">
                        <img src={cmf} alt="" />
                        <div className="copyright__text">
                            <p> Website Content Managed by V. V. Giri National Labour Institute, Sector-24, Noida, UP, India </p>
                            <p>Designed, Developed and Hosted by <strong> National Informatics Centre( NIC )</strong> </p>
                            <p>Version: 7.x-1 & Release Date: 24 May 2021</p>
                            <p>Last Updated: 26 Apr 2022</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FooterVvgnli