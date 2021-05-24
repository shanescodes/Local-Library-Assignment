function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
  let borrowedArray = [];
  for (let i = 0; i < books.length; i++) {
    if (books[i].borrows[0].returned === false) {
      borrowedArray.push(books[i]);
    }
  }
  let allBorrowed = borrowedArray.length;
  return allBorrowed;
}



function getMostCommonGenres(books) {
  const genre = {}
  for (let i in books) {
    const book = books[i]
    if (genre[book.genre]) {
      genre[book.genre]++
    } else {
      genre[book.genre] = 1
    }
  }
  console.log(genre)
  let countGenre = []
  for (let i in genre) {
    countGenre.push({
      name: i,
      count: genre[i]
    })


  }
  console.log(countGenre)
  countGenre = countGenre.sort((a, b) => b.count - a.count)
    .filter((item, i) => i < 5)
  return countGenre
}


function getMostPopularBooks(books) {
  return books.map(book => {
    return {
      name: book.title,
      count: book.borrows.length
    }
  })
    .sort((a, b) => b.count - a.count)
    .filter((item, i) => i < 5)
}

function getMostPopularAuthors(books, authorsList) {
  const authors = {}
  for (let i in books) {
    const book = books[i]
    if (authors[book.authorId]) {
      authors[book.authorId] += book.borrows.length
    } else {
      authors[book.authorId] = book.borrows.length
    }
  }

  let countAuthor = []

  for (let i in authors) {
    const authorFound = authorsList.find(a => a.id == i)
    countAuthor.push({
      name: authorFound.name.first + " " + authorFound.name.last,
      count: authors[i]
    })


  }

  countAuthor = countAuthor.sort((a, b) => b.count - a.count)
    .filter((item, i) => i < 5)
  return countAuthor
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
