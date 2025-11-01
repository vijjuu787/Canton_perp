import { useState } from "react";

export default function LeverageSlider() {
  const [value, setValue] = useState(10);

  return (
    <div className="leverage-container">
      <div className="leverage-header">
        <span className="label">Leverage</span>
        <span className="value">{value}x</span>
      </div>

      <div className="slider-wrapper">
        <input
          type="range"
          min={1}
          max={50}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          className="leverage-slider"
          style={{
            background: `linear-gradient(to right, #070711 ${
              (value - 1) * 2
            }%, #d1d1d1 ${(value - 1) * 2}%)`,
          }}
        />
      </div>

      <div className="slider-labels">
        <span>1x</span>
        <span>50x</span>
      </div>
    </div>
  );
}
