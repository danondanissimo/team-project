(() => {
	const menuClsRef = document.querySelector("[link-menu]");
	const mobileMenuRef = document.querySelector("[data-menu]");
	const menuBtnRef = document.querySelector("[data-menu-button]");

	menuClsRef.addEventListener("click", () => {

		menuBtnRef.classList.toggle("is-open");
		

		mobileMenuRef.classList.toggle("is-open");
		
	});
})();
