import Tab from "components/Tab/Tab";

import jobFiltersButtons from "./dummyJobFilterData.json";

import "./tabs.scss";

function Tabs({ activeTabs, onChange }) {
  const handleTabClick = (value, isActive) => {
    onChange(value, isActive);
  };

  const isTabActive = (value) => activeTabs.includes(value);

  return (
    <ul className="tabs">
      {jobFiltersButtons.map(({ text, value }) => (
        <li key={text}>
          <Tab
            text={text}
            value={value}
            onClick={handleTabClick}
            isActive={isTabActive(value)}
          ></Tab>
        </li>
      ))}
    </ul>
  );
}

export default Tabs;
