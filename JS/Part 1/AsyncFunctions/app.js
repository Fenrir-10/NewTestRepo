// function getData(){
//     const data = axios.get('http://swapi.dev/api/planets/')
//     console.log(data);
// }

// const greet = async ()=>{
//     const res = await axios.get('http://swapi.dev/api/plansdsacaets/');
//     console.log(res.data)
// }

// greet();

//SEQUENTIAL REQUEST

// async function get3Pokemon() {
//     const poke1 = await axios.get('https://pokeapi.co/api/v2/pokemon/1/');
//     const poke2 = await axios.get('https://pokeapi.co/api/v2/pokemon/2/');
//     const poke3 = await axios.get('https://pokeapi.co/api/v2/pokemon/3/');
//     console.log(poke1.data.name.toUpperCase());
//     console.log(poke2.data.name);
//     console.log(poke3.data.name);
// }
// get3Pokemon();

// async function get3Pokemon() {
//     const poke1 = axios.get('https://pokeapi.co/api/v2/pokemon/1/');
//     const poke2 = axios.get('https://pokeapi.co/api/v2/pokemon/2/');
//     const poke3 = axios.get('https://pokeapi.co/api/v2/pokemon/3/');
//     await poke1;
//     await poke2;
//     await poke3;  
//     console.log(poke1.data.name.toUpperCase());
//     console.log(poke2.data.name);
//     console.log(poke3.data.name);
// }
// get3Pokemon();

// function changeBodyColor(color,delay) {
//     return new Promise((resolve,reject) => {
//         setTimeout(()=>{
//             document.body.style.backgroundColor = color;
//             resolve();
//         },delay);
//     })
// }

// async function lightShow(){
//     const p1 = changeBodyColor('teal', 1000);
//     const p2 = changeBodyColor('pink',1000);
//     const p3 = changeBodyColor('red', 1000);
//     const p4 = changeBodyColor('green',1000);
//     await p1;
//     await p2;
//     await p3;
//     await p4;
// }
// lightShow();


async function get3Pokemon() {
    const poke1 = axios.get('https://pokeapi.co/api/v2/pokemon/1/');
    const poke2 = axios.get('https://pokeapi.co/api/v2/pokemon/2/');
    const poke3 = axios.get('https://pokeapi.co/api/v2/pokemon/3/');
    const results = await Promise.all([poke1,poke2,poke3]); 
    console.log(results);
    printPokemon(results);
}
function printPokemon(results){
    for(let pokemon of results){
        console.log(pokemon.data.name);
    }
}
get3Pokemon();