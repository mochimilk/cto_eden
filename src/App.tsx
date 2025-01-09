import * as React from "react";
import { Body1, Tag } from "@fluentui/react-components";
import { useAppHooks } from "./Hooks/useAppHooks.tsx";
import Header from "./Modules/Header.tsx"; // Import Header
import "./App.css";
import "./Modules/css/Panels.css";
import TriPanelLayout from "./Templates/TriPanelLayout.tsx";
import LeftPanelLayout from "./Templates/LeftPanelLayout.tsx";
import RightPanelLayout from "./Templates/RightPanelLayout.tsx";

type AppProps = {
  isDarkMode: boolean;
  toggleTheme: () => void;
};

const App: React.FC<AppProps> = ({ isDarkMode, toggleTheme }) => {
  const { showHotkeyOverlay, modifierKey } = useAppHooks();

  return (
    <div className="app-container">
      {/* Move Header into App */}
      <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />

      {/* Main Layout */}
      <TriPanelLayout />

      {/* Hotkey Overlay */}
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
