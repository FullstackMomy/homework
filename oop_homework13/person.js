export class Person {
  #firstName;
  #lastName;
  constructor(firstName, lastName) {
    this.#firstName = firstName;
    this.#lastName = lastName;
  }
  printAll() {
    console.log(`All details: ${this.#firstName} ${this.#lastName}`);
  }
  getFirstName() {
    return this.#firstName;
  }
  getLastName() {
    return this.#lastName;
  }
}
