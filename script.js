// only add one book at a time
let addingNewBook = false
// Store books in array
let myLibrary = []
//book constructor
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}
// book display function
Book.prototype.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${(this.read) ? "read" : "not read yet"}`
}
// toggle is read function
Book.prototype.toggleRead = function () {
    this.read = !this.read
}
// get ol element to append books
const ol = document.querySelector(".list")

// add books to array function
function addBookToLibrary(title, author, pages, read) {
    myLibrary.push(new Book(title, author, pages, read))
}

// delete all books funktion
function delteAllBooks() {
    const li = document.querySelectorAll("li")
    li.forEach(element => {
        element.remove()
    });
    myLibrary = []
}
// delete all books button
const deleteBtn = document.querySelector(".deletebooks").addEventListener("click", delteAllBooks)


// function that loops trough lib array and prints on dom
function addBooks() {
    const li = document.querySelectorAll("li")
    li.forEach(element => {
        element.remove()
    });

    for (let i = 0; i < myLibrary.length; i++) {
        const li = document.createElement("li")
        const delBtn = document.createElement("button")
        const readBtn = document.createElement("button")
        readBtn.textContent = "change Read"
        readBtn.addEventListener("click", () => {
            myLibrary[i].toggleRead()
            addBooks()
        })
        delBtn.value = i
        delBtn.addEventListener("click", deleteLi)
        delBtn.textContent = "Delete"
        li.setAttribute("class", i)
        li.textContent = myLibrary[i].info()
        li.appendChild(readBtn)
        li.appendChild(delBtn)
        ol.appendChild(li)
    }
}
// functiion to delete list item and array
function deleteLi(e) {
    let index = e.target.value
    myLibrary.splice(index, 1)
    addBooks()
}

// get the new book button
const bookBtn = document.querySelector(".newBook")
bookBtn.addEventListener("click", addBookForm)

// function to add form to add books
function addBookForm() {
    // only add one book at a time
    if (addingNewBook) return
    addingNewBook = true
    //create empty form elemet
    const form = document.createElement("form")
    // create input and placeholder for title
    const titleInp = document.createElement("input")
    titleInp.setAttribute("type", "text")
    titleInp.setAttribute("name", "title")
    titleInp.setAttribute("placeholder", "Book Title")
    form.appendChild(titleInp)
    // for author
    const authorInp = document.createElement("input")
    authorInp.setAttribute("type", "text")
    authorInp.setAttribute("name", "author")
    authorInp.setAttribute("placeholder", "Author Name")
    form.appendChild(authorInp)
    // for pages
    const pagesInp = document.createElement("input")
    pagesInp.setAttribute("type", "number")
    pagesInp.setAttribute("name", "pages")
    pagesInp.setAttribute("placeholder", "Total pages")
    form.appendChild(pagesInp)
    // if read or not
    const isRead = document.createElement("input")
    const isReadLabel = document.createElement("label")
    isReadLabel.setAttribute("for", "check")
    isReadLabel.textContent = "Read ?"
    isRead.setAttribute("type", "checkbox")
    isRead.setAttribute("name", "read")
    isRead.setAttribute("id", "check")
    form.appendChild(isReadLabel)
    form.appendChild(isRead)

    // submit button
    const submit = document.createElement("input")
    submit.setAttribute("type", "submit")
    submit.setAttribute("name", "submit")
    submit.setAttribute("value", "Submit")
    submit.textContent = "Send"
    form.appendChild(submit)
    submit.addEventListener("click", (e) => {
        e.preventDefault()
        addingNewBook = false
        addBookToLibrary(titleInp.value, authorInp.value, pagesInp.value, isRead.checked)
        addBooks()
        form.remove()

    })
    // hide button
    const hide = document.createElement("button")
    hide.textContent = "Hide"
    hide.addEventListener("click", (e) => {
        e.preventDefault()
        addingNewBook = false
        form.remove()
    })
    form.appendChild(hide)
    document.body.appendChild(form)
}




