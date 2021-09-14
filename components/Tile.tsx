import React, { useState } from "react";

interface TileProps {
  width?: number;
  height?: number;
  value: string;
  text: string;
}
export const Tile = ({ width = 24, height = 28, value, text }: TileProps) => {
  const [size, setSize] = useState({ width: 90, height: 90 });
  return (
    <div
      style={{
        width: size.height,
        height: size.width,
      }}
      className={`border border-black text-right p-1 overflow-y-hidden`}
      onMouseEnter={() => {
        setSize({ height: 150, width: 150 });
      }}
      onMouseLeave={() => {
        setSize({ height: 90, width: 90 });
      }}
    >
      <div style={{ fontSize: 14 }}>{value}</div>
      <div style={{ fontSize: 10 }}>{text}</div>
    </div>
  );
};
