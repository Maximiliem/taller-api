const btn = document.querySelector('button');
const parrafo = document.querySelector('h2');

btn.addEventListener('click', getData);

async function getData() {
    try {
    const data = await fetch('https://api.chucknorris.io/jokes/random');
    const json = await data.json();
    // console.log(json);
    // console.log(json.value);
    parrafo.textContent = json.value;
    }
    catch(error){
        console.error(error);
    }
}