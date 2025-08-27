import Creator from "../core/constructor";
import type { AnswerTypes, ParamsType } from "../core/types";

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
    this.main?.append(this.list.getElement() as HTMLUListElement);
  }

  createImages(data: AnswerTypes) {
    const template = new DocumentFragment();
    data.results.forEach((element) => {
      const imgElement = new Creator(
        imgParams,
      ).getElement() as HTMLImageElement;
      const liElement = new Creator(liParams).getElement();

      if (imgElement && liElement) {
        imgElement.src = element.urls.regular;
        liElement?.append(imgElement);
        template.append(liElement);
      }
    });
    this.list.getElement()?.append(template);
  }

  clearListImages() {
    this.list.getElement().innerHTML = "";
  }
}
