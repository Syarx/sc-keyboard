import Head from "next/head";
import Image from "next/image";
import { keybindings, keyboard } from "../assets/keyboard";
import { Search } from "../components/Search";
import { Tile } from "../components/Tile";

export default function Home() {
  return (
    <div className="flex flex-grow">
      <div className="flex-grow">
        {keyboard.map((row) => (
          <div key={Math.random()} className="flex">
            {row.map((key) => {
              const keybinding = keybindings.find((item) => item.key === key);
              return (
                keybinding && (
                  <Tile key={key} value={key} text={keybinding.description} />
                )
              );
            })}
          </div>
        ))}
      </div>
      <div style={{ width: 300 }}>
        <Search />
      </div>
    </div>
  );
}
