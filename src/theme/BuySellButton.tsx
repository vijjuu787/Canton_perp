import { OpenOrders } from "../components/UI/FooterPages/OpenOrders";
import { OpenPositionsTable } from "../components/UI/FooterPages/OptionPostions";
import { OpenHistory } from "../components/UI/FooterPages/OrderHistory";
import { useTrade } from "../Context/TradeContext";

const BuySellButtons = () => {
  const { setTradeSide } = useTrade();
  const { setTradeExecuted } = useTrade();
  const { activeTab } = useTrade();

  const handleBuyClick = () => {
    {
      activeTab == "Market" && <OpenPositionsTable />;
      <OpenHistory />;
      console.log(activeTab);
    }
    {
      activeTab == "Limit" && <OpenOrders />;
      console.log("helo");
    }
    setTradeSide("Buy");
    setTradeExecuted && setTradeExecuted(true);
    console.log("Buy / Long clicked");
  };

  const handleSellClick = () => {
    {
      activeTab == "Market" && <OpenPositionsTable />;
      console.log(activeTab);
    }
    {
      activeTab == "Limit" && <OpenOrders />;
      console.log("helo");
    }
    setTradeSide("Sell");
    setTradeExecuted && setTradeExecuted(true);
    console.log("Sell / Short clickef");
  };

  return (
    <div className="buy-sell-container">
      <button onClick={handleBuyClick} className="buy-btn">
        Buy / Long
      </button>

      <button onClick={handleSellClick} className="sell-btn">
        Sell / Short
      </button>
    </div>
  );
};

export default BuySellButtons;
