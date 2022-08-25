import React from "react";

import './visionAndMission.css'

const VisionAndMission = () => {
  return (
    <>
      <div className="director__general__desk vision__and__mission">
        <div className="director__general__desk__container vision__and__mission__container">
          <div className="vision__and__mission__heading__container">
            <h1>Vision & Mission</h1>
            <hr />
          </div>
          <div className="director__general__desk__heading__container vision__and__mission__vision__container">
            <div className="vision__and__mission__subheading__container">
              <h3>Vision</h3>
            </div>
            <div className="director__general__desk__para vision__and__mission__vision__container__para vision__and__mission__vision__container__para1">
              <p>
                “A globally reputed institution and centre of excellence in
                labour research and training committed to enhancing the quality
                of work and work relations”
              </p>
            </div>
          </div>
          <div className="vision__and__mission__mission__container">
            <div className="vision__and__mission__subheading__container">
              <h3>Mission</h3>
            </div>
            <div className="director__general__desk__para vision__and__mission__mission__container__para vision__and__mission__mission__container__para1">
              <p>
                Bring Labour and Labour Relations as the Central Feature in
                Development Agenda through:
              </p>
              <ul>
                <li>
                  Addressing issues of transformations in the world of work;
                </li>
                <li>
                  Disseminating knowledge, skills and attitudes to major social
                  partners and stakeholders concerned with labour and
                  employment;
                </li>
                <li>
                  Undertaking research studies and training interventions of
                  world class standards; and
                </li>
                <li>
                  Building understanding and partnerships with globally
                  respected institutions involved with labour.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VisionAndMission;
