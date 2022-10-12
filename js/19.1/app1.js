/*
Create a variable that holds the <li> element with the class
“start-here”. Use traverse methods to complete these tasks:
1. Change the text from “title 2” to “main title”
2. Add another subtitle with the text “subtitle 4”
3. Delete the last <li> element from the list.
4. Change the <title> element text to “Master Of The Dom”.
5. Change the text of the <p> element ot something else of
your
*/
const firstLi = document.querySelector('.start-here');

//1
firstLi.textContent = 'main title';

//2
const Ul = firstLi.nextSibling.firstElement;

const newLi = document.createElement('li');
newLi.textContent = 'sub title 4';
Ul.appendChild(newLi);


//3
const firstUl = firstLi.parentElement;
firstUl.lastElementChild.remove();


//4
const Head = document.head;
const title = Head.lastElementChild;
title.textContent = 'Master Of The Dom';

