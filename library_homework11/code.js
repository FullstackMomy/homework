class User {
  constructor(FirstName, LastName, LivingCity) {
    this.FirstName = FirstName;
    this.LastName = LastName;
    this.LivingCity = LivingCity;
    this.booksIBorrow = [];
  }
  borrow(BorrowableBook) {
    this.booksIBorrow.push(BorrowableBook);
  }
}

let user1 = new User("Lior", "Toherian", "Petachtikva");
let user2 = new User("Ben", "Cohen", "Jerusalem");
let user3 = new User("Ayala", "Shulman", "Tel-aviv");

user1.borrow("Book1");
user1.borrow("Book2");
user1.borrow("Book3");
user1.borrow("Book4");
user2.borrow("Book3");
user2.borrow("Book1");
user3.borrow("Book2");

class Report {
  constructor(name) {
    this.name = name;
    this.allUsers = [];
  }
  addNewUser(user) {
    this.allUsers.push(user);
  }
  printReport() {
    this.allUsers.forEach((element) => {
      console.log(
        element.FirstName +
          " " +
          element.LastName +
          " from " +
          element.LivingCity +
          " borrows this books: " +
          element.booksIBorrow
      );
    });
  }
}
let a = new Report("report1");

a.addNewUser(user1);
a.addNewUser(user2);
a.addNewUser(user3);
console.log(a);
a.printReport();
