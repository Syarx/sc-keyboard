import { ReactNode } from "react";

export const keyboard = [
  [
    "esc",
    "f1",
    "f2",
    "f3",
    "f4",
    "f5",
    "f6",
    "f7",
    "f8",
    "f9",
    "f10",
    "f11",
    "f12",
  ],
  ["~", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "bcksp"],
  ["tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\"],
];
export interface Keybinding {
  node?: ReactNode;
  description: string;
  key: string;
}

export type Keybindings = Keybinding[];

export const keybindings: Keybindings = [
  {
    key: "esc",
    description: "asdasd",
  },
  {
    key: "f1",
    description:
      "does something / does else does something / does elsedoes something / does else",
  },
  {
    key: "f2",
    description: "does two things",
  },
  {
    key: "f3",
    description: "does two things",
  },
  {
    key: "f4",
    description: "does two things",
  },
  {
    key: "f5",
    description: "does two things",
  },
  {
    key: "f6",
    description: "does two things",
  },
  {
    key: "f7",
    description: "does two things",
  },
  {
    key: "f8",
    description: "does two things",
  },
  {
    key: "f9",
    description: "does two things",
  },
  {
    key: "f10",
    description: "does two things",
  },
  {
    key: "f11",
    description: "does two things",
  },
  {
    key: "f12",
    description: "does two things",
  },

  {
    key: "~",
    description: "hello",
  },
  {
    key: "1",
    description: "hello",
  },
  {
    key: "2",
    description: "hello",
  },
  {
    key: "3",
    description: "hello",
  },
  {
    key: "4",
    description: "hello",
  },
  {
    key: "5",
    description: "hello",
  },
  {
    key: "6",
    description: "hello",
  },
  {
    key: "7",
    description: "hello",
  },
  {
    key: "8",
    description: "hello",
  },
  {
    key: "9",
    description: "hello",
  },
  {
    key: "0",
    description: "hello",
  },

  {
    key: "tab",
    description: "hello",
  },
  {
    key: "q",
    description: "hello",
  },
  {
    key: "w",
    description: "hello",
  },
  {
    key: "e",
    description: "hello",
  },
  {
    key: "r",
    description: "hello",
  },
  {
    key: "t",
    description: "hello",
  },
  {
    key: "y",
    description: "hello",
  },
  {
    key: "u",
    description: "hello",
  },
];
