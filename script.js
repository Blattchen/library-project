// Store books in array
let myLibrary = []
//book constructor
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = () => `${title} by ${author}, ${pages} pages, ${(read) ? `read` : `not read yet`}`
}
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
        li.textContent = myLibrary[i].info()
        ol.appendChild(li)
    }
}


// get the new book button
const bookBtn = document.querySelector(".newBook")

//click function for button
bookBtn.addEventListener("click", addBookForm)

// function to add form to add books
function addBookForm() {
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
        console.log(titleInp.value)
        console.log(authorInp.value)
        console.log(pagesInp.value)
        console.log(isRead.checked)
        addBookToLibrary(titleInp.value, authorInp.value, pagesInp.value, isRead.checked)
        addBooks()
        form.remove()

    })
    // hide button
    const hide = document.createElement("button")
    hide.textContent = "Hide"
    hide.addEventListener("click", (e) => {
        e.preventDefault()
        form.remove()
    })
    form.appendChild(hide)
    document.body.appendChild(form)
}



