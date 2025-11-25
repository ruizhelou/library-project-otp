const library = [];

function Book(title, author, numPages, reading) {
    if(!new.target) {
        throw Error("You must use the 'new' operator to call the constructor")
    }
    this.title = title
    this.author = author
    this.numPages = numPages
    this.reading = reading
    this.info = function() {
        return `${title} by ${author}, ${numPages} pages, ${reading ? 'currently reading' : 'not read yet'}`
    }
}

function addBookToLibrary(title, author, numPages, reading) {
    const book = new Book(title, author, numPages, reading)
    book.id = crypto.randomUUID()
    library.push(book)
}

function displayBooks() {
    for(const book of library) {
        const bookTitle = document.createElement("div")
        bookTitle.classList.add("book-title")
        bookTitle.textContent = `${book.title}`

        const bookAuthor = document.createElement("div")
        bookAuthor.classList.add("book-author")
        bookAuthor.textContent = `Author: ${book.author}`

        const bookPages = document.createElement("div")
        bookPages.classList.add("book-pages")
        bookPages.textContent = `Number of pages: ${book.numPages}`

        const bookReadStatus = document.createElement("div")
        if(book.reading) {
            bookReadStatus.style.color = "blue";
        } else {
            bookReadStatus.style.color = "grey";
        }
        bookReadStatus.textContent = `Status: ${book.reading ? 'Reading' : 'Not read'}`

        const cardButtons = document.createElement("div")
        cardButtons.classList.add("card-btns")

        const toggleReadingStatusButton = document.createElement("button")
        toggleReadingStatusButton.classList.add("change-read-status-btn")
        toggleReadingStatusButton.textContent = 'Change read status'

        const removeBookButton = document.createElement("button")
        removeBookButton.classList.add("remove-book-btn")
        removeBookButton.textContent = 'Remove'

        cardButtons.appendChild(removeBookButton)
        cardButtons.appendChild(toggleReadingStatusButton)
        
        const bookDom = document.createElement("div")
        bookDom.classList.add("card")
        bookDom.appendChild(bookTitle)
        bookDom.appendChild(bookAuthor)
        bookDom.appendChild(bookPages)
        bookDom.appendChild(bookReadStatus)
        bookDom.appendChild(cardButtons)

        const bookLibrary = document.querySelector(".book-display")
        bookLibrary.appendChild(bookDom)
    }
}

addBookToLibrary("Cryptonomicon", "Neal Stephenson", 1168, true)
addBookToLibrary("The Stand", "Stephen King", 1153, false)
addBookToLibrary("The Way of Kings", "Brandon Sanderson", 1007, false)
addBookToLibrary("The Brothers Karamazov", "Fyodor Dostoyevsky", 924, true)
addBookToLibrary("Harry Potter and the Order of the Phoenix", "J.K. Rowling", 870, true)

displayBooks()

// 3. function() look through array and display each book visually (e.g. table, card, etc) can manualy add books to see for now

// 4 new book button to bring up a form allowing user to input details for new book and add to lib e.g. sidebar/ <dialog>

// 5 add button on each book to remove book from library

// 6 add button on each book to update red status
