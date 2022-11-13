import { ExtendedPerson } from "./extendedPerson.js";

export class SuperExtendedPerson extends ExtendedPerson {
  #children;
  constructor(firstName, lastName, city, children) {
    super(firstName, lastName, city);
    this.#children = children;
  }
  printAll() {
    console.log(
      `All details: ${this.getFirstName()} ${this.getLastName()} lives in ${this.getCity()} and has ${
        this.#children
      } children.`
    );
  }
}
