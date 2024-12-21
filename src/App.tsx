import * as React from "react";
import Content from './Modules/Content.tsx';
import PanelRight from './Modules/PanelRight.tsx';
import PanelLeft from './Modules/PanelLeft.tsx';
import './App.css';

const App: React.FC = () => {
  // State for Left Panel
  const [isPanelOpen, setIsPanelOpen] = React.useState(true);
  const [panelWidth, setPanelWidth] = React.useState(260); // Default width for Left Panel
  const [isResizingLeft, setIsResizingLeft] = React.useState(false);

  // State for Right Panel
  const [isRightPanelOpen, setIsRightPanelOpen] = React.useState(true);
  const [rightPanelWidth, setRightPanelWidth] = React.useState(500); // Default width for Right Panel
  const [isResizingRight, setIsResizingRight] = React.useState(false);

  // Left Panel Toggle
  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
  };

  // Right Panel Toggle
  const toggleRightPanel = () => {
    setIsRightPanelOpen(!isRightPanelOpen);
  };

  // Left Panel Resize Handlers
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

  // Right Panel Resize Handlers
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

  // Global Event Listeners for Resizing
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
      <div className="layout" style={{ display: 'flex' }}>
        {/* Left Panel */}
        {isPanelOpen && (
          <div
            className="panelLeft"
            style={{ width: `${panelWidth}px`, flexShrink: 0 }}
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
          className="contentContainer"
          style={{
            flexGrow: 1,
            maxWidth: `calc(100% - ${
              (isPanelOpen ? panelWidth : 0) +
              (isRightPanelOpen ? rightPanelWidth : 0)
            }px)`,
          }}
        >
          <Content
            isPanelOpen={isPanelOpen}
            togglePanel={togglePanel}
            panelWidth={panelWidth}
            handleMouseDownLeft={handleMouseDownLeft}
            isRightPanelOpen={isRightPanelOpen}
            toggleRightPanel={toggleRightPanel}
            rightPanelWidth={rightPanelWidth}
            handleMouseDownRight={handleMouseDownRight}
          />
        </div>

        {/* Right Panel */}
        {isRightPanelOpen && (
          <div
            className="panelRight"
            style={{ width: `${rightPanelWidth}px`, flexShrink: 0 }}
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