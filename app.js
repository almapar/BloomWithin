let lastScrollPixel = 0;

function hideAndUnhideHeader() {
	const header = document.getElementsByTagName("header")[0];

	const currentScroll = window.scrollY;

	if (currentScroll > lastScrollPixel) {
		header.classList.add("headerUp");
	} else {
		header.classList.remove("headerUp");
	}

	lastScrollPixel = currentScroll;
}

document.addEventListener("scroll", hideAndUnhideHeader);
// window.onscroll += hideAndUnhideHeader;
