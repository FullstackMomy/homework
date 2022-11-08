class User {
  FirstName;
  LastName;
  LivingCity;
  constructor(FirstName, LastName, LivingCity) {
    this.FirstName = FirstName;
    this.LastName = LastName;
    this.LivingCity = LivingCity;
    this.booksIBorrow = [];
  }
  borrow(book) {
    if (!book.IsItBorrowable) {
      return;
    } else {
      this.booksIBorrow.push(book);
    }
  }
}

let user1 = new User("Lior", "Toherian", "Petachtikva");
let user2 = new User("Ben", "Cohen", "Jerusalem");
let user3 = new User("Ayala", "Shulman", "Tel-aviv");

class Book {
  BookName;
  AuthorName;
  IsItBorrowable;
  constructor(BookName, AuthorName, IsItBorrowable) {
    this.BookName = BookName;
    this.AuthorName = AuthorName;
    this.IsItBorrowable = IsItBorrowable ? true : false;
  }
}

let book = new Book("Tom Sawyer", "Mark Twain", true);
let book2 = new Book("Encyclopedia Britannica", "BlaBla", false);
let book3 = new Book(
  "Harry Potter and the Philosopher's Stone",
  " J. K. Rowling",
  true
);
let book4 = new Book(
  "Oxford Dictionary of the English Language",
  "Giraffe",
  false
);
let book5 = new Book(
  "Adventures of Sherlock Holmes",
  "Arthur Conan Doyle",
  true
);

user1.borrow(book);
user1.borrow(book2);
user1.borrow(book5);
user1.borrow(book4);
user2.borrow(book2);
user2.borrow(book3);
user3.borrow(book4);
user3.borrow(book5);
user3.borrow(book);

class Report {
  name;
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
          " borrows those books: "
      );
      element.booksIBorrow.forEach((book) => console.log(book.BookName));
    });
  }
}
let a = new Report("report1");

a.addNewUser(user1);
a.addNewUser(user2);
a.addNewUser(user3);
console.log(a);
a.printReport();
