import Model from "../model/model";
import View from "../view/view";

export default class Controller {
  model;
  view;
  constructor() {
    this.model = new Model();
    this.view = new View();
    this.setFormListener();
  }

  setFormListener() {
    this.view.headerElement.form?.addEventListener("submit", (event) =>
      this.getDataInput(event),
    );
  }

  async getDataInput(event: Event) {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const query = formData.get("search");
    const answer = await fetch(
      `https://api.unsplash.com/search/photos/?client_id=nfz6uqutkSaOK5zHC7NQXLwql2V5WyQY7kiZrjMjIB4&page=1&per_page=16&query=${query}`,
    );
    const data = await answer.json();
    this.view.creatorOfImages(data);
  }
}
