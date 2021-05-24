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
    for(let i = 0; i < books.length; i++) {
  if (id == books[i].id) {
    return books[i]
  }
  }
return result
}

function partitionBooksByBorrowedStatus(books) { 
  let returned = []
  let not_returned = []
  for(let i = 0; i < books.length; i++) {
    if(books[i].borrows.find(b => b.returned == false)) {
not_returned.push(books[i])
    } else {
returned.push(books[i])
    }
  }
  return [not_returned, returned] 
}

function getBorrowersForBook(book, accounts) { 
  let borrowers = [];
  accounts.map((account)=>{
   book.borrows.find((borrow)=>
   {
     if(borrow.id === account.id)
       {
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
