import type { ParamsType } from "../core/types.ts";
import Creator from "../core/constructor.ts";
import { dataButtons } from "./data-buttons.ts";
import style from "./header-style.module.css";

export const headerParams: ParamsType = {
  tagName: "header",
  classList: [style.header],
};

const containerParams: ParamsType = {
  tagName: "div",
  classList: [style.container],
};

const headerContentParams: ParamsType = {
  tagName: "div",
  classList: [style.headerContent],
};

const ulParams: ParamsType = {
  tagName: "ul",
  classList: [style.wrapperButtons],
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

const headerLineRarams: ParamsType = {
  tagName: "hr",
  classList: [style.headerLine],
};

export class Header {
  header;
  form;
  listButtons;

  constructor() {
    this.listButtons = this.createDataButtons();
    this.form = this.createForm();
    this.header = this.createHeader();
  }

  createHeader() {
    const headerElement = new Creator(headerParams).getElement() as HTMLElement;
    const containerElement = new Creator(
      containerParams,
    ).getElement() as HTMLElement;
    const headerContentElement = new Creator(
      headerContentParams,
    ).getElement() as HTMLElement;
    const headerLineElement = new Creator(
      headerLineRarams,
    ).getElement() as HTMLElement;

    headerElement?.append(containerElement, headerLineElement);
    containerElement?.append(headerContentElement);

    const listBtnsElement = this.listButtons;
    const formElement = this.form;

    if (listBtnsElement && formElement) {
      headerContentElement?.append(listBtnsElement, formElement);
    }

    return headerElement;
  }

  createDataButtons() {
    const listButtons = new Creator(ulParams).getElement();

    dataButtons.forEach((element) => {
      const item = new Creator(liParams).getElement();
      const button = new Creator(element).getElement();
      item?.append(button as HTMLButtonElement);
      listButtons?.append(item as HTMLLIElement);
    });

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
    return formElement;
  }
}
