import React, { useState } from "react";
import { useTrade } from "../Context/TradeContext";

interface PriceButtonProps {
  field?: string;
  initialValue?: string;
  onChange?: (newValue: string) => void;
}

const Button: React.FC<PriceButtonProps> = ({
  field = "price",
  initialValue = "0.00",
  onChange,
}) => {
  const [value, setValue] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const { tradeData, setTradeData } = useTrade(); // ✅ fully typed

  const handleClick = () => setIsEditing(true);

  const handleBlur = () => {
    setIsEditing(false);
    onChange?.(value);
    setTradeData({ ...tradeData, [field]: value }); // ✅ saves price globally
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    if (/^[0-9]*\.?[0-9]*$/.test(input)) {
      setValue(input);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") e.currentTarget.blur();
  };

  return (
    <div className="price-button">
      {isEditing ? (
        <input
          type="text"
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          autoFocus
          className="price-input"
          placeholder="0.00"
        />
      ) : (
        <button onClick={handleClick} className="price-display">
          {value || "0.00"}
        </button>
      )}
    </div>
  );
};

export default Button;
