import React from "react";

interface TileProps {
  width?: number;
  height?: number;
  value: string;
  text: string;
}
export const Tile = ({ width = 24, height = 28, value, text }: TileProps) => {
  return (
    <div
      className={`w-${width} h-${height} border border-black text-right p-1`}
    >
      <div>{value}</div>
      <div>{text}</div>
    </div>
  );
};
