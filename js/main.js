// FADE IN BACK TO TOP BUTTON WHEN USER SCROLLS DOWN
window.onscroll = function () {
	let backToTop = document.getElementById("backTop");
	if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
		backToTop.style.visibility = 'visible';
	} else {
		backToTop.style.visibility = 'hidden';
	}
};



// ANIMATE WHEN ELEMENTS SCROLL INTO VIEW

 <script src="bower_components/aos/dist/aos.js"></script>


// UPDATES THE COPYRIGHT YEAR
const currentYear = new Date().getFullYear();
document.getElementById("copyYear").textContent = `© ${currentYear} Clean & Green, LLC \u00A0 |\u00A0 \u00A0 All Rights Reserved`;