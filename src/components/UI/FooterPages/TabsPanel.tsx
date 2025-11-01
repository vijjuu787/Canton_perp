import { useState } from "react";

const tabs = [
  "Open Positions",
  "Open Orders",
  "Order History",
  "Deposits",
  "Withdrawals",
];

export const TabsPanel = ({
  onTabChange,
}: {
  onTabChange: (tab: string) => void;
}) => {
  const [activeTab, setActiveTab] = useState("Open Positions");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    onTabChange(tab); // notify parent
  };

  return (
    <div className="position-tabs">
      {tabs.map((tab) => (
        <div
          key={tab}
          className={`tab ${activeTab === tab ? "active" : ""}`}
          onClick={() => handleTabClick(tab)}
        >
          {tab}
        </div>
      ))}
    </div>
  );
};
