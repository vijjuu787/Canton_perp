export const TradingBar = () => {
  return (
    <div className="trading-bar">
      <div className="price-ticker">
        <div className="ticker-left">
          <span className="icon">📈</span>
          <span className="pair">CC–USDC</span>
        </div>

        <div className="ticker-center">
          <span className="price">$43.23</span>
          <span className="change">+$1.29 (+3.08%)</span>
        </div>

        <div className="ticker-right">
          <span className="high">
            24h High: <span className="value">$43.12</span>
          </span>
          <span className="divider">|</span>
          <span className="low">
            24h Low: <span className="value">$40.89</span>
          </span>
          <span className="expand">↗</span>
        </div>
      </div>
    </div>
  );
};
