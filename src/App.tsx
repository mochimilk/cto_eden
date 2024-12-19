import * as React from "react";
import Content from './Modules/Content.tsx';
import PanelRight from './Modules/PanelRight.tsx';
import { Button } from '@fluentui/react-components';
import {
  PanelLeftContractFilled,
  PanelLeftContractRegular,
  PanelLeftExpandFilled,
  PanelLeftExpandRegular,
  bundleIcon
} from "@fluentui/react-icons";
import './App.css';

// Bundle the icons
const PanelLeftContract = bundleIcon(PanelLeftContractFilled, PanelLeftContractRegular);
const PanelLeftExpand = bundleIcon(PanelLeftExpandFilled, PanelLeftExpandRegular);

const App: React.FC = () => {
  const [panelWidth, setPanelWidth] = React.useState(325); // Default width
  const [isPanelOpen, setIsPanelOpen] = React.useState(true);
  const [isResizing, setIsResizing] = React.useState(false);

  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsResizing(true);
    e.preventDefault();
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isResizing) {
      const newWidth = Math.min(Math.max(e.clientX, 325), 450);
      setPanelWidth(newWidth);
    }
  };

  const handleMouseUp = () => {
    setIsResizing(false);
  };

  React.useEffect(() => {
    if (isResizing) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isResizing]);

  return (
    <div className="app-container">
      <Button
        className="toggle-button"
        onClick={togglePanel}
        icon={isPanelOpen ? <PanelLeftContract /> : <PanelLeftExpand />}
        appearance="subtle"
      >
      </Button>
      <div className="layout">
        {isPanelOpen && (
          <div
            className="panelLeft"
            style={{ width: `${panelWidth}px` }}
          >
            <div className="resize-handle" onMouseDown={handleMouseDown} />
          </div>
        )}
        <div
          className="content"
          style={{ flex: isPanelOpen ? `1 1 calc(100% - ${panelWidth}px)` : '1 1 100%' }}
        >
          <Content />
        </div>
        <PanelRight />
      </div>
    </div>
  );
};

export default App;
