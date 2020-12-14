function isTouching(a, b) {
	const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();

	return !(
		aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width
	);
}
let a = 0;
const avatar = document.querySelector('#player');
const coin = document.querySelector('#coin');

const moveCoin = () => {
	const x = Math.floor(Math.random() * innerWidth);
	const y = Math.floor(Math.random() * innerHeight);
	coin.style.top = `${y}px`;
	coin.style.left = `${x}px`;
}

window.addEventListener('keyup', function(e){
	if(e.key === "ArrowDown"){
		avatar.style.transform = "rotate(180)"
		moveVertical(avatar, 50);
		}
	else if(e.key === "ArrowUp"){
		moveVertical(avatar, -50);
	}
	else if(e.key === "ArrowRight"){
		avatar.style.transform = 'scale(1,1)'
		moveHorizontal(avatar, 50);	
	}
	else if(e.key === "ArrowLeft"){
		avatar.style.transform = 'scale(-1,1)'
		moveHorizontal(avatar, -50);
			}	
	if(isTouching(avatar,coin)) {
			a++;
			score.innerText = `Score = ${a}`;
			moveCoin();
			console.log("Got The Coin!!");
			if(a===10) {
			alert("YOU WIN!!");
			}
		}
})
const score = document.querySelector('h1');



const moveVertical = (element, amount) => {
	const currTop = extractPos(element.style.top);
	element.style.top = `${currTop + amount}px`;
}
const moveHorizontal = (element, amount) => {
	const currLeft = extractPos(element.style.left);
	element.style.left = `${currLeft + amount}px`;
}

const extractPos = (pos) => {
	if(!pos) return 10;
	return parseInt(pos.slice(0,-2));
}


moveCoin();
