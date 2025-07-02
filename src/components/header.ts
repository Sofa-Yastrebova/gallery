import Creator from "../core/constructor";
import type { ParamsType } from "../core/types.ts";
import { dataButtons } from "./data-buttons.ts";

export const headerParams: ParamsType = {
  tagName: "header",
  classList: "test-class",
  attributes: {
    id: "test-id",
    "data-test": "value",
  },
  text: "test",
};

const ulParams: ParamsType = {
  tagName: "ul",
  classList: "ul",
  attributes: {
    "data-name": "buttons",
  },
};

const liParams: ParamsType = {
  tagName: "li",
};

export class Header {
  header = new Creator(headerParams).getElement();

  constructor() {
    this.createDataButtons();
  }

  createDataButtons() {
    const ul = new Creator(ulParams).getElement();
    dataButtons.forEach((element) => {
      const item = new Creator(liParams).getElement();
      const button = new Creator(element).getElement();
      item?.append(button as HTMLButtonElement);
      ul?.append(item as HTMLLIElement);
    });
    this.header?.append(ul as HTMLUListElement);
  }
}
