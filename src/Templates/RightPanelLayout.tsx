import * as React from "react";
import Content from "../Modules/Content.tsx";
import PanelRight from "../Modules/PanelRight.tsx";

import { useAppHooks } from "../Hooks/useAppHooks.tsx";

const RightPanelLayout: React.FC = () => {
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
      {/*📌 Below is the setup for Content.
       ***To populate its contents, go to ./src/Modules/Content.tsx */}

      <div className="contentContainer" style={{ flexGrow: 1 }}>
        <Content
          isPanelOpen={false} // Left toggle hidden
          togglePanel={undefined} // Pass undefined to hide left toggle
          isRightPanelOpen={isRightPanelOpen}
          toggleRightPanel={toggleRightPanel} // Right toggle is active
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

export default RightPanelLayout;
