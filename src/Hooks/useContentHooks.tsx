import { useEffect } from "react";

interface contentHooksProps {
  togglePanel: () => void;
  toggleRightPanel: () => void;
}

export const useContentHooks = ({
  togglePanel,
  toggleRightPanel,
}: contentHooksProps) => {
  const isMac = /Mac|iPod|iPhone|iPad/.test(navigator.platform);
  const commandKey = isMac ? "⌘ + Shift" : "Ctrl + Shift";

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      // Check for Ctrl (or Command on Mac) + Shift + Arrow Keys
      if ((event.ctrlKey || (isMac && event.metaKey)) && event.shiftKey) {
        if (event.key === "ArrowLeft") {
          event.preventDefault(); // Prevent browser's default action
          togglePanel();
        } else if (event.key === "ArrowRight") {
          event.preventDefault(); // Prevent browser's default action
          toggleRightPanel();
        }
      }
    };

    window.addEventListener("keydown", handleKeydown, { passive: false }); // Use non-passive listener
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [togglePanel, toggleRightPanel, isMac]);

  return { commandKey };
};
