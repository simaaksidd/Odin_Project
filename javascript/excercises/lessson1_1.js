// trying to make a Book object: 

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read - read;
    this.info = function() {
        if(this.read = true) {
            console.log(`${this.title } by ${this.author}, ${this.pages} pages, have read`)
        } 
        else {
            console.log(`${this.name} by ${this.author}, ${this.pages} pages, have not read yet`)
        }
    };
}
const Book1 = new Book("The Hobbit", "J.R.R. Tolkien", "295", true);
Book1.info();