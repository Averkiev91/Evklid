document.addEventListener("DOMContentLoaded", () => {

	/* Slider */

	const swiper = new Swiper(".mySwiper", {
		pagination: {
			el: ".swiper-pagination",
			type: 'bullets',
			clickable: true
		},
		autoplay: {
			delay: 6000,
			disableOnInteraction: false
		}
	})

	/* work-tabs */

	document.querySelectorAll('.work__btn').forEach((el) => {
		el.addEventListener('click', (el) => {
			const tab = el.currentTarget.dataset.path

			document.querySelectorAll('.tab-content').forEach((el) => {
				el.classList.remove('tab-content--active')

				document.querySelector(`[data-target='${tab}']`).classList.add('tab-content--active')
			})
		})

		el.addEventListener('click', (el) => {
			const tabDefault = el.currentTarget.dataset.default

			document.querySelectorAll('.work__btn').forEach((el) => {
				el.classList.remove('work__btn--active')

				document.querySelector(`[data-path='${tabDefault}']`).classList.add('work__btn--active')
			})
		})
	})

	/* accordion */

	$( function() {
		$( '#accordion' ).accordion({
			collapsible: true, 
			active: false,
			icons: false,
			heightStyle: 'content'

		});             
	});

	/* Burger */

	const burgerButton = document.querySelector('.burger')
	const overlay = document.querySelector('.overlay')
	const navMenu = document.querySelector('.nav')

	function toggleBurger() {
		burgerButton.classList.toggle('burger--active')
		navMenu.classList.toggle('nav--active')
		overlay.classList.toggle('overlay--active')
		document.body.classList.toggle('no-scroll')
	}

	burgerButton.addEventListener('click', () => {
		toggleBurger()
	})
})