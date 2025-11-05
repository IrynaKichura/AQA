class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  static sortBooks(arr) {
    return arr.sort((a,b)=>a.year-b.year);
  }
}
class EBook extends Book {
    constructor(title, author, year, format) {
    super(title, author, year);
    this.format = format;
  }
  };
const books = [
    {title: "Book1", author: "Author1", year: 2025, format: "fb2" },
    {title: "Book2", author: "Author2", year: 1985 },
    {title: "Book3", author: "Author2", year: 2020, format: "pdf" },
    {title: "Book4", author: "Author4", year: 2015, format: "fb2" }
]
console.log(Book.sortBooks(books));