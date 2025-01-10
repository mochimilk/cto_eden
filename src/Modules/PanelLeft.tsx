import * as React from "react";
import {
  Body1Strong,
  Button,
  Tree,
  TreeItem,
  TreeItemLayout,
} from "@fluentui/react-components";
import { MoreHorizontalRegular, Image20Regular } from "@fluentui/react-icons";

const PanelLeft: React.FC = () => {
  return (
    <div className="panelLeft">
      {/* PanelHeader */}
      <div className="panelHeader">
        <Body1Strong style={{ color: "var(--colorNeutralForeground2)" }}>
          Panel
        </Body1Strong>
        <Button icon={<MoreHorizontalRegular />} appearance="subtle"></Button>
      </div>

      {/* Content */}
      <div className='content' >
        <span style={{ color: "var(--colorNeutralForeground4)" }}>
          Replace with left panel content. This can be whenever your heart
          desires. Left nav? Quick stats? Upcoming meetings? Gif of a dancing
          banana? Whatever, just make it a-peel-ing to look at 🍌
          <br />
          <br />
          <Body1Strong style={{color:'var(--colorNeutralForeground2)'}}>Dark mode</Body1Strong>
          <br/>
          <br/>
          When building custom components, be sure to consider dark mode theming
          by using <a href="src">Fluent variable colors ↗</a>.
        </span>
      </div>
    </div>
  );
};

export default PanelLeft;
