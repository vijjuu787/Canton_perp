const BuySellButtons = () => {
  const handleBuyClick = () => {
    console.log("Buy / Long clicked");
  };

  const handleSellClick = () => {
    console.log("Sell / Short clicked");
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
