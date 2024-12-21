// useAppHandlers.tsx
import { useState, useEffect } from "react";

export const useAppHandlers = () => {
  // State for Left Panel
  const [isPanelOpen, setIsPanelOpen] = useState(true);
  const [panelWidth, setPanelWidth] = useState(260);
  const [isResizingLeft, setIsResizingLeft] = useState(false);

  // State for Right Panel
  const [isRightPanelOpen, setIsRightPanelOpen] = useState(true);
  const [rightPanelWidth, setRightPanelWidth] = useState(500);
  const [isResizingRight, setIsResizingRight] = useState(false);

  // State for Hotkey Overlay
  const [showHotkeyOverlay, setShowHotkeyOverlay] = useState(false);

  // Determine the OS modifier key
  const [modifierKey, setModifierKey] = useState("Ctrl");

  useEffect(() => {
    const isMac = navigator.platform.toLowerCase().includes("mac");
    setModifierKey(isMac ? "⌘" : "Ctrl");
  }, []);

  // Left Panel Toggle
  const togglePanel = () => setIsPanelOpen(!isPanelOpen);

  // Right Panel Toggle
  const toggleRightPanel = () => setIsRightPanelOpen(!isRightPanelOpen);

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

  const handleMouseUpLeft = () => setIsResizingLeft(false);

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

  const handleMouseUpRight = () => setIsResizingRight(false);

  useEffect(() => {
    if (isResizingLeft) {
      window.addEventListener("mousemove", handleMouseMoveLeft);
      window.addEventListener("mouseup", handleMouseUpLeft);
    } else if (isResizingRight) {
      window.addEventListener("mousemove", handleMouseMoveRight);
      window.addEventListener("mouseup", handleMouseUpRight);
    } else {
      window.removeEventListener("mousemove", handleMouseMoveLeft);
      window.removeEventListener("mouseup", handleMouseUpLeft);
      window.removeEventListener("mousemove", handleMouseMoveRight);
      window.removeEventListener("mouseup", handleMouseUpRight);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMoveLeft);
      window.removeEventListener("mouseup", handleMouseUpLeft);
      window.removeEventListener("mousemove", handleMouseMoveRight);
      window.removeEventListener("mouseup", handleMouseUpRight);
    };
  }, [isResizingLeft, isResizingRight]);

  // Hotkey Overlay Handlers
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Control" || event.key === "Meta") {
      setShowHotkeyOverlay(true);
    }
  };

  const handleKeyUp = (event: KeyboardEvent) => {
    if (event.key === "Control" || event.key === "Meta") {
      setShowHotkeyOverlay(false);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return {
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
  };
};
