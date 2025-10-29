import Model from "../model/model";
import View from "../view/view";
import headerStyle from "../components/header-style.module.css";

export default class Controller {
  model;
  view;
  constructor() {
    this.model = new Model();
    this.init();
  }

  async init() {
    this.view = new View(await this.model.genres);
    this.setFormListener();
    this.setButtonsListener();
    this.setBurgerListener();
  }

  setFormListener() {
    this.view.headerElement.form?.addEventListener("submit", (event) =>
      this.getDataInput(event),
    );
  }

  setButtonsListener() {
    this.view.headerElement.listButtons?.addEventListener(
      "click",
      async (event: Event) => {
        const isBtn = event.target as HTMLButtonElement;
        if (isBtn) {
          const buttonValue = isBtn
            .closest("[data-query]")
            ?.getAttribute("data-query");
          if (buttonValue) {
            const data = await this.model.createRequest(buttonValue);
            this.view.mainElement.clearListImages();
            this.view.creatorOfImages(data);
          }
        }
      },
    );
  }

  setBurgerListener() {
    this.view.headerElement.burger?.addEventListener("click", () => {
      this.view.headerElement.burger?.classList.toggle(
        headerStyle.burgerActive,
      );
      this.view.headerElement.listButtons.classList.toggle(
        headerStyle.gradientContainerOpen,
      );
    });
  }

  async getDataInput(event: Event) {
    event.preventDefault();
    const query = this.model.createFormData(event) as string;
    const data = await this.model.createRequest(query);
    this.view.mainElement.clearListImages();
    this.view.creatorOfImages(data);
  }
}
