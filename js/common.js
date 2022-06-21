document.addEventListener("DOMContentLoaded", () => {

	/* Slider */

	const swiper = new Swiper(".mySwiper", {
		pagination: {
			el: ".swiper-pagination",
		},
		mousewheel: {
    	invert: true,
		},
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
})