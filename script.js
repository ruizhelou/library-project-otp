const myLibrary = [];

function Book(title, author, numPages, haveRead) {
    if(!new.target) {
        throw Error("You must use the 'new' operator to call the constructor")
    }
    this.title = title
    this.author = author
    this.numPages = numPages
    this.haveRead = haveRead
    this.info = function() {
        return `${title} by ${author}, ${numPages} pages, ${haveRead ? 'currently reading' : 'not read yet'}`
    }
}

function addBookToLibrary(title, author, numPages, haveRead) {
    const book = new Book(title, author, numPages, haveRead)
    book.id = crypto.randomUUID()
    myLibrary.push(book)
}

addBookToLibrary("title", "author", 10, true)
addBookToLibrary("title 2", "author 2", 11, false)
console.log(myLibrary)

// 3. function() look through array and display each book visually (e.g. table, card, etc) can manualy add books to see for now

// 4 new book button to bring up a form allowing user to input details for new book and add to lib e.g. sidebar/ <dialog>

// 5 add button on each book to remove book from library

// 6 add button on each book to update red status
