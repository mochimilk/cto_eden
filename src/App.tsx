import * as React from "react";
import Content from "./Modules/Content.tsx";
import PanelRight from "./Modules/PanelRight.tsx";
import PanelLeft from "./Modules/PanelLeft.tsx";
import { Tag } from "@fluentui/react-components";
import { useAppHandlers } from "./appHandlers/useAppHandlers.tsx";
import "./App.css";

const App: React.FC = () => {
  const {
    isPanelOpen,
    panelWidth,
    togglePanel,
    handleMouseDownLeft,
    isRightPanelOpen,
    rightPanelWidth,
    toggleRightPanel,
    handleMouseDownRight,
    showHotkeyOverlay,
    modifierKey,
  } = useAppHandlers();

  return (
    <div className="app-container">
      <div className="layout" style={{ display: "flex" }}>
        {/* leftPanel */}
        {isPanelOpen && (
          <div className="panelLeft" style={{ width: `${panelWidth}px` }}>
            <PanelLeft />
            <div
              className="resize-handle-left"
              onMouseDown={handleMouseDownLeft}
            />
          </div>
        )}

        {/* content */}
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

        {/* right panel */}
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

      {/* hotkey overlay */}
      {showHotkeyOverlay && (
        <div className="hotkey-overlay">
          <div>
            <Tag appearance="outline">{modifierKey}</Tag> + <Tag appearance="outline">shift</Tag> + <Tag appearance="outline">&lt;</Tag> : Left panel
          </div>
          <div>



            <Tag appearance="outline">{modifierKey}</Tag> + <Tag appearance="outline">shift</Tag> + <Tag appearance="outline">&gt;</Tag> : Right panel
          </div>
        </div>
      )}
    </div>
  );
};

export default App;

// All handlers live in ./src/appHandlers/userAppHandlers. You can use this file to adjust things like default panel width.
