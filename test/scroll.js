let stuart = document.querySelector('.stuart')
let kevin = document.querySelector('.kevin')

window.addEventListener('scroll', () => {
	let sRect = stuart.getBoundingClientRect()
  let kRect = kevin.getBoundingClientRect()
  let wHeight = window.innerHeight

		let distance = wHeight / 2 - sRect.top

    kevin.style.marginTop = distance + 'px'

})
