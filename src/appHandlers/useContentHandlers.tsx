import { useEffect } from "react";

interface UseContentHandlersProps {
  togglePanel: () => void;
  toggleRightPanel: () => void;
}

export const useContentHandlers = ({
  togglePanel,
  toggleRightPanel,
}: UseContentHandlersProps) => {
  const isMac = /Mac|iPod|iPhone|iPad/.test(navigator.platform);
  const commandKey = isMac ? "Ctrl + Shift" : "Ctrl + Shift";

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.shiftKey && event.key === "ArrowLeft") {
        event.preventDefault();
        togglePanel();
      } else if (
        event.ctrlKey &&
        event.shiftKey &&
        event.key === "ArrowRight"
      ) {
        event.preventDefault();
        toggleRightPanel();
      }
    };

    window.addEventListener("keydown", handleKeydown);
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [togglePanel, toggleRightPanel]);

  return { commandKey };
};
