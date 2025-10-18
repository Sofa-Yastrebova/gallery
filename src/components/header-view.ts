import type { ParamsType } from "../core/types.ts";
import Creator from "../core/constructor.ts";
import { dataBtnParams } from "./data-buttons.ts";
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
  classList: [style.item],
};

const formParams: ParamsType = {
  tagName: "form",
  classList: [style.form],
};

const inputSearchParams: ParamsType = {
  tagName: "input",
  classList: [style.inputSearch],
  attributes: {
    type: "search",
    name: "search",
    placeholder: "Search...",
  },
};

const inputSubmitParams: ParamsType = {
  tagName: "input",
  classList: [style.inputSubmit],
  attributes: {
    type: "submit",
    value: "",
  },
};

const headerLineRarams: ParamsType = {
  tagName: "hr",
  classList: [style.headerLine],
};

const burgerRarams: ParamsType = {
  tagName: "button",
  classList: [style.burgerButton],
};

const burgerLineRarams: ParamsType = {
  tagName: "span",
  classList: [style.burgerLine],
};

export class Header {
  header;
  form;
  listButtons;
  burger;

  constructor(genres) {
    this.listButtons = this.createDataButtons(genres);
    this.form = this.createForm();
    this.burger = this.createBurger();
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
    const burgerElement = this.burger;

    if (listBtnsElement && formElement) {
      headerContentElement?.append(listBtnsElement, burgerElement, formElement);
    }

    return headerElement;
  }

  createDataButtons(genres) {
    const listButtons = new Creator(ulParams).getElement();

    genres.forEach((element) => {
      console.log(element);
      const item = new Creator(liParams).getElement();
      dataBtnParams.text = element.name;
      dataBtnParams.attributes["data-query"] = element.name;
      const button = new Creator(dataBtnParams).getElement();
      item?.append(button as HTMLButtonElement);
      listButtons?.append(item as HTMLLIElement);
    });

    return listButtons;
  }

  createBurger() {
    const burger = new Creator(burgerRarams).getElement();
    const burgerLine = new Creator(
      burgerLineRarams,
    ).getElement() as HTMLElement;
    burger?.append(burgerLine);
    return burger;
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
