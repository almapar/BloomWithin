function mainExpand() {
	const main = document.getElementsByTagName("main")[0];
	const video = document.getElementsByClassName("background-clip")[0];

	const width = window.innerWidth;

	const end = 350;
	const currentScroll = window.scrollY;
	const start = -200;

	const calculateSize = (currentScroll - start) / (end - start);

	main.style.borderTopLeftRadius = (1 - calculateSize) * 24 + "px";
	main.style.borderTopRightRadius = (1 - calculateSize) * 24 + "px";

	if (calculateSize > 0.7) {
		main.classList.add("unblurred-main");
		video.setAttribute(
			"style",
			`filter: blur(${((calculateSize - 0.7) / 0.3) * 20}px)`
		);
	} else {
		main.classList.remove("unblurred-main");
		video.setAttribute("style", `filter: blur(0px)`);
	}

	if (calculateSize >= 0.6 && calculateSize <= 1) {
		main.style.maxWidth = calculateSize * 100 + "%";
	} else if (calculateSize >= 1) {
		main.style.maxWidth = 100 + "%";
		main.style.borderTopLeftRadius = 0 + "px";
		main.style.borderTopRightRadius = 0 + "px";
	} else if (calculateSize <= 0.6) {
		main.style.maxWidth = 60 + "%";
		main.style.borderTopLeftRadius = 24 + "px";
		main.style.borderTopRightRadius = 24 + "px";
	}
}

document.addEventListener("scroll", mainExpand);
