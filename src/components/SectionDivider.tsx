import React from "react";

interface SectionDividerProps {
  color?: string;
}

const SectionDivider: React.FC<SectionDividerProps> = ({ color = "#00F0FF" }) => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        padding: "1.5rem 0",
        position: "relative",
        overflow: "hidden",
      }}
      aria-hidden="true"
    >
      <div
        style={{
          width: "100%",
          maxWidth: "700px",
          height: "1px",
          position: "relative",
          margin: "0 1.5rem",
          background: `linear-gradient(90deg, transparent 0%, ${color}60 30%, ${color} 50%, ${color}60 70%, transparent 100%)`,
        }}
      >
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            backgroundColor: color,
            boxShadow: `0 0 10px ${color}`,
          }}
        />
      </div>
    </div>
  );
};

export default SectionDivider;
