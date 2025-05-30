import React from 'react';
import "@styles/Tooltip.css";

interface TooltipProps {
  text: string;
  tooltip: string | undefined;
}

const Tooltip: React.FC<TooltipProps> = ({ text, tooltip }) => {
  return (
    <div className="tooltip-container">
      {text}
      <span className="tooltip-text">{tooltip}</span>
    </div>
  );
};

export default Tooltip;
