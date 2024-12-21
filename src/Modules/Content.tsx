import * as React from "react";
import "../App.css";
import {
  Body1Strong,
  Button,
  Tooltip,
  Toolbar,
  ToolbarButton,
  ToolbarDivider,
  Menu,
  MenuTrigger,
  MenuPopover,
  MenuList,
  MenuItem,
} from "@fluentui/react-components";
import {
  MoreHorizontalRegular,
  PanelLeftContractFilled,
  PanelLeftContractRegular,
  PanelLeftExpandFilled,
  PanelLeftExpandRegular,
  PanelRightContractFilled,
  PanelRightContractRegular,
  PanelRightExpandFilled,
  PanelRightExpandRegular,
  SearchRegular,
  SearchFilled,
  bundleIcon,
  BranchRequestRegular,
  CubeRegular,
  BranchRegular,
} from "@fluentui/react-icons";
import ReactMarkdown from "react-markdown";
import markdownFile from "../Posts/GettingStarted.md";

// Bundle icons for panelLeft
const PanelLeftContract = bundleIcon(
  PanelLeftContractFilled,
  PanelLeftContractRegular
);
const PanelLeftExpand = bundleIcon(
  PanelLeftExpandFilled,
  PanelLeftExpandRegular
);

// Bundle icons for panelRight
const PanelRightContract = bundleIcon(
  PanelRightContractFilled,
  PanelRightContractRegular
);
const PanelRightExpand = bundleIcon(
  PanelRightExpandFilled,
  PanelRightExpandRegular
);

// Bundle icons for Search
const Search = bundleIcon(SearchFilled, SearchRegular);

interface ContentProps {
  isPanelOpen: boolean;
  togglePanel: () => void;
  isRightPanelOpen: boolean;
  toggleRightPanel: () => void;
}

const Content: React.FC<ContentProps> = ({
  isPanelOpen,
  togglePanel,
  isRightPanelOpen,
  toggleRightPanel,
}) => {
  const isMac = /Mac|iPod|iPhone|iPad/.test(navigator.platform);
  const commandKey = isMac ? "⌘" : "Ctrl";

  // Add keyboard event listeners
  React.useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.metaKey && event.shiftKey && event.key === ",") {
        event.preventDefault();
        togglePanel();
      } else if (event.metaKey && event.shiftKey && event.key === ".") {
        event.preventDefault();
        toggleRightPanel();
      }
    };

    window.addEventListener("keydown", handleKeydown);
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [togglePanel, toggleRightPanel]);

  return (
    <div className="contentContainer">
      <div className="panelHeader">
        <div className="headerTitleGroup">
          <Tooltip content={`${commandKey} + Shift + <`} relationship="label">
            <Button
              icon={isPanelOpen ? <PanelLeftContract /> : <PanelLeftExpand />}
              onClick={togglePanel}
              appearance="subtle"
            />
          </Tooltip>
          <Body1Strong style={{ color: "var(--colorNeutralForeground2)" }}>
            Content
          </Body1Strong>
        </div>

        <Toolbar style={{ width: "100%" }}>
          <ToolbarDivider />
          <ToolbarButton
            aria-label="Increase Font Size"
            icon={<BranchRequestRegular />}
          />
          <ToolbarButton icon={<BranchRegular />} />
          <ToolbarButton icon={<CubeRegular />} />
        </Toolbar>

        <Toolbar>
          <ToolbarButton icon={<Search />} />
          <Menu>
            <MenuTrigger>
              <ToolbarButton
                aria-label="More"
                icon={<MoreHorizontalRegular />}
              />
            </MenuTrigger>
            <MenuPopover>
              <MenuList>
                <MenuItem>New </MenuItem>
                <MenuItem>New Window</MenuItem>
                <MenuItem disabled>Open File</MenuItem>
                <MenuItem>Open Folder</MenuItem>
              </MenuList>
            </MenuPopover>
          </Menu>
          <ToolbarDivider />
          <Tooltip content={`${commandKey} + Shift + >`} relationship="label">
            <ToolbarButton
              icon={
                isRightPanelOpen ? <PanelRightContract /> : <PanelRightExpand />
              }
              onClick={toggleRightPanel}
              appearance="subtle"
            />
          </Tooltip>
        </Toolbar>
      </div>

      <div className="content">
      <ReactMarkdown>{markdownFile}</ReactMarkdown>;
      </div>
    </div>
  );
};

export default Content;
