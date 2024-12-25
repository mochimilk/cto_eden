////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// DEV NOTES:                                                                                                                     //
// 1) To populate your app, go to ./src/Modules/ and build inside the relevant container.                                         //
// 2) All handlers live in ./src/appHandlers/userAppHandlers. You can use this file to adjust things like default panel width of  //
//    left and right panels.                                                                                                      //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import * as React from "react";

import { Body1, Tag } from "@fluentui/react-components";
import { useAppHooks } from "./Hooks/useAppHooks.tsx";
import "./App.css";
import TriPanelLayout from "./Templates/TriPanelLayout.tsx";
import LeftPanelLayout from "./Templates/LeftPanelLayout.tsx";
import RightPanelLayout from "./Templates/RightPanelLayout.tsx";

const App: React.FC = () => {
  const { showHotkeyOverlay, modifierKey } = useAppHooks();

  return (
    <div className="app-container">
      <RightPanelLayout />

      {/*📌 Below is the setup for hotkey-overlay.
       ***You can edit it straight from here */}

      {showHotkeyOverlay && (
        <div className="hotkey-overlay">
          <Body1>System</Body1>
          <div>
            <Tag appearance="outline">{modifierKey}</Tag> +{" "}
            <Tag appearance="outline">D</Tag> : Theme
          </div>
          <Body1>View</Body1>
          <div>
            <Tag appearance="outline">{modifierKey}</Tag> +{" "}
            <Tag appearance="outline">shift</Tag> +{" "}
            <Tag appearance="outline">←</Tag> : Left panel
          </div>
          <div>
            <Tag appearance="outline">{modifierKey}</Tag> +{" "}
            <Tag appearance="outline">shift</Tag> +{" "}
            <Tag appearance="outline">→</Tag> : Right panel
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
