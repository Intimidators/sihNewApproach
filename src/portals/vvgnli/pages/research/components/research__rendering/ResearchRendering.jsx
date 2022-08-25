import React, { useContext } from "react";
import { gData } from "../../../../../../App";
import ResearchMainContent from "../research__main__content/ResearchMainContent";

import "./researchRendering.css";

const ResearchRendering = () => {
  let my__data__from__vvgnli__research__submenu = useContext(gData);

  return (
    <>
      <div className="research__rendering">
        <div className="research__rendering__container">
          {my__data__from__vvgnli__research__submenu.vvgnli_research_submenu_state ===
          "research" ? (
            <ResearchMainContent />
          ) : null}
        </div>
      </div>
    </>
  );
};

export default ResearchRendering;
