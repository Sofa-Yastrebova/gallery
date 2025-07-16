import Creator from "../core/constructor";
import type { ParamsType } from "../core/types";

export const footerParams: ParamsType = {
  tagName: "footer",
};

export class Footer {
  footer = new Creator(footerParams).getElement();

  constructor() {}
}
