//import Book from "./task1.js"
class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  printInfo() {
    return console.log(`Title is  ${this.title}, Author: ${this.author}, Year: ${this.year}`);
  }
}
class EBook extends Book {
    constructor(title, author, year, format) {
    super(title, author, year);
    this.format = format;
  }

  printInfo() {
     console.log(`Title is:  ${this.title}, Author: ${this.author}, Year: ${this.year}, File format: ${this.format}`);
  };
  };

const ebook = new EBook("This EBook", "Anton Chekhov", 2025, "fb2");
ebook.printInfo();