import React, { useState, useRef, useEffect } from "react";
import ConnectModal from "./ConnectModel";

const Header: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="header">
      {/* Left Section */}
      <div className="logo-section">
        <img
          src="https://hyperliquid.xyz/static/media/logo_white.65b25521.svg"
          alt="logo"
          className="logo"
        />
        <span className="brand">Canton Perp</span>
        <span className="italic">CC USDC-perp</span>
      </div>

      {/* Right Section */}
      <div className="right-section">
        <div className="italic">Price Available</div>
        <button className="connect-btn" onClick={() => setIsModalOpen(true)}>
          Connect
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <ConnectModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;
