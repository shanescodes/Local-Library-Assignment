function findAccountById(accounts, id) {
  let result = {}
  for (let i = 0; i < accounts.length; i++) {
    if (id == accounts[i].id) {
      return accounts[i]
    }
  }
  return result
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((a, b) => a.name.last > b.name.last ? 1:-1) ;
}

function getTotalNumberOfBorrows(account, books) {
  let idOfBorrows = [];
  for (let i = 0; i < books.length; i++) {
    const book = books[i].borrows
    for (let j = 0; j < book.length; j++) {
      let borrowId = book[j].id;
      idOfBorrows.push(borrowId);
    }
  }
  let idMatch = idOfBorrows.filter((matches) => matches == account.id);

  return idMatch.length
}


function getBooksPossessedByAccount(account, books, authors) {
  return books.filter(book => book.borrows.find(b => b.returned == false && b.id == account.id))
  .map(book => {
    book.author = authors.find(a => a.id == book.authorId)
    return book
  })
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
