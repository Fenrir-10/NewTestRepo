// https://swapi.dev/api/planets/

// const firstReq = new XMLHttpRequest();

// firstReq.addEventListener('load', () => {
//     console.log("IT WORKED!!!!")
//     const data = JSON.parse(firstReq.responseText);
//     const filmURL = data.results[0].films[0];
//     const filmReq = new XMLHttpRequest();
//     filmReq.addEventListener('load', function(e){
//         console.log("Film Request worked");
//         const filmData = JSON.parse(this.responseText);
//         console.log(filmData.title.toUpperCase());
//     })
//     filmReq.addEventListener('error', function(e){
//         console.log("ERROR!!!", e)
//     })
//     filmReq.open('GET',filmURL);
//     filmReq.send();
//     // for(let planet of data.results)
//     // {
//     //     console.log(planet.name);
//     // }
// });
// firstReq.addEventListener('error', () => {
//     console.log("ERROR!!!!!");
// })
// firstReq.open('GET', 'https://swapi.dev/api/planets/');
// firstReq.send();
// console.log("Request Sent");

//FETCH 

const checkStatusAndParse = (response)=>{
    if(!response.ok){
        throw new Error(`Status Code Error: ${response.status}`);
    }
    else{
    return response.json()
}
}

const printPlanets = ((data)=>{
    console.log("Loaded 10 more planets");
    for (let planet of data.results){
        console.log(planet.name);
    }
    return Promise.resolve(data.next);
})
const fetchNextPlanets = (url = 'https://swapi.dev/api/planets/') => {
    return fetch(url);
};
fetchNextPlanets()
.then(checkStatusAndParse)
.then(printPlanets)
.then(fetchNextPlanets)
.then(checkStatusAndParse)
.then(printPlanets)
.then(fetchNextPlanets)
.then(checkStatusAndParse)
.then(printPlanets)
.catch((err)=>{
    console.log("something went wrong");
    console.log(err);
})
