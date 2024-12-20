
import * as React from "react";
import {
  Button,
  Label,
} from "@fluentui/react-components";
import {
  MoreHorizontalRegular
} from "@fluentui/react-icons";



const PanelRight: React.FC = () => {
  return (
    <div className="panelRight">
      <div className="panelLeftHeader">
      <Label
      style={{ color: 'var(--colorNeutralForeground2)' }}
      >Chat</Label>
      <Button
      icon={<MoreHorizontalRegular/>}
      appearance="subtle"
      >

        </Button>
        </div>
      
    </div>
  );
};

export default PanelRight;
