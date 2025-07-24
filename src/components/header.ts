import type { ParamsType } from "./../core/types";
import Creator from "../core/constructor";
import { dataButtons } from "./data-buttons.ts";

export const headerParams: ParamsType = {
  tagName: "header",
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
  header = new Creator(headerParams).getElement();
  form;

  constructor() {
    this.createDataButtons();
    this.form = this.createForm();
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

  createForm() {
    const formElement = new Creator(formParams).getElement();
    const inputSearchElement = new Creator(inputSearchParams).getElement();
    const inputSubmitElement = new Creator(inputSubmitParams).getElement();
    formElement?.append(
      inputSearchElement as HTMLInputElement,
      inputSubmitElement as HTMLInputElement,
    );
    this.header?.append(formElement as HTMLFormElement);
    return formElement;
  }
}
