import React from "react";
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
  BranchRequestRegular,
  CubeRegular,
  BranchRegular,
} from "@fluentui/react-icons";
import {
  PanelLeftContract,
  PanelLeftExpand,
  PanelRightContract,
  PanelRightExpand,
  Search,
} from "../bundleIcons.tsx";
import { useContentHooks } from "../Hooks/useContentHooks.tsx";

interface ContentProps {
  isPanelOpen: boolean;
  togglePanel?: () => void; // Optional to conditionally render left toggle
  isRightPanelOpen: boolean;
  toggleRightPanel?: () => void; // Optional to conditionally render right toggle
}

const Content: React.FC<ContentProps> = ({
  isPanelOpen,
  togglePanel,
  isRightPanelOpen,
  toggleRightPanel,
}) => {
  const { commandKey } = useContentHooks({ togglePanel, toggleRightPanel });

  return (
    <div className="contentContainer">

      {/*📌 Below is the setup for the content toolbar.
      ***You may remove this if your app doesn't need a toolbar. */}

      <div className="panelHeader">
        <div className="headerTitleGroup">
          {togglePanel && ( // Hide left toggle if togglePanel is not provided
            <Tooltip content={`${commandKey} + ←`} relationship="label">
              <Button
                icon={isPanelOpen ? <PanelLeftContract /> : <PanelLeftExpand />}
                onClick={togglePanel}
                appearance="subtle"
              />
            </Tooltip>
          )}
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
          {toggleRightPanel && ( // Hide right toggle if toggleRightPanel is not provided
            <Tooltip content={`${commandKey} + →`} relationship="label">
              <ToolbarButton
                icon={
                  isRightPanelOpen ? <PanelRightContract /> : <PanelRightExpand />
                }
                onClick={toggleRightPanel}
                appearance="subtle"
              />
            </Tooltip>
          )}
        </Toolbar>
      </div>

      {/*📌 Below is the setup for Content.
      ***You can import just about anything into className"content" and it should show up in the content panel
      ***Dependencies for .md files and react-markdown are preinstalled.
      ***Don't forget call your import above!
      ***/}

      <div className="content">
        {/* <ReactMarkdown>{markdownFile}</ReactMarkdown>; */}
      </div>
    </div>
  );
};

export default Content;
