function User(UserName) {
  (this.UserName = UserName),
    (this.IFollowAfter = []),
    (this.Followers = []),
    (this.FollowMe = function (SomeUser) {
      this.Followers.push(SomeUser); //אני דוחפת משתמש חדש לרדשימת האנשים שעוקבים אחרי
      SomeUser.IFollowAfter.push(this); // SomeUserבו זמנית אני דוחפת את המשתמש שלי למערך ההאנשים שאני עוקבת אחריהם שזה בעצם לתוך ה
    }),
    (this.SendMassage = function (Massage) {
      this.Followers.forEach((Follower) => {
        Follower.GetMassage(UserName, Massage);
      });
    }),
    (this.GetMassage = function (MassageContent, sender) {
      console.log(
        this.UserName + "  get the massage " + sender + "from " + MassageContent
      );
    });
}

let User1 = new User("User1 ");
let User2 = new User("User2 ");
let User3 = new User("User3 ");
let User4 = new User("User4 ");

User1.FollowMe(User2);
User1.FollowMe(User3);
User1.FollowMe(User4);
User2.FollowMe(User1);
User2.FollowMe(User4);
User3.FollowMe(User2);
User4.FollowMe(User1);

User1.SendMassage("Hello ");
User2.SendMassage("Welcome ");
User3.SendMassage("Hay ");
User4.SendMassage("Olla ");

console.log("The followers of User1 are: ");
console.log(User1.Followers);
console.log("The followers of User2 are: ");
console.log(User2.Followers);
console.log("The followers of User3 are: ");
console.log(User3.Followers);
console.log("The followers of User4 are: ");
console.log(User4.Followers);
