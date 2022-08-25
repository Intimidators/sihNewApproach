import React from 'react'
import FooterVvgnli from '../../../../footer__vvgnli/FooterVvgnli'

import './mainContentAboutUs.css'

const MainContentAboutUs = () => {
  return (
    <>
      <div className="main__content__about__us">
        <div className="main__content__about__us__container">
          <section className="about__us">
            <h1>About Us</h1>
            <hr className="line" />
            <p>
              V.V. Giri National Labour Institute (VVGNLI), an autonomous body of the Ministry of Labour and Employment, Government of India, set up in July 1974, is a premier Institute of Labour Research, Training and Education. Since its inception, the Institute has endeavoured through research, training and publications to reach all those who are concerned with various aspects of labour, both in the organised and unorganised sectors. The focus of such endeavours has been the transfer of academic insight and understanding related to all the aspects of labour for application to policy formulation, legislation and action to ensure a just and proper place for labour in an egalitarian and democratic society.
            </p>
          </section>
          <hr className="light__line" />
          <section className="aims__and__objectives">
            <h3>Aims and Objectives</h3>

            <ul>
              <li>
                The Memorandum of Association spells out clearly a wide range of activities that are essential to fulfil the objectives of the Institute. The main objectives of the Institute are:
              </li>
              <li>
                To undertake and assist in organising training and education programmes, seminars and workshops;
              </li>
              <li>
                To undertake, aid, promote and co-ordinate research on its own or in collaboration with other agencies both at national and international levels;
              </li>
              <li>
                To establish wings for:
                <ul>
                  <li>education, training and orientation;</li>
                  <li>research including action-research;</li>
                  <li>consultancy; and</li>
                  <li>publication and such other activities as may be necessary to achieve the objectives of the Institute.</li>
                </ul>
              </li>
              <li>
                To analyse specific problems that are encountered in the planning and implementation of labour and allied programmes and to suggest remedial measures;
              </li>
              <li>
                To establish and maintain library and information services and collaborate with other institutions and agencies in India and abroad which have similar objectives.
              </li>

            </ul>
          </section>
          <FooterVvgnli />
        </div>
      </div>
    </>
  )
}

export default MainContentAboutUs