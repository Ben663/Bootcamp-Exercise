/*
Create a webpage that has an input field for the user’s age and
a button. If the user enters a number above 18, make the text
“you can drink appear”. If the user enters a number below 18,
make the text “you’re too young” appear.
*/
const ageup = document.querySelectorAll('.number')
function age (number)  {
    alert((document.getElementById('Number').value*1 > 18) ? 'you can drink appear' : 'you too young ')
}




