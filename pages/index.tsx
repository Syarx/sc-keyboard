import Head from "next/head";
import Image from "next/image";
import { keyboard } from "../assets/keyboard";
import { Tile } from "../components/Tile";

export default function Home() {
  return (
    <div className=" ">
      {keyboard.map((row) => (
        <div key={Math.random()} className="flex">
          {row.map((key) => (
            <Tile key={key} value={key} text="test1" />
          ))}
        </div>
      ))}
    </div>
  );
}
