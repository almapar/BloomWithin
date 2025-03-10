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

const hamburger = document.querySelector(".hamburger");
const nav_links = document.querySelector(".nav_links");

hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("active");
	nav_links.classList.toggle("open");
});

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
	scrollFunction();
};

function scrollFunction() {
	if (
		document.body.scrollTop > 20 ||
		document.documentElement.scrollTop > 20
	) {
		mybutton.style.display = "block";
	} else {
		mybutton.style.display = "none";
	}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
