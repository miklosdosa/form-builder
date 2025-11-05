import {
  ReactNode,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useState } from "react";
import { SxProps, Theme } from "@mui/material";
import { EventName, publish } from "../../../events";

interface TabPanelProps {
  id?: string;
  children: ReactNode;
  tabsHeight: number;
  value: number;
  index: number;
  sx?: SxProps<Theme>;
}

const TabPanel = memo(
  ({ id, children, value, index, tabsHeight, sx }: TabPanelProps) => (
    <Box
      id={`tabpanel-${id || index}`}
      role="tabpanel"
      hidden={value !== index}
      p={1}
      sx={{ height: `calc(100% - ${tabsHeight}px)`, ...sx }}
      aria-labelledby={`tab-${id || index}`}
    >
      {value === index && children}
    </Box>
  )
);

TabPanel.displayName = "TabPanel";

const a11yProps = (index: number, id?: string) => ({
  id: `tab-${id || index}`,
  "aria-controls": `tabpanel-${id || index}`,
});

interface TabDisplayProps {
  tabs: {
    id?: string;
    label: ReactNode;
    panel: ReactNode;
    visible?: boolean;
    panelSx?: SxProps<Theme>;
    tabHeightOffset?: number;
  }[];
  tabChangeEvent?: EventName;
}

const TabDisplay = memo(({ tabs, tabChangeEvent }: TabDisplayProps) => {
  const [value, setValue] = useState(0);
  const [tabsHeight, setTabsHeight] = useState(0);
  const tabsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (tabsRef.current) {
      setTabsHeight(tabsRef.current.clientHeight);
    }
  }, [tabsRef.current?.clientHeight]);

  const handleChange = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (_: any, newValue: number) => {
      if (tabChangeEvent) {
        publish(tabChangeEvent, { proceed: () => setValue(newValue) });
      } else {
        setValue(newValue);
      }
    },
    [tabChangeEvent]
  );

  const tabsToDisplay = useMemo(
    () => tabs.filter((tab) => tab.visible === undefined || tab.visible),
    [tabs]
  );

  return (
    <>
      <Box ref={tabsRef} sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          color="secondary"
          value={value}
          onChange={handleChange}
          aria-label="tabs"
        >
          {tabsToDisplay.map((tab, i) => (
            <Tab key={i} label={tab.label} {...a11yProps(i, tab.id)} />
          ))}
        </Tabs>
      </Box>
      {tabsToDisplay.map((tab, i) => {
        const heightOffset = tab.tabHeightOffset ?? 0;
        return (
          <TabPanel
            id={tab.id}
            tabsHeight={tabsHeight + heightOffset}
            key={i}
            value={value}
            index={i}
            sx={tab.panelSx}
          >
            {tab.panel}
          </TabPanel>
        );
      })}
    </>
  );
});

TabDisplay.displayName = "TabDisplay";

export { TabDisplay };
