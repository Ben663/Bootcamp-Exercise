
const h1= document.querySelector('h1');
const p= document.querySelector('p');

async function getData() {
    const res = await fetch('https://api.jokes.one/jod');
    console.log(JSON.stringify(res).contents.jokes[0].joke.text);
}
getData();