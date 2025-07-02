import Creator from "../core/constructor";
import type { ParamsType } from "../core/types";

export const mainParams: ParamsType = {
  tagName: "main",
  classList: "test-class",
  attributes: {
    id: "test-id",
    "data-test": "value",
  },
  text: "test",
};

export class Main {
  main = new Creator(mainParams).getElement();

  constructor() {}
}
