const book1 = {
    name : 'bob a bany',
    author : 'bob',
    year : 1993 ,

}
const book2 = {
    name : 'hari poter',
    author : 'j.k.',
    year : 1997 ,
}
const bookUtils = {
    getFirstPublished (bookA, bookB){
       return bookA.year < bookB.year ? bookA : bookB;
    },
    setNewEdition (a ,b){
        return a.latestEdition = b;
    },
    setLanguage (book , lan){
        return book.language = lan;
    },
    setTranslation (book , lan , translator ){
        book.translator = {lan,translator};
    },
    setPublisher (book ,name , location){
        book.publisher = {name, location}
    },
    isSamePublisher (b1,b2){
        console.log(b1.publisher === b2.publisher && b1.name === b2.name ? "same" : "not same");
    }
}
console.log(bookUtils.getFirstPublished(book1,book2));
console.log(bookUtils.getFirstPublished(book2,book1));
console.log(bookUtils.setNewEdition(book1 ,2006));
console.log(bookUtils.setNewEdition(book2 ,2008));
console.log(bookUtils.setLanguage(book1 , 'spanish'));
console.log(bookUtils.setLanguage(book2 , 'arbik'));
console.log(bookUtils.setTranslation(book1, 'english' , 'bob'));
console.log(bookUtils.setTranslation(book2, 'turkish' , 'doron'));
console.log(bookUtils.setPublisher(book1, 'beny' ,'Israel'));
console.log(bookUtils.setPublisher(book2, 'ben' ,'israel'));
console.log(bookUtils.isSamePublisher(book1,book2));
console.log(book1);
console.log(book2);


