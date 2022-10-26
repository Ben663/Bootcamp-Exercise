const button = document.querySelector('button');
const h1 = document.querySelector('h1');
const p = document.querySelector('p');

button.addEventListener('click', () => {
    getData();
})
const getData = async () => {
    try {
        const res = await fetch('https://api.jokes.one/jod');
        const data = await res.json();
        h1.textContent = data.contents.jokes[0].joke.title
        p.textContent = data.contents.jokes[0].joke.text
    } catch (error) {
        console.log(error);
    }

}