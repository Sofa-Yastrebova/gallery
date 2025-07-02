import Creator from "../core/constructor";
import type { ParamsType } from "../core/types";

export const footerParams: ParamsType = {
  tagName: "footer",
  classList: "test-class",
  attributes: {
    id: "test-id",
    "data-test": "value",
  },
  text: "test",
};

export class Footer {
  footer = new Creator(footerParams).getElement();

  constructor() {}
}
