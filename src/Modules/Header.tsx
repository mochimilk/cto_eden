import React, { useEffect, useCallback, useState } from "react";
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
import {
  ArrowExitRegular,
  PersonRegular,
  PersonFeedbackRegular,
  ArrowExitFilled,
  PersonFilled,
  PersonFeedbackFilled,
  LeafOneRegular,
  LeafOneFilled,
  FlowFilled,
  FlowRegular,
  BeakerFilled,
  BeakerRegular,
  WeatherSunnyFilled,
  WeatherSunnyRegular,
  WeatherMoonFilled,
  WeatherMoonRegular,
  bundleIcon,
  ShareRegular
} from "@fluentui/react-icons";
import "./css/Header.css";
import MsftLogo from "../Imports/MsftColor.svg";

const ArrowExit = bundleIcon(ArrowExitFilled, ArrowExitRegular);
const Person = bundleIcon(PersonFilled, PersonRegular);
const PersonFeedback = bundleIcon(PersonFeedbackFilled, PersonFeedbackRegular);
const LeafOne = bundleIcon(LeafOneFilled, LeafOneRegular);
const Flow = bundleIcon(FlowFilled, FlowRegular);
const Beaker = bundleIcon(BeakerFilled, BeakerRegular);
const WeatherSunny = bundleIcon(WeatherSunnyFilled, WeatherSunnyRegular);
const WeatherMoon = bundleIcon(WeatherMoonFilled, WeatherMoonRegular);

interface HeaderProps {
  toggleTheme: () => void;
  isDarkMode: boolean;
}

const Header: React.FC<HeaderProps> = ({ toggleTheme, isDarkMode }) => {
  const [shortcutLabel, setShortcutLabel] = useState("Ctrl+D");

  const handleKeyPress = useCallback(
    (event: KeyboardEvent) => {
      // Detect Cmd+D (Mac) or Ctrl+D (Windows/Linux)
      if ((event.metaKey || event.ctrlKey) && event.key === "d") {
        toggleTheme();
        event.preventDefault(); // Prevent browser default actions
      }
    },
    [toggleTheme]
  );

  useEffect(() => {
    // Set shortcut label based on the platform
    const isMac = navigator.platform.toLowerCase().includes("mac");
    setShortcutLabel(isMac ? "Cmd+D" : "Ctrl+D");

    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <header>
      <div className="headerTitle">
        <Avatar
          color="" //invisible
          image={{
            src: MsftLogo,
          }}
          shape="square"
          aria-label="App"
        />
        <Subtitle2 style={{ whiteSpace: "nowrap"}}>
          Microsoft
          <span style={{ fontWeight: 400}}> | CTO Eden</span>
        </Subtitle2>
        <Tag size="small" style={{ marginTop: 4 }}>
          v.1.0.3
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
        <Button icon={<ShareRegular />}
        appearance="subtle"
        ></Button>
      </div>
    </header>
  );
};

export default Header;
