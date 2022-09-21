const book ={
    bookName : '' ,
    authorName : 'bob',
    publishingYear: 1993,
    countryOfPublic: 'israel'
}
book['bookName'] = 'Aladin';
book.authorName = 'GEROGE'
console.log(`The book ${book.bookName} was written by ${book.authorName} in the year ${book.publishingYear}`);
