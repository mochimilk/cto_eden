import React from "react";
import {
  Button,
  Subtitle2,
  Avatar,
  Menu,
  MenuTrigger,
  MenuList,
  MenuItem,
  MenuPopover,
  MenuDivider,
  MenuGroup,
  Tag,
  Tab,
  TabList,
} from "@fluentui/react-components";
import "./css/Header.css";
import MsftLogo from "../Imports/MsftColor.svg";
import { useHeaderHandlers } from "../appHandlers/useHeaderHandlers.tsx";
import {
  ArrowExit,
  Person,
  PersonFeedback,
  LeafOne,
  Flow,
  Beaker,
  WeatherSunny,
  WeatherMoon,
  Share,
} from "../bundleIcons.tsx";

interface HeaderProps {
  toggleTheme: () => void;
  isDarkMode: boolean;
}

const Header: React.FC<HeaderProps> = ({ toggleTheme, isDarkMode }) => {
  const { shortcutLabel } = useHeaderHandlers({ toggleTheme, isDarkMode });

  return (
    <header>
      <div className="headerTitle">
        <Avatar
          image={{
            src: MsftLogo,
          }}
          shape="square"
          aria-label="App"
        />
        <Subtitle2 style={{ whiteSpace: "nowrap" }}>
          Microsoft
          <span style={{ fontWeight: 400 }}> | CTO Eden</span>
        </Subtitle2>
        <Tag size="small" style={{ marginTop: 4 }}>
          v.1.0.6
        </Tag>
      </div>
      <div className="headerNav">
        <TabList size="small">
          <Tab icon={<LeafOne />} value="tab1">
            Getting Started
          </Tab>
          <Tab icon={<Beaker />} value="tab2">
            Labs
          </Tab>
          <Tab icon={<Flow />} value="tab3">
            API Hooks
          </Tab>
        </TabList>
      </div>
      <div className="headerTools">
        <Menu hasIcons positioning={{ autoSize: true }}>
          <MenuTrigger disableButtonEnhancement>
            <Avatar
              color="colorful"
              name="Pepper Hayuki"
              aria-label="App"
              badge={{ status: "out-of-office", outOfOffice: true }}
              className="clickable-avatar"
            />
          </MenuTrigger>
          <MenuPopover>
            <MenuList>
              <MenuGroup>
                <MenuItem icon={<Person />}>Account</MenuItem>
                <MenuItem
                  icon={isDarkMode ? <WeatherSunny /> : <WeatherMoon />}
                  onClick={toggleTheme}
                  secondaryContent={shortcutLabel}
                >
                  {isDarkMode ? "Light Mode" : "Dark Mode"}
                </MenuItem>
                <MenuItem icon={<PersonFeedback />}>Feedback</MenuItem>
              </MenuGroup>
              <MenuDivider />
              <MenuItem icon={<ArrowExit />}>Logout</MenuItem>
            </MenuList>
          </MenuPopover>
        </Menu>
        <Button icon={<Share />} appearance="subtle"></Button>
      </div>
    </header>
  );
};

export default Header;
