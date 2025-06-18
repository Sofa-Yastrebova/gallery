import Creator, { headerParams } from "../core/constructor";

export default class View {
  header = new Creator(headerParams);

  constructor() {
    document.body.append(this.header.getElement());
  }
}
