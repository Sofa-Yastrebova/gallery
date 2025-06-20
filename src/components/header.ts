import Creator from "../core/constructor";
import type { ParamsType } from "../core/types.ts";

export const headerParams: ParamsType = {
  tagName: "header",
  classList: "test-class",
  attributes: {
    id: "test-id",
    "data-test": "value",
  },
  text: "test",
};

export class Header {
  header = new Creator(headerParams).getElement();

  constructor() {}
}
