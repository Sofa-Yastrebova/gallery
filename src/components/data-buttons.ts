import type { ParamsType } from "../core/types";
import style from "./buttons-style.module.css";

export const dataButtons: ParamsType[] = [
  {
    tagName: "button",
    classList: [style.button],
    attributes: {
      "data-query": "k-pop",
    },
    text: "k-pop",
  },
  {
    tagName: "button",
    classList: [style.button],
    attributes: {
      "data-query": "rock music",
    },
    text: "rock",
  },
  {
    tagName: "button",
    classList: [style.button],
    attributes: {
      "data-query": "hip hop",
    },
    text: "hip-hop",
  },
  {
    tagName: "button",
    classList: [style.button],
    attributes: {
      "data-query": "classic music",
    },
    text: "classic",
  },
  {
    tagName: "button",
    classList: [style.button],
    attributes: {
      "data-query": "jazz",
    },
    text: "jazz",
  },
  {
    tagName: "button",
    classList: [style.button],
    attributes: {
      "data-query": "electronic music",
    },
    text: "electronic",
  },
];
