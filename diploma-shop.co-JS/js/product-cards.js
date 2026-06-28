const expandButtons = document.querySelectorAll(".js-expand-btn");

expandButtons.forEach((btn) => {
	btn.addEventListener("click", () => {
		const targetSelector = btn.getAttribute("data-target");
		const section = document.querySelector(targetSelector);

		if (section) {
			const cards = section.querySelectorAll(".product-card");
			let isOpened = false;

			cards.forEach((card) => {
				if (card.classList.contains("always")) return;

				const isHidden = card.classList.toggle("product-card--hidden");

				isOpened = !isHidden;
			});

			btn.textContent = isOpened ? "Свернуть" : "Посмотреть всё";
		}
	});
});
