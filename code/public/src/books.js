function findAuthorById(authors, id) {
  let result = {}
  for (let i = 0; i < authors.length; i++) {
    if (id == authors[i].id) {
      return authors[i]
    }
  }
  return result
}

function findBookById(books, id) {
  let result = {}
  for (let i = 0; i < books.length; i++) {
    if (id == books[i].id) {
      return books[i]
    }
  }
  return result
}

function partitionBooksByBorrowedStatus(books) {
  const result = books.reduce((acc, item) => {
    if (item.borrows.find(b => b.returned == false)) {
      acc[0].push(item)
    } else {
      acc[1].push(item)
    }
    return acc
  }, [[], []])
  
  return result
}

function getBorrowersForBook(book, accounts) {
  let borrowers = [];
  accounts.map((account) => {
    book.borrows.find((borrow) => {
      if (borrow.id === account.id) {
        account["returned"] = borrow.returned
        borrowers.push(account)
      }

    })
  })
  return borrowers.splice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
