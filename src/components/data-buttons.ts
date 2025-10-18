import type { ParamsType } from "../core/types";
import style from "./buttons-style.module.css";

export const dataBtnParams: ParamsType = {
  tagName: "button",
  classList: [style.button],
  attributes: {
    "data-query": "",
  },
  text: "",
};
