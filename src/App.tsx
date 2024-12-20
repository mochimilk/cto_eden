import * as React from "react";
import Content from './Modules/Content.tsx';
import PanelRight from './Modules/PanelRight.tsx';
import {  
  Tooltip, 
  Button 
} from '@fluentui/react-components';
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
  const [panelWidth, setPanelWidth] = React.useState(260); // Default width
  const [isPanelOpen, setIsPanelOpen] = React.useState(true);
  const [isResizing, setIsResizing] = React.useState(false);

  // Helper function to detect the platform
  const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;

  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsResizing(true);
    e.preventDefault();
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isResizing) {
      const newWidth = Math.min(Math.max(e.clientX, 260), 450);
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

  // Update the tooltip dynamically based on the OS
  const tooltipText = `${isMac ? 'Cmd' : 'Ctrl'} + Shift + <`;

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const isModifierPressed = isMac ? event.metaKey : event.ctrlKey;
      if (isModifierPressed && event.shiftKey && event.key === ',') {
        event.preventDefault(); // Prevent default browser behavior
        togglePanel();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMac, togglePanel]);

  return (
    <div className="app-container">
      <Tooltip content={tooltipText} relationship="label">
        <Button
          className="toggle-button"
          onClick={togglePanel}
          icon={isPanelOpen ? <PanelLeftContract /> : <PanelLeftExpand />}
        >
        </Button>
      </Tooltip>
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
