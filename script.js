const myLibrary = [];
let shelf = document.querySelector('.shelf');

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

let sample1 = new Book('Pride and Prejudice', 'Jane Austen', '480')
let sample2 = new Book('Normal People', 'Sally Rooney', '266')

let submitButton = document.querySelector('.submit');

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function displayBook(book) {
  const bookDiv = document.createElement('div');
  bookDiv.classList.add('book');

  const titleElement = document.createElement('h3');
  titleElement.textContent = book.title;
  bookDiv.appendChild(titleElement);

  const authorElement = document.createElement('p');
  authorElement.textContent = `Author: ${book.author}`;
  bookDiv.appendChild(authorElement);

  const pagesElement = document.createElement('p');
  pagesElement.textContent = `Pages: ${book.pages}`;
  bookDiv.appendChild(pagesElement);

  shelf.appendChild(bookDiv);
}

addBookToLibrary(sample1);
addBookToLibrary(sample2);
myLibrary.forEach(book => displayBook(book));

function submitBook() {
  let title = document.getElementById('title').value;
  let author = document.getElementById('author').value;
  let pages = document.getElementById('pages').value;

  let newBook = new Book(title, author, pages);

  addBookToLibrary(newBook);
  displayBook(newBook);

    // Clear input fields after submission
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('pages').value = '';
}

submitButton.addEventListener('click', submitBook);
