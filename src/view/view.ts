import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Main } from "../components/main-element";
import type { AnswerTypes } from "../core/types";

export default class View {
  headerElement = new Header();
  mainElement = new Main();
  footerElement = new Footer();
  constructor() {
    this.interfaceBuilder();
  }

  interfaceBuilder() {
    const appContainer = document.querySelector("#app");
    if (
      appContainer &&
      this.headerElement.header &&
      this.mainElement.main &&
      this.footerElement.footer
    ) {
      appContainer.append(
        this.headerElement.header,
        this.mainElement.main,
        this.footerElement.footer,
      );
    }
  }

  creatorOfImages(data: AnswerTypes) {
    this.mainElement.createImages(data);
  }
}
