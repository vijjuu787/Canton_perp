import { useEffect, useRef } from "react";

declare global {
  interface Window {
    TradingView: any;
  }
}

export const TradingChart = ({ symbol }: { symbol: string }) => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current) return;

    container.current.innerHTML = "";

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      {
        "allow_symbol_change": true,
        "calendar": false,
        "details": false,
        "hide_side_toolbar": false,
        "hide_left_toolbar":false,
        "hide_top_toolbar": false,
        "hide_bottom_toolbar": false,
        "hide_legend": false,
        "hide_volume": false,
        "hotlist": false,
        "interval": "D",
        "locale": "en",
        "save_image": true,
        "style": "1",
        "symbol": "NASDAQ:AAPL",
        "theme": "dark",
        "timezone": "Etc/UTC",
        "backgroundColor": "#0F0F0F",
        "gridColor": "rgba(242, 242, 242, 0.06)",
        "watchlist": [],
        "withdateranges": false,
        "compareSymbols": [],
        "studies": [],
        "autosize": true
      }`;

    container.current.appendChild(script);
  }, []);

  return (
    <div className="trading-chart">
      <div
        id="tradingview_chart"
        ref={container}
        style={{
          height: "540px",
          width: "100%",
          background: "#0b1217",
          overflow: "hidden",
          borderRadius: "10px",
        }}
      />
    </div>
  );
};

// import  { useEffect, useRef, memo } from 'react';

// function TradingChart() {
//   const container = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     if (!container.current) return; // ensure ref is set

//     const script = document.createElement("script");
//     script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
//     script.type = "text/javascript";
//     script.async = true;
//     script.innerHTML = `
//       {
//         "allow_symbol_change": true,
//         "calendar": false,
//         "details": false,
//         "hide_side_toolbar": true,
//         "hide_top_toolbar": false,
//         "hide_legend": false,
//         "hide_volume": false,
//         "hotlist": false,
//         "interval": "D",
//         "locale": "en",
//         "save_image": true,
//         "style": "1",
//         "symbol": "NASDAQ:AAPL",
//         "theme": "dark",
//         "timezone": "Etc/UTC",
//         "backgroundColor": "#0F0F0F",
//         "gridColor": "rgba(242, 242, 242, 0.06)",
//         "watchlist": [],
//         "withdateranges": false,
//         "compareSymbols": [],
//         "studies": [],
//         "autosize": true
//       }`;

//     container.current.appendChild(script);
//   }, []);

//   return (
//     <div className='trading-chart'>
//     <div
//       className="tradingview-widget-container"
//       ref={container}
//       style={{ height: "100%", width: "100%" }}
//     >
//       <div
//         className="tradingview-widget-container__widget"
//       />
//       <div className="tradingview-widget-copyright">
//         <a
//           href="https://www.tradingview.com/symbols/NASDAQ-AAPL/"
//           rel="noopener nofollow"
//           target="_blank"
//         >
//           <span className="blue-text">AAPL stock chart</span>
//         </a>
//         <span className="trademark"> by TradingView</span>
//       </div>
//     </div>
//     </div>
//   );
// }

// export default memo(TradingChart);
