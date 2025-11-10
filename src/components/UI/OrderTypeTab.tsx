import { Limit } from "./Limit";
import { Market } from "./Market";
import { Stop } from "./Stop";
import { useTrade } from "../../Context/TradeContext";

const OrderTypeTabs = () => {
  const { activeTab, setActiveTab } = useTrade();

  return (
    <div className="order-tabs-container">
      {/* Tabs */}
      <div className="tabs">
        {["Limit", "Market", "Stop"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`tab-button ${activeTab === tab ? "active" : ""}`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Mini Panel */}

      {activeTab === "Limit" && <Limit />}
      {activeTab === "Market" && <Market />}
      {activeTab === "Stop" && <Stop />}
    </div>
  );
};

export default OrderTypeTabs;
