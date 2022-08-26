import React from "react";
import { useSelector } from "react-redux";
import SubContentRendering from "../../sub__content__rendering/SubContentRendering";

import "./about.css";
import AboutUsSubmenu from "./components/about__us__submenu/AboutUsSubmenu";
const About = () => {
  const { state } = useSelector((state) => state.vvgnli);
  return (
    <>
      {state === "vvgnli" ? (
        <div className="about">
          <div className="about__container">
            <AboutUsSubmenu />
            <SubContentRendering />
          </div>
        </div>
      ) : state === "gujrat" ? (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItem: "center",
            fontSize: "1.2rem",
            padding: "3rem",
          }}
        >
          <h1 style={{ textTransform: "capitalize" }}>About Us {state}</h1>
          <div>
            <hr />
            <p>
              Mahatma Gandhi Labour Institute (MGLI) was established on 15th
              September, 1979 by the Government of Gujarat as an autonomous
              society under the Societies Registration Act, 1860 to provide for
              education, training, study and research in labour and related
              subjects in furtherance of the policy of the Government to promote
              harmonious industrial relations and social justice. The institute
              takes a comprehensive view of Labour and aims at serving the cause
              of labour including agricultural labour, women and child labour,
              self employed, unorganised urban and rural labour besides
              organised labour in the Industrial, Commercial, Governmental cheap
              pharmacy without a prescription and service sectors. The principal
              means of action are Research, Training, Education and
              Dissemination of Information through seminars / workshops /
              colloquium etc.
            </p>
          </div>
          <div>
            <ul>
              <li>History</li>
              <li>Vision & Mission</li>
              <li>Objectives</li>
              <li>Constitution</li>
              <li>Activities</li>
              <li>Awards & Achievements</li>
              <li>Organisation Chart</li>
              <li>Board of Directors</li>
              <li>MGLI Donors</li>
              <li>How to Reach</li>
            </ul>
          </div>
        </div>
      ) : state === "kerala" ? (
        <>
          <div
            style={{
              height: "100%",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItem: "center",
              fontSize: "1.2rem",
              padding: "3rem",
            }}
          >
            <h1 style={{ textTransform: "capitalize" }}>About Us {state}</h1>
            <div>
              <hr />
              <p>
                The Kerala Institute of Labor and Employment (KILE) was
                established in 1978 under the Kerala State Department under the
                Travancore-Cochin Sahitya Chilivi Dharma Sanghas Registration
                Act, 1955. This institute started its activities with the aim of
                study and research in the field of labor and organizes training
                programs, workshops and seminars for workers, trade union
                representatives, employers' representatives and officials of
                institutions under the Department of Employment and Skills.
                Also, conducts research and publications on topics of current
                importance in the field of employment.
              </p>
            </div>
          </div>
        </>
      ) : state === "odisha" ? (
        <>
          <div
            style={{
              height: "100%",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItem: "center",
              fontSize: "1.2rem",
              padding: "3rem",
            }}
          >
            <h1 style={{ textTransform: "capitalize" }}>About Us {state}</h1>
            <div>
              <hr />
              <p>
                State Labour Institute, Odisha is an autonomous body of Govt. of
                Odisha. It is functioning under Labour & ESI Department, Govt.
                of Odisha.
              </p>
              <p>Rural Labour Training Camps for the un-organised rural labour
                  including bidi, construction, migrant and forest workers in
                  rural areas and any other category that may be specified from
                  time to time.</p>
              <p>Functions and Course contents of the Institute:</p>
              <ul>
                <li>Training</li>
                <li>Labour Research</li>
                <li>Publications</li>
              </ul>
            </div>
            {/* <div>
              <h3>Training:</h3>
              <h4>Category-A: Training for rural and un-organised labour:</h4>
              <ul>
                <li>
                  Rural Labour Training Camps for the un-organised rural labour
                  including bidi, construction, migrant and forest workers in
                  rural areas and any other category that may be specified from
                  time to time.
                </li>
                <li>
                  Vocational guidance for Workers’ children and women labour.
                </li>
                <li>
                  Informal education for workers and their family members.
                </li>
              </ul>
              <h4>
                Category-B: Training for factory Managers, Trade Union Leaders:
              </h4>
              <ul>
                <li>
                  Training on
                  <ul>
                    <li>
                      Labour statistics including submission of returns under
                      various labour laws
                    </li>
                    <li>Industrial safety, Pollution Control and Hygiene</li>
                    <li>
                      Workers’ Participation in the management of Industry
                    </li>
                    <li>Labour leadership and trade unionism</li>
                    <li>Managing industrial conflicts</li>
                  </ul>
                </li>
              </ul>
              <h4>
                Category-C: Refreshers Course and training programme Officers of
                the Directorates of Labour, Employment and Factories & Boilers.
              </h4>
              <h3>Labour Research:</h3>
              <p>Institute shall conduct:</p>
              <ul>
                <li>
                  Socio-economic studies in the organised and unorganised
                  sectors.
                </li>
                <li>Research/case studies on Industrial Relations.</li>
                <li>Labour seminars and workshops</li>
                <li>
                  Survey and Evaluation studies on the impact of Labour Polices
                  and programmes of the Government pronounced from time to time.
                </li>
              </ul>
              <h3>Publications:</h3>
              <p>The Institute may bring out</p>
              <ul>
                <li>
                  Bulletins on legal decision on labour matters and such other
                  relevant matters.
                </li>
                <li>
                  Guide books for workers, for factory managers, Government
                  Officers, Trade Union Leaders, Officers of the Labour &
                  Employment and Factories and Boilers Directorates.
                </li>
              </ul>
            </div> */}
          </div>
        </>
      ) : null}
    </>
  );
};

export default About;
