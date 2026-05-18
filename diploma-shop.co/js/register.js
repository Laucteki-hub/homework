export const promoBar = () => {
	const promoBar = document.querySelector("#register");
	const closeBtn = document.querySelector("#register__close");

	if (promoBar && closeBtn) {
		closeBtn.addEventListener("click", () => {
			// Просто добавляем класс, CSS сделает остальное
			promoBar.classList.add("register--hidden");

			// Опционально: полностью удаляем из DOM после анимации (через 300мс)
			setTimeout(() => {
				promoBar.style.display = "none";
			}, 300);
		});
	}
};
