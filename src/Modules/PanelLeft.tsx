
import * as React from "react";
import {
  Button,
  Label,
} from "@fluentui/react-components";
import {
  MoreHorizontalRegular
} from "@fluentui/react-icons";




const PanelLeft: React.FC = () => {
  return (
    <div className="panelLeft">
      <div className="panelLeftHeader">
      <Label
      style={{ color: 'var(--colorNeutralForeground2)' }}
      >Resources</Label>
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
