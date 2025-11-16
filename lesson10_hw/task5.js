class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
}
class EBook extends Book {
    constructor(title, author, year, format) {
        super(title, author, year);
        this.format = format;
    }
    static createEbook(obj, format) {
        return new EBook(obj.title, obj.author, obj.year, format);
    }
}

const book = new Book('This Book', 'Some Person', 2025);
console.log(book);
//book.format = "fb2"
//console.log(book);
//const ebook = {...book, format: "fb2"}
//console.log(ebook);
console.log(EBook.createEbook(book, 'pdf'));
