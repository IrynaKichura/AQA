class Book {
    constructor(title, author, year) {
        this._title = title;
        this._author = author;
        this._year = year;
    }

    get title() {
        return this._title;
    }
    get author() {
        return this._author;
    }
    get year() {
        return this._year;
    }

    set year(value) {
        if (value < 1990) {
            console.log('This is quite old book');
            return; //this._year = 2000
        }
        this._year = value;
    }
}

class EBook extends Book {
    constructor(title, author, year, format) {
        super(title, author, year);
        this._format = format;
    }
    get format() {
        return this._format;
    }

    set format(value) {
        if (typeof value !== 'string') {
            console.log('This format is not supported');
            return;
        }
        this._format = value;
    }
}

const ebook2 = new EBook('This EBook', 'Anton Chekhov', 1888, 'fb2');
ebook2.year = 1888;
ebook2.format = 44;
console.log(
    `Title is:  ${ebook2.title}, Author: ${ebook2.author}, Year: ${ebook2.year}, File format: ${ebook2.format}`
);
