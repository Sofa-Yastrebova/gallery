import type { ParamsType } from "./types.ts";

export default class Creator {
  element: HTMLElement | HTMLImageElement;
  params: ParamsType;

  constructor(paramsObject: ParamsType) {
    this.params = paramsObject;
    this.element = this.createTag();
    this.setStyle();
    this.setAttr();
    this.setText();
  }

  createTag() {
    const element = document.createElement(this.params.tagName);
    return element;
  }

  setStyle() {
    if (this.params.classList && this.element) {
      this.element.classList.add(this.params.classList);
    }
  }

  setAttr() {
    if (this.element && this.params.attributes) {
      for (const key in this.params.attributes) {
        this.element.setAttribute(key, String(this.params.attributes[key]));
      }
    }
  }

  setText() {
    if (this.element && this.params.text) {
      this.element.textContent = this.params.text;
    }
  }

  getElement() {
    if (this.element) {
      return this.element;
    }
  }
}
