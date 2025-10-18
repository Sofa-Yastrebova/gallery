import { Footer } from "../components/footer-view";
import { Header } from "../components/header-view";
import { Main } from "../components/main-view";
import type { AnswerTypes } from "../core/types";

export default class View {
  headerElement;
  mainElement;
  footerElement;

  constructor(genres) {
    console.log(genres);
    this.headerElement = new Header(genres);
    this.mainElement = new Main();
    this.footerElement = new Footer();
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
