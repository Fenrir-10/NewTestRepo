// const colors = ['red','orange','yellow','green','blue','indigo','violet'];
// const h1 = document.querySelector('h1');
// h1.addEventListener('mouseover', function(){
//     console.log(this.innerText);
// })
// const changeColor = function(){
//     // const h1 = document.querySelector('h1');
//     h1.style.color = this.style.backgroundColor;
// }



// const container = document.querySelector('#boxes');
// for(color of colors){
//     const box = document.createElement('div');
//     box.style.backgroundColor = color;
//     box.classList.add('box');
//     container.appendChild(box);
//     box.addEventListener('click', changeColor);
// }
// document.body.addEventListener('keypress', function(e){
//     console.log(e);
// })


// const key = document.querySelector('#username');
// key.addEventListener('keydown', function(e){
//     console.log("Key Pressed");
//     if(e.key === "y")
//     alert("DONT PRESS Y");
// })
const addItemInput = document.querySelector('#addItem');
const itemsUL = document.querySelector('#items');
addItemInput.addEventListener('keypress', function(e){
    if (e.key==='Enter'){
        if(!this.value) return;
        const item = this.value;
        const newItem = document.createElement('li');
        newItem.innerText = item;
        itemsUL.appendChild(newItem);
        this.value = '';
    }
})