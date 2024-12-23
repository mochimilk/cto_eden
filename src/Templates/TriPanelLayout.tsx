import * as React from "react";
import Content from "../Modules/Content.tsx";
import PanelRight from "../Modules/PanelRight.tsx";
import PanelLeft from "../Modules/PanelLeft.tsx";

import { useAppHooks } from "../Hooks/useAppHooks.tsx";

const TriPanelLayout: React.FC = () => {
  const {
    isPanelOpen,
    panelWidth,
    togglePanel,
    handleMouseDownLeft,
    isRightPanelOpen,
    rightPanelWidth,
    toggleRightPanel,
    handleMouseDownRight,
  } = useAppHooks();
  return (
    <div className="layout" style={{ display: "flex" }}>
      {/*📌 Below is the setup for panelLeft.
       ***To populate its contents, go to ./src/Modules/PanelLeft.tsx */}

      {isPanelOpen && (
        <div className="panelLeft" style={{ width: `${panelWidth}px` }}>
          <PanelLeft />
          <div
            className="resize-handle-left"
            onMouseDown={handleMouseDownLeft}
          />
        </div>
      )}

      {/*📌 Below is the setup for Content.
       ***To populate its contents, go to ./src/Modules/Content.tsx */}

      <div className="contentContainer" style={{ flexGrow: 1 }}>
        <Content
          isPanelOpen={isPanelOpen}
          togglePanel={togglePanel}
          panelWidth={panelWidth} //Typescript error; revisit later
          handleMouseDownLeft={handleMouseDownLeft}
          isRightPanelOpen={isRightPanelOpen}
          toggleRightPanel={toggleRightPanel}
          rightPanelWidth={rightPanelWidth}
          handleMouseDownRight={handleMouseDownRight}
        />
      </div>

      {/*📌 Below is the setup for panelRight.
       ***To populate its contents, go to ./src/Modules/PanelRight.tsx */}

      {isRightPanelOpen && (
        <div className="panelRight" style={{ width: `${rightPanelWidth}px` }}>
          <div
            className="resize-handle-right"
            onMouseDown={handleMouseDownRight}
          />
          <PanelRight />
        </div>
      )}
    </div>
  );
};

export default TriPanelLayout;
