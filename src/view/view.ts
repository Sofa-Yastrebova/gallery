import { Header } from "../components/header";

export default class View {
  element = new Header();
  constructor() {
    console.log(this.element.header);
  }
}
