import * as React from "react";
import { Body1Strong, Button } from "@fluentui/react-components";
import { MoreHorizontalRegular, Sparkle20Filled } from "@fluentui/react-icons";

const PanelRight: React.FC = () => {
  return (
    <div className="panelRight">
      {/* PanelHeader */}
      <div className="panelHeader">
        <div className="headerTitleGroup">
          <Sparkle20Filled />
          <Body1Strong style={{ color: "var(--colorNeutralForeground2)" }}>
            Copilot
          </Body1Strong>
        </div>

        <Button icon={<MoreHorizontalRegular />} appearance="subtle"></Button>
      </div>

      {/* Content */}
      <div className='content' >
        <span style={{ color: "var(--colorNeutralForeground4)", width: '100%' }}>
          Replace with right panel content
        </span>
      </div>
    </div>
  );
};

export default PanelRight;
