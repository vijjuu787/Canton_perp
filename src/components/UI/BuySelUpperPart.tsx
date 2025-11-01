const BuySelUpperPart = () => {
  return (
    <div className="account-summary">
      <div className="summary-row">
        <span className="label">Available Balance</span>
        <span className="value">$15,450.00</span>
      </div>

      <div className="summary-row">
        <span className="label">Margin Used</span>
        <span className="value">$2,340.50</span>
      </div>

      <div className="summary-row">
        <span className="label">Unrealized P&amp;L</span>
        <span className="value profit">+$567.89</span>
      </div>
    </div>
  );
};

export default BuySelUpperPart;
