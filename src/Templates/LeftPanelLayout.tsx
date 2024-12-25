import * as React from "react";
import Content from "../Modules/Content.tsx";
import PanelLeft from "../Modules/PanelLeft.tsx";

import { useAppHooks } from "../Hooks/useAppHooks.tsx";

const LeftPanelLayout: React.FC = () => {
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
          togglePanel={togglePanel} // Left toggle is active
          isRightPanelOpen={false} // Right toggle hidden
          toggleRightPanel={undefined} // Pass undefined to hide right toggle
        />
      </div>
    </div>
  );
};

export default LeftPanelLayout;
