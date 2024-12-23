import { useEffect, useCallback, useState } from "react";

interface headerHooksProps {
  toggleTheme: () => void;
  isDarkMode: boolean;
}

export const useHeaderHooks = ({ toggleTheme, isDarkMode }: headerHooksProps) => {
  const [shortcutLabel, setShortcutLabel] = useState("Ctrl+D");

  const handleKeyPress = useCallback(
    (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === "d") {
        toggleTheme();
        event.preventDefault(); // Prevent browser's default action (bookmarking)
        event.stopPropagation(); // Stop further propagation (just in case)
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
