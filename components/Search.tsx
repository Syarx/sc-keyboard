import React, { useEffect, useState } from "react";
import { Keybindings, keybindings } from "../assets/keyboard";

export const Search = () => {
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState<Keybindings>([]);
  const startSearch = (value: string) => {
    if (search.length > 2) {
      const filtered = keybindings.filter((item) =>
        item.description.match(value)
      );
      setFiltered(filtered);
    } else {
      setFiltered([]);
    }
  };

  useEffect(() => {
    startSearch(search);
  }, [search]);

  return (
    <div className="flex flex-col items-center">
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(val) => setSearch(val.currentTarget.value)}
      />
      <button>Search</button>
      <div>
        {filtered.map((item) => (
          <div key={Math.random()}>{item.description}</div>
        ))}
      </div>
    </div>
  );
};
