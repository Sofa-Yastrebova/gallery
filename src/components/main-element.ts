import Creator from "../core/constructor";
import type { ParamsType } from "../core/types";

export const mainParams: ParamsType = {
  tagName: "main",
};
export const imgParams = {
  tagName: "img",
  classList: "",
};

export const ulParams = {
  tagName: "ul",
  classList: "",
};

export const liParams = {
  tagName: "li",
  classList: "",
};

export class Main {
  main = new Creator(mainParams).getElement();
  list;

  constructor() {
    this.list = new Creator(ulParams);
    this.main?.append(this.list.getElement());
  }

  createImages(data) {
    const template = new DocumentFragment();
    data.results.forEach((element) => {
      console.log(element);
      const imgElement = new Creator(imgParams).getElement();
      imgElement.src = element.urls.regular;
      // 1.в src imgElement указать путь из елемента
      const liElement = new Creator(liParams).getElement();
      liElement?.append(imgElement);
      template.append(liElement);
    });
    this.list.getElement()?.append(template);
  }
}
