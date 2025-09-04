import type { ParamsType } from "../core/types.ts";
import Creator from "../core/constructor.ts";
import { dataButtons } from "./data-buttons.ts";
import style from "./header-style.module.css";

export const headerParams: ParamsType = {
  tagName: "header",
  classList: style.header,
};

const containerParams: ParamsType = {
  tagName: "div",
};

const headerContentParams: ParamsType = {
  tagName: "div",
};

const ulParams: ParamsType = {
  tagName: "ul",
};

const liParams: ParamsType = {
  tagName: "li",
};

const formParams: ParamsType = {
  tagName: "form",
};

const inputSearchParams: ParamsType = {
  tagName: "input",
  attributes: {
    type: "search",
    name: "search",
  },
};

const inputSubmitParams: ParamsType = {
  tagName: "input",
  attributes: {
    type: "submit",
  },
};

export class Header {
  header;
  form;
  listButtons;

  constructor() {
    this.header = this.createHeader().getElement();
    this.listButtons = this.createDataButtons();
    this.form = this.createForm();
  }

  createHeader() {
    const header = new Creator(headerParams);
    const container = new Creator(containerParams);
    const headerContent = new Creator(headerContentParams);
    const containerElement = container.getElement() as HTMLElement;
    const headerContentElement = headerContent.getElement() as HTMLElement;
    header.getElement()?.append(containerElement);
    container.getElement()?.append(headerContentElement);
    return header;
  }

  createDataButtons() {
    const listButtons = new Creator(ulParams).getElement();

    dataButtons.forEach((element) => {
      const item = new Creator(liParams).getElement();
      const button = new Creator(element).getElement();
      item?.append(button as HTMLButtonElement);
      listButtons?.append(item as HTMLLIElement);
    });

    this.header.getElement()?.append(listButtons as HTMLUListElement);
    return listButtons;
  }

  createForm() {
    const formElement = new Creator(formParams).getElement();
    const inputSearchElement = new Creator(inputSearchParams).getElement();
    const inputSubmitElement = new Creator(inputSubmitParams).getElement();
    formElement?.append(
      inputSearchElement as HTMLInputElement,
      inputSubmitElement as HTMLInputElement,
    );
    this.header.getElement()?.append(formElement as HTMLFormElement);
    return formElement;
  }
}
