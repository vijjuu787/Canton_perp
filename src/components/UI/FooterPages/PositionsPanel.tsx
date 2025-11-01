import { useState } from "react";
import { TabsPanel } from "./TabsPanel";
import { OpenPositionsTable } from "./OptionPostions";
import { OpenOrders } from "./OpenOrders";
import { OpenHistory } from "./OrderHistory";
import { Diposite } from "./Diposite";
import { Withdrawal } from "./WithDrawals";

export const PositionsPanel = () => {
  const [activeTab, setActiveTab] = useState("Open Positions");

  return (
    <div className="positions-container">
      {/* Tabs Component */}
      <TabsPanel onTabChange={(tab) => setActiveTab(tab)} />

      {/* Content */}
      <div className="tab-content">
        {activeTab === "Open Positions" && <OpenPositionsTable />}
        {activeTab === "Open Orders" && <OpenOrders />}
        {activeTab === "Order History" && <OpenHistory />}
        {activeTab === "Deposits" && <Diposite />}
        {activeTab === "Withdrawals" && <Withdrawal />}
      </div>
    </div>
  );
};
