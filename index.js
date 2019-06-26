

function renderBooks(gotObject) {
  const main = document.querySelector('main')
  gotObject.forEach(book => {
    const p = document.createElement('p')
    p.innerHTML = `<p>${book.name}</p>`
    main.appendChild(p)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})

function fetchBooks() {
return fetch('https://anapioficeandfire.com/api/books')
  .then(promise => promise.json())
  .then(gotObject => renderBooks(gotObject));
}
