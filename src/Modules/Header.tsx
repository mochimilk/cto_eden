import React from "react";
import { Header, useHeaderHooks } from "../Hooks/useHeaderHooks.tsx";
import {
  TabList,
  Tab,
  Menu,
  MenuTrigger,
  MenuPopover,
  MenuList,
  MenuGroup,
  MenuItem,
  MenuDivider,
  Avatar,
  Button,
} from "@fluentui/react-components";
import {
  LeafOne,
  Beaker,
  Flow,
  WeatherSunny,
  WeatherMoon,
  Person,
  PersonFeedback,
  ArrowExit,
  Share,
} from "../bundleIcons.tsx";
import MsftLogo from "../Imports/MsftColor.svg";
import "./css/Header.css";

interface HeaderPageProps {
  toggleTheme: () => void;
  isDarkMode: boolean;
}

const HeaderPage: React.FC<HeaderPageProps> = ({ toggleTheme, isDarkMode }) => {
  const { shortcutLabel } = useHeaderHooks({ toggleTheme, isDarkMode });

  return (
<<<<<<< Updated upstream
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
          v.1.0.8
        </Tag>
      </div>
=======
    <Header
      avatarSrc={MsftLogo} // Profile icon for businesses.
      title="Microsoft"
      subtitle="CTO Systems"
      badge="Beta"
    >
      {/* Navigation Section
      Placeholder. You can configure it to your needs or omit entirely */}
>>>>>>> Stashed changes
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

      {/* Tools Section */}
      <div className="headerTools">
        <Menu 
        hasIcons positioning={{ autoSize: true }}>
          <MenuTrigger disableButtonEnhancement>
            <Avatar
              color="colorful"
              name="Pepper Hayuki"
              aria-label="App"
              badge={{ status: "out-of-office", outOfOffice: true }}
              className="clickable-avatar"
            />
          </MenuTrigger>
          <MenuPopover
          style={{ minWidth: '192px'}}>
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
        <Button icon={<Share />} appearance="subtle" />
      </div>
    </Header>
  );
};

export default HeaderPage;
