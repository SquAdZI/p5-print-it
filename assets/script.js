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
	if(index == 3){
		index = 0
	} else {
		index++;
	}
	const image = document.querySelector('.banner-img')
	image.src = `./assets/images/slideshow/${slides[index].image}`
	const tagLine = document.querySelector('#banner > p')
	tagLine.innerHTML = slides[index].tagLine
})

const arrowLeft = document.querySelector(".arrow_left")
arrowLeft.addEventListener("click", () =>{
	if(index == 0){
		index = 3
	} else {
		index--;
	}
	const image = document.querySelector('.banner-img')
	image.src =`./assets/images/slideshow/${slides[index].image}`
	const tagLine = document.querySelector(`#banner > p`)
	tagLine.innerHTML = slides[index].tagLine
})

const dots = document.querySelector(".dots")
for(let i = 0; i < slides.length; i++){
	let selected = ""
	if(i == 1){
		selected = " dot_selected"
	}
	const dot = `<div class="dot ${selected}"></div>`
	dots.insertAdjacentHTML("beforeend", dot)
}
