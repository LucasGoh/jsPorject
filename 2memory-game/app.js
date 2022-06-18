const cardArray = [
	{
		name: 'fries',
		img: 'images/fries.png',
	},
	{
		name: 'cheseburger',
		img: 'images/cheeseburger.png',
	},
	{
		name: 'hotdog',
		img: 'images/hotdog.png',
	},

	{
		name: 'ice-cream',
		img: 'images/ice-cream.png',
	},
	{
		name: 'milkshake',
		img: 'images/milkshake.png',
	},
	{
		name: 'pizza',
		img: 'images/pizza.png',
	},
	{
		name: 'fries',
		img: 'images/fries.png',
	},
	{
		name: 'cheseburger',
		img: 'images/cheeseburger.png',
	},
	{
		name: 'hotdog',
		img: 'images/hotdog.png',
	},

	{
		name: 'ice-cream',
		img: 'images/ice-cream.png',
	},
	{
		name: 'milkshake',
		img: 'images/milkshake.png',
	},
	{
		name: 'pizza',
		img: 'images/pizza.png',
	}
]
cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const cardsChosen = []
const cardsChosenIds = []
function createBoard() {
	for (let i=0;i<10;i++) {
		const card = document.createElement('img')
		card.setAttribute('src','images/blank.png')
		card.setAttribute('data-id',i)
		card.addEventListener('click',flipcard)
		gridDisplay.appendChild(card)
	}
}
createBoard()

function checkMatch() {
	const cards = document.querySelectorAll('#grid img')
	if(cardsChosen[0]==cardsChosen[1]){
		alert('found a match')
		cards[cardsChosenIds[0]].setAttribute('src','images/white.png')
	}


}
function flipcard() {
	let cardId=this.getAttribute('data-id')
	cardsChosen.push(cardArray[cardId].name)
	cardsChosenIds.push(cardId)
	console.log(cardsChosen)
	console.log(cardsChosenIds)
	this.setAttribute('src',cardArray[cardId].img)
	if (cardsChosen===2) {
		setTimeout(checkMatch,500)
	}
}
