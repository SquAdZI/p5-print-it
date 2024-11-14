// Un tableau d'objets contenant les slides
const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const arrowRight = document.querySelector(".arrow_right")
let index = 0
arrowRight.addEventListener("click", () => {
	index = index == 3 ? 0 : index + 1
	changeSlide(index)
	changeDot(index)
})

const arrowLeft = document.querySelector(".arrow_left")
arrowLeft.addEventListener("click", () =>{
	index = index == 0 ? 3 : index - 1
	changeSlide(index)
	changeDot(index)
})

const changeSlide = (numberSlide) => {
	// Récuperer l'index et changer le contenu du slide
	const image = document.querySelector('.banner-img')
	image.src = `./assets/images/slideshow/${slides[numberSlide].image}`
	const tagLine = document.querySelector('#banner > p')
	tagLine.innerHTML = slides[numberSlide].tagLine
}

const changeDot = (numberDot) => {
	document.querySelector('.dot_selected')
		.classList
		.remove('dot_selected')
	dots.children[numberDot]
		.classList
		.add('dot_selected')
}

const dots = document.querySelector(".dots")
for(let i = 0; i < slides.length; i++){
	// variable = (condition) ? valeur si vrai : valeur si faux// (ternaire) très important
	const selected = i == 0 ? " dot_selected" : ""
	const dot = `<div class="dot ${selected}"></div>`
	dots.insertAdjacentHTML("beforeend", dot)
}