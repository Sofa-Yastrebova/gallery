import Creator from "../core/constructor";
import type { ParamsType } from "../core/types";

export const mainParams: ParamsType = {
  tagName: "main",
};

export class Main {
  main = new Creator(mainParams).getElement();

  constructor() {}
}
