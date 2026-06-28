export const promoBar = () => {
	const promoBar = document.querySelector("#register");
	const closeBtn = document.querySelector("#register__close");

	if (promoBar && closeBtn) {
		closeBtn.addEventListener("click", () => {
			promoBar.classList.add("register--hidden");

			setTimeout(() => {
				promoBar.style.display = "none";
			}, 300);
		});
	}
};
