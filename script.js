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
    const bookLibrary = document.querySelector(".book-display")
    bookLibrary.innerHTML = ''

    for(let i = 0; i < library.length; i++) {
        const book = library[i];

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
        bookReadStatus.textContent = `Status: ${book.reading ? 'Reading' : 'Not reading'}`

        const cardButtons = document.createElement("div")
        cardButtons.classList.add("card-btns")

        const toggleReadingStatusButton = document.createElement("button")
        toggleReadingStatusButton.classList.add("change-read-status-btn")
        toggleReadingStatusButton.textContent = 'Toggle read status'

        const removeBookButton = document.createElement("button")
        removeBookButton.classList.add("remove-book-btn")
        removeBookButton.textContent = 'Remove'
        removeBookButton.addEventListener("click", () => {
            library.splice(0, 1)
            displayBooks()
        })

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

const addBookButton = document.querySelector(".add-book-btn")
addBookButton.addEventListener("click", () => {
    const sideBar = document.querySelector(".side-bar")
    if(sideBar.style.display === "none") {
        sideBar.style.display = "block"
    } else {
        sideBar.style.display = "none"
    }
})

const submitButton = document.querySelector(".submit-btn")
submitButton.addEventListener("click", () => {
    const form = document.getElementById("add-book-form");
    if (!form.reportValidity()) {
        return
    }

    const bookTitle = document.querySelector('#book-title').value
    const bookAuthor = document.querySelector('#book-author').value
    const bookNumPages = document.querySelector('#book-num-pages').value
    const bookReadingStatus = document.querySelector('#book-reading-status').checked

    addBookToLibrary(bookTitle, bookAuthor, bookNumPages, bookReadingStatus)
    displayBooks()
    event.preventDefault()
})

addBookToLibrary("Cryptonomicon", "Neal Stephenson", 1168, true)
addBookToLibrary("The Stand", "Stephen King", 1153, false)
addBookToLibrary("The Way of Kings", "Brandon Sanderson", 1007, false)
addBookToLibrary("The Brothers Karamazov", "Fyodor Dostoyevsky", 924, true)
addBookToLibrary("Harry Potter and the Order of the Phoenix", "J.K. Rowling", 870, true)
addBookToLibrary("The Hunger Games", "Suzanne Collins", 373, true)
addBookToLibrary("Dracula", "Bram Stoker", 400, false)
displayBooks()

// 6 add button on each book to update red status
