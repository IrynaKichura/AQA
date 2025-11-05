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

const book1 = new Book("Book1", "Tom Bredly", 2003);
const book2 = new Book("NewBook2", "Artur Teren", 2023);
book1.printInfo();
book2.printInfo();
