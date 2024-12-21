
import * as React from "react";
import {
  Body1Strong,
  Button,
} from "@fluentui/react-components";
import {
  MoreHorizontalRegular
} from "@fluentui/react-icons";




const PanelLeft: React.FC = () => {
  return (
    <div className="panelLeft">
      <div className="panelHeader">
      <Body1Strong
      style={{ color: 'var(--colorNeutralForeground2)' }}
      >Panel</Body1Strong>
      <Button
      icon={<MoreHorizontalRegular/>}
      appearance="subtle"
      >

        </Button>
        </div>
      
    </div>
  );
};

export default PanelLeft;
