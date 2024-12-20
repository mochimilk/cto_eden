import * as React from "react";
import Content from './Modules/Content.tsx';
import PanelRight from './Modules/PanelRight.tsx';
import PanelLeft from './Modules/PanelLeft.tsx';
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

// Bundle the icons for the left panel (unchanged)
const PanelLeftContract = bundleIcon(PanelLeftContractFilled, PanelLeftContractRegular);
const PanelLeftExpand = bundleIcon(PanelLeftExpandFilled, PanelLeftExpandRegular);

// Bundle the icons for the right panel
const PanelRightContract = bundleIcon(PanelLeftContractFilled, PanelLeftContractRegular); // Placeholder for right panel contract icon
const PanelRightExpand = bundleIcon(PanelLeftExpandFilled, PanelLeftExpandRegular); // Placeholder for right panel expand icon

const App: React.FC = () => {
  const [panelWidth, setPanelWidth] = React.useState(260); // Default width for left panel
  const [isPanelOpen, setIsPanelOpen] = React.useState(true); // State for left panel
  const [isResizingLeft, setIsResizingLeft] = React.useState(false); // Resizing state for left panel

  const [isRightPanelOpen, setIsRightPanelOpen] = React.useState(true); // State for right panel
  const [rightPanelWidth, setRightPanelWidth] = React.useState(500); // Default width for right panel
  const [isResizingRight, setIsResizingRight] = React.useState(false); // Resizing state for right panel

  // Left panel toggle
  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
  };

  // Right panel toggle
  const toggleRightPanel = () => {
    setIsRightPanelOpen(!isRightPanelOpen);
  };

  // Left panel resize handlers
  const handleMouseDownLeft = (e: React.MouseEvent) => {
    setIsResizingLeft(true);
    e.preventDefault();
  };

  const handleMouseMoveLeft = (e: MouseEvent) => {
    if (isResizingLeft) {
      const newWidth = Math.min(Math.max(e.clientX, 192), 400);
      setPanelWidth(newWidth);
    }
  };

  const handleMouseUpLeft = () => {
    setIsResizingLeft(false);
  };

  // Right panel resize handlers
  const handleMouseDownRight = (e: React.MouseEvent) => {
    setIsResizingRight(true);
    e.preventDefault();
  };

  const handleMouseMoveRight = (e: MouseEvent) => {
    if (isResizingRight) {
      const newWidth = Math.min(
        Math.max(window.innerWidth - e.clientX, 260),
        500
      );
      setRightPanelWidth(newWidth);
    }
  };

  const handleMouseUpRight = () => {
    setIsResizingRight(false);
  };

  React.useEffect(() => {
    if (isResizingLeft) {
      window.addEventListener('mousemove', handleMouseMoveLeft);
      window.addEventListener('mouseup', handleMouseUpLeft);
    } else if (isResizingRight) {
      window.addEventListener('mousemove', handleMouseMoveRight);
      window.addEventListener('mouseup', handleMouseUpRight);
    } else {
      window.removeEventListener('mousemove', handleMouseMoveLeft);
      window.removeEventListener('mouseup', handleMouseUpLeft);
      window.removeEventListener('mousemove', handleMouseMoveRight);
      window.removeEventListener('mouseup', handleMouseUpRight);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMoveLeft);
      window.removeEventListener('mouseup', handleMouseUpLeft);
      window.removeEventListener('mousemove', handleMouseMoveRight);
      window.removeEventListener('mouseup', handleMouseUpRight);
    };
  }, [isResizingLeft, isResizingRight]);

  return (
    <div className="app-container">
      {/* Left Panel Toggle Button */}
      <Tooltip content="Toggle Left Panel" relationship="label">
        <Button
          className="panelLeftToggle"
          onClick={togglePanel}
          icon={isPanelOpen ? <PanelLeftContract /> : <PanelLeftExpand />}
        />
      </Tooltip>
      {/* Right Panel Toggle Button */}
      <Tooltip content="Toggle Right Panel" relationship="label">
        <Button
          className="panelRightToggle"
          onClick={toggleRightPanel}
          icon={isRightPanelOpen ? <PanelRightExpand /> : <PanelRightContract />}
        />
      </Tooltip>
      <div className="layout">
        {/* Left Panel */}
        {isPanelOpen && (
          <div
            className="panelLeft"
            style={{ width: `${panelWidth}px` }}
          >
            <PanelLeft />
            <div
              className="resize-handle-left"
              onMouseDown={handleMouseDownLeft}
            />
          </div>
        )}

        {/* Content */}
        <div
          className="content"

        >
          <Content />
        </div>

        {/* Right Panel */}
        {isRightPanelOpen && (
          <div
            className="panelRight"
            style={{ width: `${rightPanelWidth}px` }}
          >
            <div
              className="resize-handle-right"
              onMouseDown={handleMouseDownRight}
            />
            <PanelRight />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
