import { useEffect, useCallback, useState } from "react";

interface UseHeaderHandlersProps {
  toggleTheme: () => void;
  isDarkMode: boolean;
}

export const useHeaderHandlers = ({ toggleTheme, isDarkMode }: UseHeaderHandlersProps) => {
  const [shortcutLabel, setShortcutLabel] = useState("Ctrl+D");

  const handleKeyPress = useCallback(
    (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === "d") {
        toggleTheme();
        event.preventDefault(); // Prevent browser default actions
      }
    },
    [toggleTheme]
  );

  useEffect(() => {
    const isMac = navigator.platform.toLowerCase().includes("mac");
    setShortcutLabel(isMac ? "⌘+D" : "Ctrl+D");

    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  return {
    shortcutLabel,
  };
};
