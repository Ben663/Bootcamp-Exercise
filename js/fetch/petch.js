const button = document.querySelector('button');
const h1= document.querySelector('h1');
const p= document.querySelector('p');
button.addEventListener('click', () => {
    fetchData();
})

function fetchData() {
    const respons = fetch('https://api.jokes.one/jod')

    respons.then((data) => {
        return data.json();

    }).then((data)=>{
        p.textContent= data.contents.jokes[0].joke.text
        h1.textContent= data.contents.jokes[0].joke.title
    
    }).catch((error) => {
        console.log(error);
    })
}