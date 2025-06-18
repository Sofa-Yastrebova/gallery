// Создать класс конструктора, который будет создавать дом элемент
// 1. класс должен принимать обЪект с параметрами ( как в заметках )  +
//  2. класс должен содержать метод, который будет создавать тег    +
//  3. класс должен содержать метод, который будет добавлять css классы на созданный тег   +
//   4. класс должен содержать метод, который будет добавлять атрибуты на созданный тег    +
//   5. класс должен содержать метод, который будет добавлять внутренний текст в созданный тег
//  6. класс должен содержать метод, который будет возвращать тег наружу
//  НЕ ИСПОЛЬЗОВАТЬ НЕЙРОСЕТИ

interface attributesTypes {
  [key: string]: string | number | boolean;
}

interface ParamsType {
  tagName: string;
  classList?: string;
  attributes?: attributesTypes;
  text?: string;
}

export const headerParams: ParamsType = {
  tagName: "header",
  classList: "test-class",
  attributes: {
    id: "test-id",
    "data-test": "value",
  },
  text: "test",
};

export const textParams: ParamsType = {
  tagName: "p",
  classList: "text-class",
  attributes: {
    id: "textt-id",
    "data-text": "value",
  },
  text: "text",
};

export default class Creator {
  element: HTMLElement;
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

  getElement(): HTMLElement | undefined {
    if (this.element) {
      return this.element;
    }
  }
}
