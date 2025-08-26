import Model from "../model/model";
import View from "../view/view";

export default class Controller {
  model;
  view;
  constructor() {
    this.model = new Model();
    this.view = new View();
    this.setFormListener();
    this.setButtonsListener();
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
            this.view.creatorOfImages(data);
          }
        }
      },
    );
  }

  async getDataInput(event: Event) {
    event.preventDefault();
    const query = this.model.createFormData(event) as string;
    const data = await this.model.createRequest(query);
    this.view.creatorOfImages(data);
  }
}
