import { Person } from "./person.js";

export class ExtendedPerson extends Person {
  #city;
  constructor(firstName, lastName, city) {
    super(firstName, lastName);
    this.#city = city;
  }
  printAll() {
    console.log(
      `All details: ${this.getFirstName()} ${this.getLastName()} lives in ${
        this.#city
      }`
    );
  }
  getCity() {
    return this.#city;
  }
}
